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
  amount: number;
  isMobile: boolean = false;
  constructor(merchantKey: string, email: string, amount: number) {
    this.modalContainer = document.createElement("div");
    this.modalContainer.innerHTML = template;
    document.body.appendChild(this.modalContainer);
    this.isMobile = window.matchMedia("(max-width: 767px)").matches;
    this.currentPaymentMethod = this.isMobile ? 3 : 0;
    this.currentStep = 1;
    this.container = document.querySelectorAll(".content")[0] as HTMLDivElement;
    this.merchantKey = merchantKey;
    this.email = email;
    this.amount = amount;
    this.attachInputListeners();
    this.switchTab = this.switchTab.bind(this);
    // close modal if no merchant key or email is passed
    if (merchantKey === "" || email === "") {
      this.closeModal();
      throw new Error("Merchant key or email is required");
    }
  }

  attachInputListeners() {
    // Add event listeners
    const changeMethod = document.body.querySelector(
      "#change-method"
    ) as HTMLButtonElement;
    const close = document.body.querySelectorAll(
      ".close-btn"
    ) as NodeListOf<HTMLButtonElement>;
    const mobContainer = document.querySelector("#mob-container");
    const mobTabHeader = document.querySelector("#mob-tab-co");
    const mobCurrentMethodHeader = document.querySelector("#mob-tab-c");

    // Change Payment Method
    if (changeMethod) {
      this.cleanup();
      changeMethod.addEventListener("click", () => {
        this.currentPaymentMethod = 3;
        this.attachInputListeners();
        if (mobContainer) {
          mobContainer.innerHTML = this.mobileContainerContent();
        }
        this.setup();
        // remove payment option header text
        if (
          mobTabHeader &&
          mobCurrentMethodHeader &&
          mobCurrentMethodHeader.parentNode
        ) {
          mobTabHeader.removeChild(mobCurrentMethodHeader);
        }
      });
    }

    // Close Payment Actions
    if (close.length > 0) {
      close.forEach((btn) => {
        btn.addEventListener("click", () => {
          this.cleanup();
          this.closeModal();
        });
      });
    }
  }

  displayTabLayout() {
    const tabs = document.querySelectorAll(".tab-button");
    const mobTabs = document.querySelectorAll(".mob-tab-button");
    const container = document.querySelector(".box-container-method");
    const mobContainer = document.querySelector("#mob-container");
    const innerMobContainer = document.querySelector("#inner-mob-container");
    const mobTabHeader = document.querySelector("#mob-tab-co");

    if (!this.isMobile) {
      if (tabs && container) {
        tabs.forEach((button) => {
          button.addEventListener("click", (e) => {
            if (e.currentTarget instanceof HTMLElement) {
              if (e.currentTarget.dataset.tab) {
                const tabIndex = parseInt(e.currentTarget.dataset.tab);
                this.switchTab(tabIndex);

              }
            }
          });
        });
      }
    } else {
      if (mobTabs && container && mobContainer && innerMobContainer) {
        mobTabs.forEach((button) => {
          button.addEventListener("click", (e) => {
            if (e.currentTarget instanceof HTMLElement) {
              if (e.currentTarget.dataset.tab) {
                const tabIndex = parseInt(e.currentTarget.dataset.tab);
                this.updatePaymentMethodView(
                  this.merchantKey,
                  this.email,
                  this.amount
                );
                this.setCurrentPaymentMethod(tabIndex);
                mobContainer.removeChild(innerMobContainer);

                this.cleanup();
                tabOptions.forEach((option, index) => {
                  if (this.currentPaymentMethod === index) {
                    // add payment option header
                    if (mobTabHeader) {
                      mobTabHeader.innerHTML = `
                          <div id="mob-tab-c" class="w-full pt-2 px-5 md:hidden">
                            <div>
                              <button class="pt-3 px-2 grow align-center text-grey-600 tex-sm font-semibold" data-tab="${index}">
                              <div class="min-w-8 mr-2 align-center">
                                ${option.icon}
                                </div>
                                <span>${option.label}</span>
                              </button>
                            </div>
                          </div>
                      `;
                    }
                  }
                });

                this.renderPaymentMethodContent();
                this.attachInputListeners();
              }
            }
          });
        });
      }
    }

    this.updatePaymentMethodView(this.merchantKey, this.email, this.amount);
    this.renderPaymentMethodContent();
    this.attachInputListeners();
    this.setCurrentPaymentMethod(this.currentPaymentMethod);
  }

  private updatePaymentMethodView(
    merchantKey: string,
    email: string,
    amount: number
  ) {
    switch (this.currentPaymentMethod) {
      case 0:
        return (this.card = new Card(
          this.modalContainer,
          () => this.closeModal(),
          merchantKey,
          email,
          amount,
          () => this.switchTab(1)
        ));
      case 1:
        return (this.transfer = new Transfer(
          this.modalContainer,
          () => this.closeModal(),
          merchantKey,
          email,
          amount
        ));
      case 2:
        return (this.ussd = new Ussd());
      default:
        return (this.card = new Card(
          this.modalContainer,
          () => this.closeModal(),
          merchantKey,
          email,
          amount,
          () => this.switchTab(1)
        ));
    }
  }

 private renderPaymentMethodContent() {
    const renderContent = () => {
      switch (this.currentPaymentMethod) {
        case 0:
          return this.card.renderCardContent();
        case 1:
          return this.transfer.renderTransferContent();
        case 2:
          return this.ussd.renderUssdContent();
        case 3:
          return "";
        default:
          return this.card.renderCardContent();
      }
    };
    return renderContent();
  }

 private setCurrentPaymentMethod(index: number) {
    this.currentPaymentMethod = index;

    const tabs = document.querySelectorAll(".tab-button");
    let contents = document.querySelectorAll(".content");
    const mobileActionButtons = document.getElementById("mob-action-btns");

    tabs.forEach((tab) => tab.classList.remove("active"));
    contents.forEach((content) => content.classList.remove("active"));

    if (tabs[index]) {
      tabs[index].classList.add("active");
    }
    if (contents[index]) {
      contents[index].classList.add("active");
    }

    if (index !== 3 && mobileActionButtons) {
      mobileActionButtons.classList.remove("hidden");
      mobileActionButtons.classList.add("md:hidden");
    }
  }

  switchTab(tabIndex: number) {
    this.setCurrentPaymentMethod(tabIndex);
    this.updatePaymentMethodView(this.merchantKey, this.email, this.amount);
    this.cleanup();
    this.renderPaymentMethodContent();
    this.attachInputListeners();
  }

  setup(): void {
    const merchantLogo = document.getElementById("merchantLogo");
    const merchantLogoMob = document.getElementById("merchantLogoMob");
    const mobileActionButtons = document.getElementById("mob-action-btns");
    const merchantEmail = document.getElementById("merchant-email");
    const mobContainer = document.querySelector("#mob-container");

    if (merchantEmail) {
      merchantEmail.innerHTML = this.email;
    }

    if (!this.isMobile) {
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
                <div class="min-w-8 md:container-center lg:block">
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
    } else {
      if (merchantLogoMob) {
        merchantLogoMob.setAttribute("src", nbaLogo);
      }

      if (mobContainer) {
        mobContainer.innerHTML = this.mobileContainerContent();
      }
      let mobileOptionsContainer = document.querySelector(".mob-options");
      if (mobileOptionsContainer) {
        this.viewMobileOptions(mobileOptionsContainer);
      }

      const mobTabs = document.querySelectorAll(".mob-tab-button");

      tabOptions.forEach((_, index) => {
        const tab = mobTabs[index] as HTMLElement;
        if (tab) {
          tab.dataset.tab = index.toString();
          tab.addEventListener("click", () => {
            this.setCurrentPaymentMethod(index);
          });
        }
      });

      if (mobileActionButtons) {
        if (this.currentPaymentMethod === 3) {
          mobileActionButtons.classList.add("hidden");
          mobileActionButtons.classList.remove("md:hidden");
        }
      }
    }

    this.displayTabLayout();
  }

  private mobileContainerContent() {
    return `  <div class="box-container" id="inner-mob-container">
                <p class="text-sm text-grey-100">
                  Use one of the payment methods below to pay NGN 22,244.86
                  to Spotflow
                </p>

                <div>
                  <p class="font-semibold border-b border-[#E6E6E7] pb-4 pt-9 text-grey-700 mb-2">
                    PAYMENT OPTIONS
                  </p>

                  <div class="mob-options"></div>
                  <div class="container-center mt-12">
                    <button class="button-outline w-[150px] close-btn justify-center">
                      <span class="text-[10px] mr-1">x</span> Cancel Payment
                    </button>
                  </div>
                </div>
              </div>`;
  }

  private viewMobileOptions(mobileOptionsContainer: Element) {
    mobileOptionsContainer.innerHTML = `
      ${tabOptions
        .map(
          (option, index) =>
            `
                <div class="tab">
                  <button class="mob-tab-button py-3 px-2 grow align-center text-grey-600 tex-sm font-semibold" data-tab="${index}">
                  <div class="min-w-8 mr-3 align-center">
                    ${option.icon}
                    </div>
                    <span>${option.label}</span>
                  </button>
                </div>
              `
        )
        .join("")}`;
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
}

export { CheckoutForm };
