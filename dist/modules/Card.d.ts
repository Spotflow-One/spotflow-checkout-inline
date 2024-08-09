import { PaymentResponseData } from '../types/types';

declare class Card {
    private cardDetailsValues;
    private cardPin;
    private cardOtp;
    private contents;
    private container;
    private closeModal;
    private email;
    private token;
    private amount;
    private currency?;
    private _currentStep;
    private activeRef;
    private creditCardTypes;
    private switchTab;
    constructor(container: HTMLElement, closeModal: () => void, token: string, email: string, amount: number, switchTab: (val: number) => void);
    private displayCardTypes;
    get currentStep(): number;
    set currentStep(step: number);
    attachInputListeners(): void;
    handleInputChange(event: Event, button: HTMLButtonElement | null): void;
    private handlePinRequest;
    handlePinInputChange(event: Event, index: number, pinInputs: HTMLInputElement[]): void;
    showLoader(): void;
    setPaymentError(text: string): void;
    handlePinPaste(event: ClipboardEvent, pinInputs: HTMLInputElement[]): void;
    handleOtpInput(event: Event, button: HTMLButtonElement | null): void;
    submitOtp(e: Event): void;
    handleSubmit(e: Event): Promise<void>;
    private redirectTo3DS;
    verifyPayment(onSuccess: (data: PaymentResponseData) => void, onError: (error: Error) => void): Promise<void>;
    private getCardStepContent;
    private filterCreditCardType;
    renderCardContent(): void;
    private displayButtonText;
}
export default Card;
