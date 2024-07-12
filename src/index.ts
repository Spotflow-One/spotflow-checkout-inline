import "./styles/index.css";
import template from "./views/checkout.html?raw";
import nbaLogo from "./assets/nba-logo.png";
import Card from "./modules/Card";
import Transfer from "./modules/Transfer";
import Ussd from "./modules/Ussd";
import { tabOptions } from "./data";

class CheckoutForm {
  modalContainer: HTMLDivElement;
  currentPaymentMethod: number;
  currentStep: number;
  container: HTMLDivElement;
  card: Card;
  transfer: Transfer;
  ussd: Ussd;
  constructor(
    merchantKey: string = "sk_test_63c4799e3b8e450cae1b78b687d473b8",
    email: string = "ekiirah@gmail.com"
  ) {
    this.modalContainer = document.createElement("div");
    this.modalContainer.innerHTML = template;
    document.body.appendChild(this.modalContainer);
    this.currentPaymentMethod = 0;
    this.currentStep = 1;
    this.container = document.querySelectorAll(".content")[0] as HTMLDivElement;
    this.card = new Card(
      this.container,
      () => this.closeModal(),
      merchantKey,
      email
    );
    this.transfer = new Transfer();
    this.ussd = new Ussd();
    this.attachInputListeners();

  }

  attachInputListeners() {
    // Add event listeners
    const closeBtn = this.modalContainer.querySelector(
      ".success-button"
    ) as HTMLButtonElement;

    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        document.body.removeChild(this.modalContainer);
      });
    }


  }

  displayTabLayout() {
    const tabs = document.querySelectorAll(".tab-button");
    const container = document.querySelector(".box-container-method");

    if (tabs && container) {
      tabs.forEach((button) => {
        button.addEventListener("click", (e) => {
          if (e.currentTarget instanceof HTMLElement) {
            if (e.currentTarget.dataset.tab) {
              const tabIndex = parseInt(e.currentTarget.dataset.tab);
              this.setCurrentPaymentMethod(tabIndex);
              this.renderPaymentMethodContent();
              this.attachInputListeners();
            }
          }
        });
      });
    }
    this.renderPaymentMethodContent();
    this.attachInputListeners();
    this.setCurrentPaymentMethod(this.currentPaymentMethod);
  }

  renderPaymentMethodContent() {
    const renderContent = () => {
      switch (this.currentPaymentMethod) {
        case 0:
          return this.card.renderCardContent();
        case 1:
          return this.transfer.renderTransferContent(1);
        case 2:
          return this.ussd.renderUssdContent(1);
        default:
          return this.card.renderCardContent();
      }
    };
    return renderContent();
  }

  setCurrentPaymentMethod(index: number) {
    this.currentPaymentMethod = index;

    const tabs = document.querySelectorAll(".tab-button");
    const contents = document.querySelectorAll(".content");

    tabs.forEach((tab) => tab.classList.remove("active"));
    contents.forEach((content) => content.classList.remove("active"));

    if (tabs[index]) {
      tabs[index].classList.add("active");
    }
    if (contents[index]) {
      contents[index].classList.add("active");
    }
  }

  closeModal() {
    document.body.removeChild(this.modalContainer);
  }

  setup(): void {
    const merchantLogo = document.getElementById("merchantLogo");

    // merchant logo goes here
    if (merchantLogo) {
      merchantLogo.setAttribute("src", nbaLogo);
    }

    let paymentOptionsContainer = document.querySelector(".payment-options");
    if (paymentOptionsContainer) {
      paymentOptionsContainer.innerHTML = `<div> 
      ${tabOptions
        .map(
          (option, index) =>
            `
            <div class="tab">   
              <button class="tab-button group" data-tab="${index}"> 
              <div class="min-w-8">
                ${option.icon}
                </div>
                <span>${option.label}</span>
              </button>
            </div>
          `
        )
        .join("")}
      </div>`;
    }
    const tabs = document.querySelectorAll(".tab-button");

    tabOptions.forEach((tabOption, index) => {
      const tab = tabs[index] as HTMLElement;
      if (tab) {
        const iconContainer = tab.querySelector(".tab-button-icon");
        const labelContainer = tab.querySelector(".tab-button-label");

        if (iconContainer) {
          iconContainer.innerHTML = tabOption.icon;
        }

        if (labelContainer) {
          labelContainer.textContent = tabOption.label;
        }

        tab.dataset.tab = index.toString();
        tab.addEventListener("click", () => {
          this.setCurrentPaymentMethod(index);
        });
      }
    });
    this.displayTabLayout();

    const paymentWarning = this.modalContainer.querySelector("#paymentWarning");
    const warningText = paymentWarning?.querySelector("#payment-warning-text");

    if (warningText) {
      this.displayPaymentWarningText(this.currentPaymentMethod, warningText);
    }
  }
  private displayPaymentWarningText(method: number, warningText: Element) {
    const text = (): string => {
      switch (method) {
        case 0:
          return "Incorrect otp. please retry with the correct otp";
        case 1:
          return "Account expired";
        case 2:
          return "Please dial the ussd shortcode";
        default:
          return "Error";
      }
    };

    if (warningText) {
      warningText.innerHTML = text();
    }
  }
}

export default CheckoutForm;
