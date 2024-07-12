import cardDetailsForm from "../views/card/cardDetailsForm.html?raw";
import cardPinForm from "../views/card/cardPinForm.html?raw";
import cardOtpForm from "../views/card/cardOtpValidation.html?raw";
import paymentWarning from "../views/shared/paymentWarning.html?raw";
import paymentSuccess from "../views/shared/paymentSuccess.html?raw";
import { createCardPayment } from "../api";
import { showToast, generatePaymentReference } from "../utils";

class Card {
  private cardDetailsValues: { number: string; expiry: string; cvv: string };
  private cardPin: string;
  private cardOtp: string;
  private contents: NodeListOf<Element>;
  private container: HTMLElement;
  private closeModal: () => void;
  private email: string;
  private token: string;
  private _currentStep: number;
  constructor(
    container: HTMLElement,
    closeModal: () => void,
    token: string,
    email: string
  ) {
    this.container = container;
    this.closeModal = closeModal;
    this.token = token;
    this.email = email;
    this._currentStep = 1;
    this.cardDetailsValues = {
      number: "",
      expiry: "",
      cvv: "",
    };
    this.cardPin = "";
    this.cardOtp = "";
    this.contents = document.querySelectorAll(".content");
    this.renderCardContent();
    // generatePaymentReference();
    this.attachInputListeners();
  }

  get currentStep(): number {
    return this._currentStep;
  }

  set currentStep(step: number) {
    this._currentStep = step;
    this.renderCardContent();
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
  }

  clearNumber(value = "") {
    return value.replace(/\D+/g, "");
  }

  formatCreditCardNumber(value: string): string {
    if (!value) {
      return value;
    }

    const clearValue = this.clearNumber(value);
    const nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
      4,
      8
    )} ${clearValue.slice(8, 12)} ${clearValue.slice(12, 16)}`;
    return nextValue.trim();
  }

  formatCVC(value: string): string {
    const clearValue = this.clearNumber(value);
    const maxLength = 3;

    return clearValue.slice(0, maxLength);
  }

  formatExpirationDate(value: string): string {
    const clearValue = this.clearNumber(value);

    if (clearValue.length >= 3) {
      return `${clearValue.slice(0, 2)} / ${clearValue.slice(2, 4)}`;
    }

    return clearValue;
  }

  handleInputChange(event: Event, button: HTMLButtonElement | null) {
    const target = event.target as HTMLInputElement;
    const { name, value } = target;
    let formattedValue = value;

    if (name === "number") {
      formattedValue = this.formatCreditCardNumber(value);
    } else if (name === "expiry") {
      formattedValue = this.formatExpirationDate(value);
    } else if (name === "cvv") {
      formattedValue = this.formatCVC(value);
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

    if (this.cardPin.length === 4) {
      // move to next view after 2 secs
      setTimeout(() => {
        this.currentStep = 3;
      }, 500);
    }
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

    if (this.cardPin.length === 4) {
      // move to next view after 2 secs
      setTimeout(() => {
        this.currentStep = 3;
      }, 500);
    }
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
    this.currentStep = 5;
  }

  unFormatCreditCardNumber(value: string): string {
    if (!value) {
      return value;
    }

    const clearValue = this.clearNumber(value);
    const nextValue = `${clearValue.slice(0, 4)}${clearValue.slice(
      4,
      8
    )}${clearValue.slice(8, 12)}${clearValue.slice(12, 16)}`;
    return nextValue.trim();
  }

  async handleSubmit(e: Event) {
    e.preventDefault();
    const spin = this.container.querySelector(".spinner");
    const buttonText = this.container.querySelector(
      "#details-form-button-text"
    );

    const payload = {
      amount: 14.99,
      channel: "card",
      currency: "USD",
      customer: {
        email: this.email,
      },
      reference: generatePaymentReference(),
      card: {
        pan: this.unFormatCreditCardNumber(this.cardDetailsValues.number),
        cvv: this.cardDetailsValues.cvv,
        expiryMonth: this.cardDetailsValues?.expiry.split("/")[0].trim(),
        expiryYear: this.cardDetailsValues?.expiry.split("/")[1].trim(),
      },
    };

    // show loading spinner
    if (spin && buttonText) {
      spin.classList.remove("hidden");
      buttonText.classList.add("hidden");
    }
    // send card details
    const response = createCardPayment(this.token, payload);

    response
      .then((data) => {
        console.log("Fetched fruits:", data);
        if (data.status === "failed") {
          if (data.providerMessage) {
            showToast(data.providerMessage, "error");
          } else {
            showToast("Payment failed", "error");
          }
        } else {
          showToast("Payment Created!", "success");
        this.currentStep = 2
        }

      })
      .catch((error) => {
        showToast("Payment failed", "error")
        console.log("Fetched fruits:", error);
      })
      .finally(() => {
        // remove loading spinner
        if (spin && buttonText) {
          spin.classList.add("hidden");
          buttonText.classList.remove("hidden");
        }
      });
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
      default:
        return cardDetailsForm;
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
