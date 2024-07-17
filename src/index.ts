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
  card!: Card;
  transfer!: Transfer;
  ussd!: Ussd;
  merchantKey: string;
  email: string;
  constructor(merchantKey: string, email: string) {
    this.modalContainer = document.createElement("div");
    this.modalContainer.innerHTML = template;
    document.body.appendChild(this.modalContainer);
    this.currentPaymentMethod = 0;
    this.currentStep = 1;
    this.container = document.querySelectorAll(".content")[0] as HTMLDivElement;
    this.merchantKey = merchantKey;
    this.email = email;
    this.updatePaymentMethodView(this.merchantKey, this.email);
    this.attachInputListeners();
  }

  attachInputListeners() {
    // Add event listeners
    const closeBtn = this.modalContainer.querySelector(
      ".success-button"
    ) as HTMLButtonElement;
    const closeM = document.body.querySelector(
      "#close-modal"
    ) as HTMLButtonElement;

    if (closeBtn) {
      this.cleanup();
      closeBtn.addEventListener("click", this.closeModal);
    }

    if (closeM) {
      this.cleanup();
      closeM.addEventListener("click", () => this.closeModal());
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
              this.updatePaymentMethodView(this.merchantKey, this.email);
              this.setCurrentPaymentMethod(tabIndex);
              this.cleanup();
              this.renderPaymentMethodContent();
              this.attachInputListeners();
            }
          }
        });
      });
    }
    this.updatePaymentMethodView(this.merchantKey, this.email);
    this.renderPaymentMethodContent();
    this.attachInputListeners();
    this.setCurrentPaymentMethod(this.currentPaymentMethod);
  }

  private updatePaymentMethodView(merchantKey: string, email: string) {
    switch (this.currentPaymentMethod) {
      case 0:
        return (this.card = new Card(
          this.modalContainer,
          () => this.closeModal(),
          merchantKey,
          email
        ));
      case 1:
        return (this.transfer = new Transfer(
          this.modalContainer,
          () => this.closeModal(),
          merchantKey,
          email
        ));
      case 2:
        return (this.ussd = new Ussd());
      default:
        return (this.card = new Card(
          this.modalContainer,
          () => this.closeModal(),
          merchantKey,
          email
        ));
    }
  }

  renderPaymentMethodContent() {
    const renderContent = () => {
      switch (this.currentPaymentMethod) {
        case 0:
          return this.card.renderCardContent();
        case 1:
          return this.transfer.renderTransferContent();
        case 2:
          return this.ussd.renderUssdContent();
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

  private cleanup() {
    // Stop timer
    if (this.transfer) {
      this.transfer.destroyTimer();
    }
  }

  closeModal() {
    if (this.modalContainer && this.modalContainer.parentNode) {
      document.body.removeChild(this.modalContainer);
    }
  }

  setup(): void {
    const merchantLogo = document.getElementById("merchantLogo");
    const merchantEmail = document.getElementById("merchant-email");

    // merchant logo goes here
    if (merchantLogo) {
      merchantLogo.setAttribute("src", nbaLogo);
    }

    if (merchantEmail) {
      merchantEmail.innerHTML = this.email;
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
