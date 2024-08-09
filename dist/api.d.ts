import { CardPaymentRequestPayload, PaymentResponseData, AuthorizeCardPaymentRequestPayload, ValidateCardPaymentRequestPayload, PaymentRequestPayload, GetPaymentRateParams, Rate } from './types/types';

export declare const createCardPayment: (token: string, payload: CardPaymentRequestPayload) => Promise<PaymentResponseData>;
export declare const authorizeCardPayment: (token: string, payload: AuthorizeCardPaymentRequestPayload) => Promise<PaymentResponseData>;
export declare const validateCardPayment: (token: string, payload: ValidateCardPaymentRequestPayload) => Promise<PaymentResponseData>;
export declare const createTransferPayment: (token: string, payload: PaymentRequestPayload) => Promise<PaymentResponseData>;
export declare const verifyPayment: (token: string, reference: string, signal?: AbortSignal) => Promise<PaymentResponseData>;
export declare function getRate(token: string, payload: GetPaymentRateParams): Promise<Rate>;
