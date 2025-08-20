import axios from "axios";

// API base URL from environment variables
const API_BASE = process.env.NEXT_PUBLIC_API_URL;

/**
 * Axios instance configured for API requests
 * Includes base URL and timeout settings
 */
const api = axios.create({
  baseURL: API_BASE,
  timeout: 10000, // 10 second timeout
});

/**
 * Check if a user is already subscribed to the newsletter
 * Queries the API to find existing subscriptions by email
 * @param email - Email address to check
 * @returns Promise with subscription data or empty array
 */
export const checkIfSubscribed = async (email: string) => {
  try {
    console.log("Checking subscription for email:", email);
    console.log("API URL:", API_BASE);

    const response = await api.get("/subscriptions", {
      params: { "filters[email][$eq]": email },
    });

    console.log("Check subscription response:", response.data);
    return response.data as { data: unknown[] };
  } catch (error: unknown) {
    console.error("Check subscription error:", error);
    const message =
      (error as any)?.response?.data?.error?.message ||
      (error as Error).message ||
      "Failed to check subscription";
    throw new Error(message);
  }
};

/**
 * Subscribe a user to the newsletter
 * Creates a new subscription record in the database
 * @param email - Email address to subscribe
 * @returns Promise with subscription creation response
 */
export const subscribeUser = async (email: string) => {
  try {
    console.log("Subscribing user with email:", email);
    console.log("API URL:", API_BASE);

    const response = await api.post("/subscriptions", {
      data: {
        email,
        date: new Date().toISOString(), // Current timestamp
      },
    });

    console.log("Subscribe response:", response.data);
    return response.data;
  } catch (error: unknown) {
    console.error("Subscribe error:", error);
    const message =
      (error as any)?.response?.data?.error?.message ||
      (error as Error).message ||
      "Failed to subscribe user";
    throw new Error(message);
  }
};
