import { default as Card } from './modules/Card';
import { default as Transfer } from './modules/Transfer';
import { default as Ussd } from './modules/Ussd';

declare class CheckoutForm {
    modalContainer: HTMLDivElement;
    currentPaymentMethod: number;
    currentStep: number;
    container: HTMLDivElement;
    card: Card;
    transfer: Transfer;
    ussd: Ussd;
    merchantKey: string;
    email: string;
    constructor(merchantKey: string, email: string);
    attachInputListeners(): void;
    displayTabLayout(): void;
    private updatePaymentMethodView;
    renderPaymentMethodContent(): void;
    setCurrentPaymentMethod(index: number): void;
    private cleanup;
    closeModal(): void;
    setup(): void;
    private displayPaymentWarningText;
}
export default CheckoutForm;
