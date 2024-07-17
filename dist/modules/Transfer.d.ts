import { PaymentResponseData } from '../types/types';

declare class Transfer {
    private container;
    private contents;
    private closeModal;
    private email;
    private token;
    private _currentStep;
    private activeRef;
    private paymentResponse;
    private initialTime;
    private timeLeft;
    private timerId;
    private abortController;
    constructor(container: HTMLElement, closeModal: () => void, token: string, email: string);
    get currentStep(): number;
    set currentStep(step: number);
    attachInputListeners(): void;
    createTransfer(): Promise<void>;
    verifyTransfer(token: string, initialInterval: number, onSuccess: (data: PaymentResponseData) => void, onError: (error: Error) => void): Promise<void>;
    private getTransferStepContent;
    private updateTransferDetailsContent;
    renderTransferContent(): void;
    private startTimer;
    private updateProgressTimerContent;
    private stopTimer;
    stopProgressBar(): void;
    copyToClipboard(text: string, element: Element): void;
    destroyTimer(): void;
    stopPolling(): void;
}
export default Transfer;
