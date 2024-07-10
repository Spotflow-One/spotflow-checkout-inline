import cardDetailsForm from "./views/card/cardDetailsForm.html?raw";
import cardPinForm from "./views/card/cardPinForm.html?raw";

class Card {
  private cardDetailsValues: { number: string; expiry: string; cvv: string };
  private cardPin: string;
  private contents: NodeListOf<Element>;
  currentStep: number;
  constructor() {
    this.currentStep = 1;
    this.cardDetailsValues = {
      number: "",
      expiry: "",
      cvv: "",
    };
    this.cardPin = "";
    this.contents = document.querySelectorAll(".content");
    this.renderCardContent(this.currentStep);
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
        this.renderCardContent(3);
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
        this.renderCardContent(3);
      }, 500);
    }
  }

  handleSubmit(e: Event, currentStep: number) {
    e.preventDefault();
    this.contents[0].innerHTML = this.renderCardContent(2);
    this.currentStep = 2;
    console.log("submitted", this.contents[0].innerHTML);
    this.cardDetailsValues = {
      number: "",
      expiry: "",
      cvv: "",
    };
  }

  renderCardContent(step: number): string {
    let content: string;
    this.currentStep = step;
    switch (step) {
      case 1:
        content = this.cardDetailsForm();
        break;
      case 2:
        content = this.cardPinForm();
        break;
      case 3:
        content = this.cardDetailsForm();
        break;
      case 4:
        content = this.cardDetailsForm();
        break;
      case 5:
        content = this.cardDetailsForm();
        break;
      default:
        content = this.cardDetailsForm();
        break;
    }

    if (this.contents[0]) {
      this.contents[0].innerHTML = content;
    }
    return content;
  }

  cardDetailsForm(): string {
    return cardDetailsForm;
  }

  cardPinForm(): string {
    return cardPinForm;
  }
}
export default Card;
