import cardDetailsForm from "../views/card/cardDetailsForm.html?raw";
import cardPinForm from "../views/card/cardPinForm.html?raw";
import cardOtpForm from "../views/card/cardOtpValidation.html?raw";
import paymentWarning from "../views/shared/paymentWarning.html?raw";
import paymentSuccess from "../views/shared/paymentSuccess.html?raw";
import loadingComp from "../views/shared/loader.html?raw";
import {
  authorizeCardPayment,
  createCardPayment,
  validateCardPayment,
  verifyPayment,
} from "../api";
import {
  showToast,
  generatePaymentReference,
  formatCreditCardNumber,
  formatExpirationDate,
  formatCVC,
  unFormatCreditCardNumber,
  getCardType,
} from "../utils";
import loaderGif from "../assets/loader.gif";
import { cardTypes } from "../data";
import { PaymentResponseData } from "../types/types";

class Card {
  private cardDetailsValues: { number: string; expiry: string; cvv: string };
  private cardPin: string;
  private cardOtp: string;
  private contents: NodeListOf<Element>;
  private container: HTMLElement;
  private closeModal: () => void;
  private email: string;
  private token: string;
  private amount: number;
  private _currentStep: number;
  private activeRef: string;
  private creditCardTypes: {
    name: string;
    icon: string;
  }[];
  private switchTab: (val: number) => void;

  constructor(
    container: HTMLElement,
    closeModal: () => void,
    token: string,
    email: string,
    amount: number,
    switchTab: (val: number) => void
   
  ) {
    this.container = container;
    this.closeModal = closeModal;
    this.token = token;
    this.email = email;
    this.amount = amount;
    this._currentStep = 1;
    this.cardDetailsValues = {
      number: "",
      expiry: "",
      cvv: "",
    };
    this.cardPin = "";
    this.cardOtp = "";
    this.activeRef = "";
    this.contents = document.querySelectorAll(".content");
    this.creditCardTypes = [...cardTypes];
    this.switchTab = switchTab
    this.renderCardContent();
    if (this.currentStep === 1) {
      this.displayCardTypes();
    }

    this.attachInputListeners();
  }

  private displayCardTypes() {
    requestAnimationFrame(() => {
      const cardTypesContainer = this.container.querySelector(
        "#card-types"
      ) as HTMLElement;

      // If the card type is unknown, display all card types
      if (
        this.creditCardTypes.length === 1 &&
        this.creditCardTypes[0].name === "Unknown"
      ) {
        cardTypes.forEach((type) => {
          const cardType = document.createElement("div");
          cardType.classList.add("card-type");
          cardType.innerHTML = type.icon;
          cardTypesContainer.appendChild(cardType);
        });
      } else {
        // reset the card types container
        cardTypesContainer.innerHTML = "";
        // update the card types container with the filtered card types
        this.creditCardTypes.forEach((type) => {
          const cardType = document.createElement("div");
          cardType.classList.add("card-type");
          cardType.innerHTML = type.icon;
          cardTypesContainer.appendChild(cardType);
        });
      }
    });
  }

  get currentStep(): number {
    return this._currentStep;
  }

  set currentStep(step: number) {
    this._currentStep = step;
    this.renderCardContent();
    if (step === 1) {
      this.displayCardTypes();
      this.creditCardTypes = [...cardTypes];
    }
  }

  attachInputListeners() {
    // Add event listeners to the card input fields
    const cardNumberInput = this.container.querySelector(
      'input[name="number"]'
    ) as HTMLInputElement;
    const cardExpiryInput = this.container.querySelector(
      'input[name="expiry"]'
    ) as HTMLInputElement;
    const cardCvvInput = this.container.querySelector(
      'input[name="cvv"]'
    ) as HTMLInputElement;
    const button = this.container.querySelector(
      ".details-form-button"
    ) as HTMLButtonElement;
    const formCard = document.querySelector("#checkoutcard");

    const pinInputs = Array.from(
      this.container.querySelectorAll(".pin-input")
    ) as HTMLInputElement[];

    const otpInput = this.container.querySelector(
      ".otp-input"
    ) as HTMLInputElement;
    const otpButton = this.container.querySelector(
      ".otp-button"
    ) as HTMLButtonElement;
    const closeBtn = this.container.querySelector(
      ".success-button"
    ) as HTMLButtonElement;
    const goToCardDetails = this.container.querySelector(
      "#go-to-card"
    ) as HTMLButtonElement;

    const goToTransfer = document.querySelector(
      "#go-to-transfer"
    ) as HTMLButtonElement;

    
    // CARD DETAIL EVENTS //
    if (cardNumberInput) {
      cardNumberInput.addEventListener("input", (e) =>
        this.handleInputChange(e, button)
      );
    }

    if (cardExpiryInput) {
      cardExpiryInput.addEventListener("input", (e) =>
        this.handleInputChange(e, button)
      );
    }

    if (cardCvvInput) {
      cardCvvInput.addEventListener("input", (e) =>
        this.handleInputChange(e, button)
      );
    }

    if (formCard) {
      formCard.addEventListener("submit", (e) => this.handleSubmit(e));
    }

    // CARD PIN EVENTS //
    pinInputs.forEach((input, index) => {
      input.addEventListener("input", (event) =>
        this.handlePinInputChange(event, index, pinInputs)
      );
      input.addEventListener("paste", (event) =>
        this.handlePinPaste(event, pinInputs)
      );
    });

    // CARD OTP EVENTS //
    if (otpInput) {
      otpInput.addEventListener("input", (e) =>
        this.handleOtpInput(e, otpButton)
      );
    }
    if (otpButton) {
      otpButton.addEventListener("click", (e) => this.submitOtp(e));
    }
    if (closeBtn) {
      closeBtn.addEventListener("click", () => this.closeModal());
    }


    // PAYMENT ERROR EVENTS //
    if (goToCardDetails) {
      goToCardDetails.addEventListener("click", () => {
        this.currentStep = 1;
      });
    }

    if (goToTransfer) {
      goToTransfer.addEventListener("click", () => {
        this.switchTab(1)
      });
    }
  }

  handleInputChange(event: Event, button: HTMLButtonElement | null) {
    const target = event.target as HTMLInputElement;
    const { name, value } = target;
    let formattedValue = value;

    if (name === "number") {
      formattedValue = formatCreditCardNumber(value);
      this.filterCreditCardType(value);
    } else if (name === "expiry") {
      formattedValue = formatExpirationDate(value);
    } else if (name === "cvv") {
      formattedValue = formatCVC(value);
    }

    this.cardDetailsValues = {
      ...this.cardDetailsValues,
      [name]: formattedValue,
    };
    target.value = formattedValue;

    if (
      this.cardDetailsValues.number &&
      this.cardDetailsValues.expiry &&
      this.cardDetailsValues.cvv
    ) {
      if (button) {
        button.removeAttribute("disabled");
      }
    }
  }

  private handlePinRequest() {
    if (this.cardPin.length === 4) {
      const payload = {
        authorization: {
          pin: this.cardPin,
        },
        reference: this.activeRef,
      };

      setTimeout(() => {
        // show loading content
        this.currentStep = 6;
        this.showLoader();

        // send authorization
        const response = authorizeCardPayment(this.token, payload);
        response
          .then((data) => {
            if (data.status === "failed") {
              this.currentStep = 4;
              if (data.providerMessage) {
                showToast(data.providerMessage, "error");
                this.setPaymentError(data.providerMessage);
              } else {
                showToast("Payment failed", "error");
                this.setPaymentError("Payment failed");
              }
            } else {
              showToast("Payment Authorized!", "success");
              this.currentStep = 3;
            }
          })
          .catch((error) => {
            showToast(error.message, "error");
            this.currentStep = 4;
            this.setPaymentError("Payment failed");
          });
      }, 500);
    }
  }
  handlePinInputChange(
    event: Event,
    index: number,
    pinInputs: HTMLInputElement[]
  ) {
    this.cardPin = "";
    const target = event.target as HTMLInputElement;
    const value = target.value;

    if (value) {
      // Move to the next input field if there is a next input
      if (index < pinInputs.length - 1) {
        pinInputs[index + 1].focus();
      }
    } else if (index > 0) {
      // Move to the previous input field if there is a previous input
      pinInputs[index - 1].focus();
    }
    this.cardPin = pinInputs.map((input) => input.value).join("");

    this.handlePinRequest();
  }

  showLoader() {
    const loader = this.container.querySelector("#loader");
    if (loader) {
      loader.classList.remove("hidden");
      loader.querySelector("img")?.setAttribute("src", loaderGif);
    }
  }

  setPaymentError(text: string) {
    const warningText = this.container.querySelector("#payment-warning-text");
    const warningListButtons = this.container.querySelector(".warning-list");

    if (warningText) {
      warningText.textContent = text;
    }
    const cardErrorActions = [
      {
        text: "Try again with your card",
        action: "go-to-card",
      },
      {
        text: "Try again with transfer",
        action: "go-to-transfer",
      },
    ];

    if (warningListButtons) {
      cardErrorActions.forEach(({ action, text }) => {
        const button = document.createElement("button");
        button.textContent = text;
        button.setAttribute("id", action);
        button.classList.add("warning-button");

        const div = document.createElement("div");
        div.appendChild(button);

        warningListButtons.appendChild(div);
      });
    }

    this.attachInputListeners();
  }

  handlePinPaste(event: ClipboardEvent, pinInputs: HTMLInputElement[]) {
    event.preventDefault();
    this.cardPin = "";
    const pasteData = event.clipboardData?.getData("text").trim() || "";
    const pasteDataArray = pasteData.split("");
    pinInputs.forEach((input, index) => {
      input.value = pasteDataArray[index] || "";
    });

    // Focus the next empty input box if available
    for (let i = 0; i < pinInputs.length; i++) {
      if (!pinInputs[i].value) {
        pinInputs[i].focus();
        break;
      }
    }
    this.cardPin = pinInputs.map((input) => input.value).join("");

    this.handlePinRequest();
  }

  handleOtpInput(event: Event, button: HTMLButtonElement | null) {
    const target = event.target as HTMLInputElement;
    const { value } = target;
    this.cardOtp = "";

    this.cardOtp = value;

    if (this.cardOtp.length > 3) {
      if (button) {
        button.removeAttribute("disabled");
      }
    }
  }

  submitOtp(e: Event) {
    e.preventDefault();

    const payload = {
      authorization: {
        otp: this.cardPin,
      },
      reference: this.activeRef,
    };
    // show loading spinner
    this.currentStep = 6;
    this.showLoader();

    // send card details
    const response = validateCardPayment(this.token, payload);

    response
      .then((data) => {
        if (data.status === "failed") {
          this.currentStep = 4;
          if (data.providerMessage) {
            showToast(data.providerMessage, "error");
            this.setPaymentError(data.providerMessage);
          } else {
            showToast("Payment failed", "error");
            this.setPaymentError("Payment failed");
          }
        } else if (data.status === "successful") {
          this.currentStep = 5;
        }
      })
      .catch((error) => {
        showToast(error.message, "error");
        this.currentStep = 4;
        this.setPaymentError("Payment failed");
      })
  }

  async handleSubmit(e: Event) {
    e.preventDefault();
    const spin = this.container.querySelector(".spinner");
    const buttonText = this.container.querySelector(
      "#details-form-button-text"
    );

    const payload = {
      amount: this.amount,
      channel: "card",
      currency: "USD",
      customer: {
        email: this.email,
      },
      reference: generatePaymentReference(),
      card: {
        pan: unFormatCreditCardNumber(this.cardDetailsValues.number),
        cvv: this.cardDetailsValues.cvv,
        expiryMonth: this.cardDetailsValues?.expiry.split("/")[0].trim(),
        expiryYear: this.cardDetailsValues?.expiry.split("/")[1].trim(),
      },
    };

    // show button spinner
    if (spin && buttonText) {
      spin.classList.remove("hidden");
      buttonText.classList.add("hidden");
    }
    // send card details
    const response = createCardPayment(this.token, payload);

    response
      .then((data) => {
        if (data.status === "failed") {
          this.currentStep = 4;
          if (data.providerMessage) {
            showToast(data.providerMessage, "error");
            this.setPaymentError(data.providerMessage);
          } else {
            showToast("Payment failed", "error");
            this.setPaymentError("Payment failed");
          }
        } else if (data.status === "pending_authorization") {
          showToast("Payment Created!", "success");
          this.activeRef = data.reference;
          this.currentStep = 2;
        } else if (data.status === "pending_validation") {
          if (
            data.authorization.mode === "3DS" &&
            data.authorization.redirectUrl
          ) {
            this.activeRef = data.reference;
            this.redirectTo3DS(data.authorization.redirectUrl);
          }
        }
      })
      .catch((error) => {
        showToast(error.message, "error");
        this.currentStep = 4;
        this.setPaymentError("Payment failed");
      })
      .finally(() => {
        // remove button spinner
        if (spin && buttonText) {
          spin.classList.add("hidden");
          buttonText.classList.remove("hidden");
        }
      });
  }

  private redirectTo3DS(url: string): void {
    const newWindow = window.open(url, "_blank");
    if (newWindow) {
      // show loading state during 3ds authentication
      this.currentStep = 6;
      this.showLoader();
      const intervalId = setInterval(() => {
        if (newWindow.closed) {
          clearInterval(intervalId);
          this.verifyPayment(
            () => {
              this.currentStep = 5;
            },
            (error) => {
              showToast(error.message, "error");
              this.currentStep = 4;
            }
          );
        }
      }, 2000);
    } else {
      alert(
        "Please enable popups for this site to complete the authentication."
      );
    }
  }

  async verifyPayment(
    onSuccess: (data: PaymentResponseData) => void,
    onError: (error: Error) => void
  ) {
    try {
      const responseData = await verifyPayment(this.token, this.activeRef);
      if (responseData.status === "failed") {
        this.currentStep = 4;
      } else {
        // Stop polling when successful
        onSuccess(responseData);
      }
    } catch (error) {
      console.error(error);

      onError(new Error("failed"));
      //  showToast(error, "error")
    }
  }

  private getCardStepContent() {
    switch (this.currentStep) {
      case 1:
        return cardDetailsForm;
      case 2:
        return cardPinForm;
      case 3:
        return cardOtpForm;
      case 4:
        return paymentWarning;
      case 5:
        return paymentSuccess;
      case 6:
        return loadingComp;
      default:
        return cardDetailsForm;
    }
  }

  private filterCreditCardType(val: string) {
    if (val) {
      this.creditCardTypes = cardTypes.filter(
        (type) => type.name === getCardType(val)
      );

      if (this.creditCardTypes.length >= 1) {
        this.displayCardTypes();
      } else {
        this.creditCardTypes = [...cardTypes];
        this.displayCardTypes();
      }
    } else {
      this.creditCardTypes = [...cardTypes];
      this.displayCardTypes();
    }
  }

  renderCardContent() {
    if (this.contents[0]) {
      this.contents[0].innerHTML = this.getCardStepContent();
      this.attachInputListeners();
    }
  }
}
export default Card;
