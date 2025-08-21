import { useRef } from "react";
import * as Yup from "yup";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import type { RootState } from "@/store/store";
import { setIsChecking } from "@/features/subscriptionForm/subscriptionFormSlice";
import { checkIfSubscribed, subscribeUser } from "@/services/subscription";
import type { FormikHelpers } from "formik";
import { useHydrationSafeTranslation } from "@/hooks/useHydrationSafeTranslation";

/**
 * Custom hook for managing email subscription form functionality
 * Handles email validation, subscription checking, and form submission
 * Includes debounced email checking and comprehensive error handling
 */
export function useSubscriptionForm() {
  const { t } = useHydrationSafeTranslation();
  const dispatch = useAppDispatch();

  // Get subscription checking state from Redux
  const isChecking = useAppSelector(
    (state: RootState) => state.subscriptionForm.isChecking
  );
  const queryClient = useQueryClient();

  // Refs for managing debounced email checking
  const inputCheckTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const latestScheduledValueRef = useRef<string>("");

  // Mutation for subscribing users
  const { mutate, isPending } = useMutation({
    mutationFn: subscribeUser,
    onError: (error) => {
      const message =
        (error as any)?.message ||
        t(
          "footer.subscriptionError",
          "There was an error during subscription."
        );

      // Handle specific error cases
      if (
        (error as any)?.message?.toLowerCase?.().includes("unique") ||
        (error as any)?.response?.data?.error?.message
          ?.toLowerCase?.()
          .includes("unique")
      ) {
        toast(t("footer.alreadySubscribed", "You are already subscribed!"));
      } else {
        toast.error(message);
      }
      console.error(error);
    },
  });

  // Yup validation schema for email field
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
  });

  /**
   * Handle email input changes with debounced validation
   * Checks if email is already subscribed after user stops typing
   * @param e - Input change event
   * @param setFieldValue - Formik function to update field value
   * @param setFieldError - Formik function to set field error
   */
  const handleEmailChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
    setFieldValue: (
      field: string,
      value: any,
      shouldValidate?: boolean
    ) => void,
    setFieldError: (field: string, message: string | undefined) => void
  ) => {
    const value = e.target.value;
    setFieldValue("email", value, false);

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      if (inputCheckTimerRef.current) clearTimeout(inputCheckTimerRef.current);
      setFieldError("email", undefined);
      return;
    }

    // Debounced subscription check
    latestScheduledValueRef.current = value;
    if (inputCheckTimerRef.current) clearTimeout(inputCheckTimerRef.current);
    inputCheckTimerRef.current = setTimeout(async () => {
      dispatch(setIsChecking(true));
      try {
        const res = await queryClient.fetchQuery({
          queryKey: ["subscription-check", value],
          queryFn: () => checkIfSubscribed(value),
          staleTime: 5 * 60 * 1000, // Cache for 5 minutes
        });
        if (latestScheduledValueRef.current !== value) return;
        // Removed the already subscribed check to avoid showing message without button click
        setFieldError("email", undefined);
      } catch {
        // silent
      } finally {
        dispatch(setIsChecking(false));
      }
    }, 500);
  };

  /**
   * Handle form submission with subscription validation
   * Checks if user is already subscribed before attempting to subscribe
   * @param values - Form values containing email
   * @param helpers - Formik helpers for form management
   */
  const handleSubscribe = async (
    values: { email: string },
    helpers: FormikHelpers<{ email: string }>
  ) => {
    try {
      dispatch(setIsChecking(true));
      const res = await queryClient.fetchQuery({
        queryKey: ["subscription-check", values.email],
        queryFn: () => checkIfSubscribed(values.email),
        staleTime: 5 * 60 * 1000,
      });
      if ((res as any)?.data?.length > 0) {
        toast(t("footer.alreadySubscribed", "You are already subscribed!"));
        return;
      }
    } catch (error) {
      toast.error(
        t(
          "footer.checkSubscriptionError",
          "Failed to check subscription. Please try again."
        )
      );
      console.error(error);
      return;
    } finally {
      dispatch(setIsChecking(false));
    }

    // Proceed with subscription
    mutate(values.email, {
      onSuccess: () => {
        helpers.resetForm();
        latestScheduledValueRef.current = "";
        if (inputCheckTimerRef.current)
          clearTimeout(inputCheckTimerRef.current);
        toast.success(
          t("footer.subscriptionSuccessful", "Subscription successful!")
        );
      },
    });
  };

  /**
   * Handle email field blur event
   * Validates email format and checks subscription status
   * @param e - Blur event
   * @param setFieldError - Formik function to set field error
   */
  const handleEmailBlur = async (
    e: React.FocusEvent<HTMLInputElement>,
    setFieldError: (field: string, message: string | undefined) => void
  ) => {
    const value = e.target.value;
    try {
      await validationSchema.validateAt("email", { email: value });
    } catch {
      return;
    }

    dispatch(setIsChecking(true));
    try {
      const res = await queryClient.fetchQuery({
        queryKey: ["subscription-check", value],
        queryFn: () => checkIfSubscribed(value),
        staleTime: 5 * 60 * 1000,
      });
      // Removed the already subscribed check to avoid showing message without button click
    } catch {
      // ignore
    } finally {
      dispatch(setIsChecking(false));
    }
  };

  // Combined busy state for UI feedback
  const isBusy = isChecking || isPending;

  return {
    validationSchema,
    handleEmailChange,
    handleEmailBlur,
    handleSubscribe,
    isChecking,
    isPending,
    isBusy,
  };
}
