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
    amount: number;
    isMobile: boolean;
    constructor(merchantKey: string, email: string, amount: number);
    attachInputListeners(): void;
    displayTabLayout(): void;
    private updatePaymentMethodView;
    private renderPaymentMethodContent;
    private setCurrentPaymentMethod;
    switchTab(tabIndex: number): void;
    setup(): void;
    private mobileContainerContent;
    private viewMobileOptions;
    private cleanup;
    closeModal(): void;
}
export { CheckoutForm };
