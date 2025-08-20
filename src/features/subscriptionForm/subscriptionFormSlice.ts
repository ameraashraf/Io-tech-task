import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/**
 * Interface defining the subscription form state
 * Manages loading states for email validation and submission
 */
interface SubscriptionFormState {
  isChecking: boolean; // Indicates if email validation is in progress
}

// Initial state for the subscription form slice
const initialState: SubscriptionFormState = {
  isChecking: false,
};

/**
 * Redux slice for managing subscription form state
 * Handles email validation loading states and form submission status
 */
const subscriptionFormSlice = createSlice({
  name: "subscriptionForm",
  initialState,
  reducers: {
    /**
     * Set the email checking/validation state
     * Used to show loading indicators during email validation
     * @param state - Current state
     * @param action - Payload containing boolean value
     */
    setIsChecking(state, action: PayloadAction<boolean>) {
      state.isChecking = action.payload;
    },
  },
});

// Export action creators and reducer
export const { setIsChecking } = subscriptionFormSlice.actions;
export default subscriptionFormSlice.reducer;
