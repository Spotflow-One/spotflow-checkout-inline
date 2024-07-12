import { PaymentRequestPayload, PaymentResponseData } from "./types/types";
import { showToast } from "./utils";

class FetchError extends Error {
  constructor(message: string, public status: number) {
    super(message);
    this.name = "FetchError";
  }
}

class AuthorizationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "AuthorizationError";
  }
}

const getHeaders = (token: string): Headers => {
  if (!token) {
    throw new AuthorizationError("Missing authorization token");
  }

  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Authorization", `Bearer ${token}`);
  return headers;
};

export const createCardPayment = async (
  token: string,
  payload: PaymentRequestPayload
): Promise<PaymentResponseData> => {
  const url = "http://dev-api.spotflow.one/api/v1/payments";
  try {
    const headers = getHeaders(token);

    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new FetchError("Network response was not ok", response.status);
    }

    const responseData: PaymentResponseData = await response.json();
    return responseData;
  } catch (error) {
    if (error instanceof FetchError) {
      console.error(`FetchError: ${error.message} (status: ${error.status})`);
      showToast(
        `FetchError: ${error.message} (status: ${error.status})`,
        "error",
        5000
      );
    } else if (error instanceof AuthorizationError) {
      console.error(`AuthorizationError: ${error.message}`);
      showToast(`AuthorizationError: ${error.message}`, "error", 5000);
    } else {
      console.error(`Unexpected error: ${error}`);
      showToast(`Unexpected error: ${error}`, "error", 5000);
    }
    throw error; // Re-throw the error after logging it
  }
};
