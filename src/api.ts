import {
  CardPaymentRequestPayload,
  PaymentResponseData,
  AuthorizeCardPaymentRequestPayload,
  ValidateCardPaymentRequestPayload,
  PaymentRequestPayload,
} from "./types/types";

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

const baseurl = "http://dev-api.spotflow.one/api/v1";

export const createCardPayment = async (
  token: string,
  payload: CardPaymentRequestPayload
): Promise<PaymentResponseData> => {
  try {
    const headers = getHeaders(token);

    const response = await fetch(`${baseurl}/payments`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json();
      if (errorData.message) {
        throw new FetchError(errorData.message, response.status);
      } else {
        throw new FetchError("Network response was not ok", response.status);
      }
    }

    const responseData: PaymentResponseData = await response.json();
    return responseData;
  } catch (error) {
    if (error instanceof FetchError) {
      console.error(`FetchError: ${error.message} (status: ${error.status})`);
    } else if (error instanceof AuthorizationError) {
      console.error(`AuthorizationError: ${error.message}`);
    } else {
      console.error(`Unexpected error: ${error}`);
    }
    throw error; // Re-throw the error after logging it
  }
};

export const authorizeCardPayment = async (
  token: string,
  payload: AuthorizeCardPaymentRequestPayload
): Promise<PaymentResponseData> => {
  try {
    const headers = getHeaders(token);

    const response = await fetch(`${baseurl}/payments/authorize`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json();
      if (errorData.message) {
        throw new FetchError(errorData.message, response.status);
      } else {
        throw new FetchError("Network response was not ok", response.status);
      }
    }

    const responseData: PaymentResponseData = await response.json();
    return responseData;
  } catch (error) {
    if (error instanceof FetchError) {
      console.error(`FetchError: ${error.message} (status: ${error.status})`);
    } else if (error instanceof AuthorizationError) {
      console.error(`AuthorizationError: ${error.message}`);
    } else {
      console.error(`Unexpected error: ${error}`);
    }
    throw error; // Re-throw the error after logging it
  }
};

export const validateCardPayment = async (
  token: string,
  payload: ValidateCardPaymentRequestPayload
): Promise<PaymentResponseData> => {
  try {
    const headers = getHeaders(token);

    const response = await fetch(`${baseurl}/payments/validate`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json();
      if (errorData.message) {
        throw new FetchError(errorData.message, response.status);
      } else {
        throw new FetchError("Network response was not ok", response.status);
      }
    }

    const responseData: PaymentResponseData = await response.json();
    return responseData;
  } catch (error) {
    if (error instanceof FetchError) {
      console.error(`FetchError: ${error.message} (status: ${error.status})`);
    } else if (error instanceof AuthorizationError) {
      console.error(`AuthorizationError: ${error.message}`);
    } else {
      console.error(`Unexpected error: ${error}`);
    }
    throw error; // Re-throw the error after logging it
  }
};

export const createTransferPayment = async (
  token: string,
  payload: PaymentRequestPayload
): Promise<PaymentResponseData> => {
  try {
    const headers = getHeaders(token);

    const response = await fetch(`${baseurl}/payments`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json();
      if (errorData.message) {
        throw new FetchError(errorData.message, response.status);
      } else {
        throw new FetchError("Network response was not ok", response.status);
      }
    }

    const responseData: PaymentResponseData = await response.json();
    return responseData;
  } catch (error) {
    if (error instanceof FetchError) {
      console.error(`FetchError: ${error.message} (status: ${error.status})`);
    } else if (error instanceof AuthorizationError) {
      console.error(`AuthorizationError: ${error.message}`);
    } else {
      console.error(`Unexpected error: ${error}`);
    }
    throw error; // Re-throw the error after logging it
  }
};

export const verifyPayment = async (
  token: string,
  reference: string,
  signal?: AbortSignal
): Promise<PaymentResponseData> => {
  try {
    const headers = getHeaders(token);

    const response = await fetch(`${baseurl}/payments/verify?reference=${reference}`, {
      method: "GET",
      headers: headers,
      signal
    });

    if (!response.ok) {
      const errorData = await response.json();
      if (errorData.message) {
        throw new FetchError(errorData.message, response.status);
      } else {
        throw new FetchError("Network response was not ok", response.status);
      }
    }

    const responseData: PaymentResponseData = await response.json();
    return responseData;
  } catch (error) {
    if (error instanceof FetchError) {
      console.error(`FetchError: ${error.message} (status: ${error.status})`);
    } else if (error instanceof AuthorizationError) {
      console.error(`AuthorizationError: ${error.message}`);
    } else {
      console.error(`Unexpected error: ${error}`);
    }
    throw error; // Re-throw the error after logging it
  }
};
