"use client";

import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useHydrationSafeTranslation } from "@/hooks/useHydrationSafeTranslation";
import { Button } from "@/components/ui/button";
import { useSubscriptionForm } from "@/features/subscriptionForm/useSubscriptionForm";

/**
 * Email subscription form component for newsletter signup
 * Handles email validation, subscription checking, and form submission
 * Uses Formik for form management and includes loading states
 */
export default function EmailSubscriptionForm() {
  const { t, ready } = useHydrationSafeTranslation();

  // Get subscription form functionality from custom hook
  const {
    validationSchema,
    handleEmailChange,
    handleEmailBlur,
    handleSubscribe,
    isChecking,
    isPending,
  } = useSubscriptionForm();

  // Track email input focus state for dynamic width animation
  const [isEmailFocused, setIsEmailFocused] = useState(false);

  return (
    <div>
      <Formik
        initialValues={{ email: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubscribe}
      >
        {({ setFieldError, setFieldValue }) => (
          <Form className="bg-white rounded-lg md:rounded-2xl text-foreground shadow-sm border border-border/60 px-2 py-2">
            <div className="flex items-center gap-2">
              <div className="flex flex-col">
                {/* Hidden label for screen readers */}
                <label htmlFor="footer-email" className="sr-only">
                  {t("footer.email", "Email")}
                </label>

                {/* Email input field with dynamic width */}
                <Field name="email">
                  {({ field }: any) => (
                    <input
                      id="footer-email"
                      name={field.name}
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      placeholder={t("footer.emailPlaceholder", "Email")}
                      aria-label={t("footer.email", "Email")}
                      value={field.value || ""}
                      onFocus={() => setIsEmailFocused(true)}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleEmailChange(e, setFieldValue, setFieldError)
                      }
                      onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
                        setIsEmailFocused(false);
                        handleEmailBlur(e, setFieldError);
                      }}
                      disabled={isPending}
                      className={`${
                        isEmailFocused ||
                        (field.value && field.value.length > 0)
                          ? "w-60"
                          : "w-35"
                      } transition-all duration-300 ease-out bg-transparent outline-none pl-2 rtl:pr-2 rtl:pl-0 text-black placeholder:text-black placeholder:opacity-100 disabled:opacity-60`}
                    />
                  )}
                </Field>
              </div>

              {/* Subscribe button with loading state */}
              <div className="subscribe-btn-wrapper">
                <Button
                  type="submit"
                  aria-label={
                    ready
                      ? t("footer.subscribeToNewsletter")
                      : "Subscribe to newsletter"
                  }
                  disabled={isPending}
                  className="h-10 md:h-10 rounded-2xl px-10 text-xs bg-primary hover:bg-primary/90 cursor-pointer transition-transform duration-200 hover:scale-105 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isPending && (
                    <span className="inline-flex items-center gap-2">
                      <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      {t("footer.subscribing", "Subscribing...")}
                    </span>
                  )}
                  {!isPending && t("footer.subscribe", "Subscribe")}
                </Button>
              </div>
            </div>

            {/* Error message display */}
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-xs mt-1"
            />
          </Form>
        )}
      </Formik>
    </div>
  );
}
