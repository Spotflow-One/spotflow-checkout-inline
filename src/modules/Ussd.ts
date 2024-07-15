import selectBanks from "../views/ussd/selectbanks.html?raw";
import viewUssdCode from "../views/ussd/viewUssdCode.html?raw";
import paymentWarning from "../views/shared/paymentWarning.html?raw";
import paymentSuccess from "../views/shared/paymentSuccess.html?raw";
import { banks } from "../data";
import { BankOption } from "../types/types";


class Ussd {
  // private container: HTMLElement;
  private contents: NodeListOf<Element>;
  private banks: BankOption[];
  private _currentStep: number;
  constructor(
    // container?: HTMLElement,
  ) {
    // this.container = container;
    this.contents = document.querySelectorAll(".content");
    this.banks = banks
    this._currentStep = 1;
    this.renderUssdContent();
  }

  get currentStep(): number {
    return this._currentStep;
  }

  set currentStep(step: number) {
    this._currentStep = step;
    this.renderUssdContent();
  }

  private getUssdStepContent() {
    switch (this.currentStep) {
      case 1:
        return selectBanks;
      case 2:
        return viewUssdCode;
      case 3:
        return paymentWarning;
      case 4:
        return paymentSuccess;
      default:
        return selectBanks;
    }
  }


  renderUssdContent() {
    if (this.contents[2]) {
      this.contents[2].innerHTML = this.getUssdStepContent();
    }
  }

  private renderSearchOptions(
    filteredData: BankOption[],
    searchInput: HTMLInputElement,
    optionsContainer: HTMLElement
  ) {
    optionsContainer.innerHTML = ""; // Clear previous options

    filteredData.forEach((item) => {
      const option = document.createElement("div");
      option.classList.add("bank-option");
      option.textContent = item.name;
      option.addEventListener("click", () => {
        searchInput.value = item.name;
        optionsContainer.style.display = "none";
      });
      optionsContainer.appendChild(option);
    });

    optionsContainer.style.display = filteredData.length ? "block" : "none";
  }
  searchBanksOnInput(
    searchInput: HTMLInputElement,
    optionsContainer: HTMLElement
  ) {
    const query = searchInput.value.toLowerCase();

    const filteredData = this.banks.filter((item) =>
      item.name.toLowerCase().includes(query)
    );

    this.renderSearchOptions(filteredData, searchInput, optionsContainer);
  }

  openSearchOnFocus(
    searchInput: HTMLInputElement,
    optionsContainer: HTMLElement
  ) {
    this.renderSearchOptions(this.banks, searchInput, optionsContainer);
  }

  closeSearchOptionsOutsideFocus(
    event: Event,
    searchInput: HTMLInputElement,
    optionsContainer: HTMLElement
  ) {
    if (
      !searchInput.contains(event.target as Node) &&
      !optionsContainer.contains(event.target as Node)
    ) {
      optionsContainer.style.display = "none";
    }
  }
}
export default Ussd;
