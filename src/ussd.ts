import selectBanks from "./views/ussd/selectbanks.html?raw";
import viewUssdCode from "./views/ussd/viewUssdCode.html?raw";
import paymentWarning from "./views/shared/paymentWarning.html?raw";
import paymentSuccess from "./views/shared/paymentSuccess.html?raw";

type BankOption = {
  name: string;
  code: string;
};
class Ussd {
  private banks: BankOption[];
  constructor() {
    this.banks = [
      {
        name: "First City Monument Bank",
        code: "*329#",
      },
      {
        name: "First Bank",
        code: "*268#",
      },
    ];
  }

  renderUssdContent(step: number) {
    switch (step) {
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
