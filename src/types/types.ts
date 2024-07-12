export type PaymentRequestPayload = {
    merchantId?: string;
    amount: number;
    channel: string;
    currency: string;
    customer: {
      email: string;
    };
    reference: string;
    planId?: string;
  };

export type CardDetails = {
    pan: string;
    cvv: string;
    expiryMonth: string;
    expiryYear: string;
  };
  
  export type CardPaymentRequestPayload = PaymentRequestPayload & {
    card: CardDetails;
  };
  
  export type AuthorizeCardPaymentRequestPayload = {
    authorization: {
      pin: string;
    };
    reference: string;
  };
  
  export type ValidateCardPaymentRequestPayload = {
    authorization: {
      otp: string;
    };
    reference: string;
  };
  
  export type CardPaymentRequest = CardPaymentRequestPayload;
  
  export type AuthorizeCardPaymentRequest = AuthorizeCardPaymentRequestPayload;
  
  export type ValidateCardPaymentRequest = ValidateCardPaymentRequestPayload;
  
  export type PaymentResponseData = {
    id: string;
    reference: string;
    spotflowReference: string;
    amount: number;
    currency: string;
    channel: string;
    status: string;
    bankDetails?: BankDetails;
    customer: Customer;
    provider: string;
    providerMessage: string;
    rate: Rate;
    authorization: Authorization;
    createdAt: Date;
  };

  export interface Authorization {
    mode: string;
  }
  export interface BankDetails {
    accountName: string;
    accountNumber: string;
    bankName: string;
  }
  export interface Customer {
    id: string;
    name: string;
    email: string;
    phoneNumber: string;
  }
  export interface Rate {
    from: string;
    to: string;
    rate: number;
  }
  