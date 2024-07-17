declare class Card {
    private cardDetailsValues;
    private cardPin;
    private cardOtp;
    private contents;
    private container;
    private closeModal;
    private email;
    private token;
    private _currentStep;
    private activeRef;
    constructor(container: HTMLElement, closeModal: () => void, token: string, email: string);
    get currentStep(): number;
    set currentStep(step: number);
    attachInputListeners(): void;
    handleInputChange(event: Event, button: HTMLButtonElement | null): void;
    private handlePinRequest;
    handlePinInputChange(event: Event, index: number, pinInputs: HTMLInputElement[]): void;
    handlePinPaste(event: ClipboardEvent, pinInputs: HTMLInputElement[]): void;
    handleOtpInput(event: Event, button: HTMLButtonElement | null): void;
    submitOtp(e: Event): void;
    handleSubmit(e: Event): Promise<void>;
    private getCardStepContent;
    renderCardContent(): void;
}
export default Card;
