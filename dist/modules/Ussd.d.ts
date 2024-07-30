declare class Ussd {
    private contents;
    private banks;
    private _currentStep;
    constructor();
    get currentStep(): number;
    set currentStep(step: number);
    private getUssdStepContent;
    renderUssdContent(): void;
    private renderSearchOptions;
    searchBanksOnInput(searchInput: HTMLInputElement, optionsContainer: HTMLElement): void;
    openSearchOnFocus(searchInput: HTMLInputElement, optionsContainer: HTMLElement): void;
    closeSearchOptionsOutsideFocus(event: Event, searchInput: HTMLInputElement, optionsContainer: HTMLElement): void;
}
export default Ussd;
