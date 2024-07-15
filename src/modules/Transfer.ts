import transferDetails from "../views/transfer/transferDetails.html?raw";
import transferExpired from "../views/transfer/transferExpired.html?raw";
import transferConfirmationOne from "../views/transfer/transferConfirmationOne.html?raw";
import transferConfirmationTwo from "../views/transfer/transferConfirmationTwo.html?raw";
import transferConfirmationProgress from "../views/transfer/transferConfirmtationProgress.html?raw";
import paymentSuccess from "../views/shared/paymentSuccess.html?raw";
import { createTransferPayment, verifyPaymentTransfer } from "../api";
import { showToast, generatePaymentReference, formatTime } from "../utils";
import loaderGif from "../assets/loader.gif";
import { PaymentResponseData } from "../types/types";

class Transfer {
  private container: HTMLElement;
  private contents: NodeListOf<Element>;
  private closeModal: () => void;
  private email: string;
  private token: string;
  private _currentStep: number;
  private activeRef: string;
  private paymentResponse: PaymentResponseData | null;
  private initialTime: number;
  private timeLeft: number;
  private timerId: number | null;
  private abortController: AbortController | null = null;
  constructor(
    container: HTMLElement,
    closeModal: () => void,
    token: string,
    email: string
  ) {
    this.container = container;
    this.contents = document.querySelectorAll(".content");
    this.closeModal = closeModal;
    this.token = token;
    this.email = email;
    this._currentStep = 1;
    this.renderTransferContent();
    this.paymentResponse = null;
    this.activeRef = "";
    this.initialTime = 600; // 10 minutes
    this.timeLeft = this.initialTime;
    this.timerId = null;
    this.attachInputListeners();

    if (this.currentStep === 1) {
      this.abortController = new AbortController();
      this.createTransfer();
    }
  }

  get currentStep(): number {
    return this._currentStep;
  }

  set currentStep(step: number) {
    this._currentStep = step;
    this.renderTransferContent();
    if (step === 1) {
      this.createTransfer();
    }

    if (step === 5) {
      this.startTimer("check");
    }
  }

  attachInputListeners() {
    const accountNumber = this.container.querySelector("#transfer-acn");
    const acnBtnClick = this.container.querySelector("#copy-acn");
    const acnTooltip = this.container.querySelector("#acn-tooltip");

    const amount = this.container.querySelector("#transfer-amount");
    const amountBtnClick = this.container.querySelector("#copy-amount");
    const amountTooltip = this.container.querySelector("#amount-tooltip");

    const tryAgainBtn = this.container.querySelector("#transfer-try-again");
    const sentBtn = this.container.querySelector("#transfer-sent");

    const sentVerifyBtn = this.container.querySelector(".transfer-button");
    const showAcn = this.container.querySelector("#show-acn");
    const timeLeftText = this.container.querySelector("#ctd-timer");
    const closeBtn = this.container.querySelector(
      ".success-button"
    ) as HTMLButtonElement;
    const transferConfirmOne = this.container.querySelector("#confirm-one");
    const closeCO = this.container.querySelector(".transfer-close");

    if (acnBtnClick && accountNumber) {
      acnBtnClick.addEventListener("click", () => {
        if (acnTooltip) {
          this.copyToClipboard(accountNumber.innerHTML, acnTooltip);
        }
      });
    }

    if (amountBtnClick && amount) {
      amountBtnClick.addEventListener("click", () => {
        if (amountTooltip) {
          this.copyToClipboard(amount.innerHTML.split(" ")[1], amountTooltip);
        }
      });
    }

    if (sentVerifyBtn) {
      sentVerifyBtn.addEventListener("click", () => {
        if (this.abortController) {
          this.abortController.abort();
          this.currentStep = 5;
        }
      });
    }

    if (tryAgainBtn) {
      tryAgainBtn.addEventListener("click", () => {
        this.currentStep = 1;
      });
    }
    if (sentBtn) {
      sentBtn.addEventListener("click", () => {
        if (this.abortController) {
          this.abortController.abort();
          this.currentStep = 5;
        }
      });
    }

    if (showAcn) {
      showAcn.addEventListener("click", () => {
        this.stopProgressBar();
        this.currentStep = 1;
      });
    }

    if (this.currentStep === 5) {
      this.initialTime = 300; // 5 minutes
      this.timeLeft = this.initialTime;
      if (timeLeftText) {
        timeLeftText.innerHTML = formatTime(this.initialTime);
      }
      const initialInterval = 30000; // 30 secs
      this.abortController = new AbortController();
      // verify transfer
      setTimeout(() => {
        this.verifyTransfer(
          this.token,
          initialInterval,
          () => {
            this.currentStep = 6;
          },
          (error) => {
            console.error("Polling failed:", error);
            showToast(error.message, "error");
          }
        );
      }, 5000);

      this.startTimer("check");
    }

    if (transferConfirmOne) {
      transferConfirmOne.addEventListener("click", () => {
        this.currentStep = 4;
      });
    }

    // close modal
    if (closeBtn) {
      closeBtn.addEventListener("click", () => this.closeModal());
    }
    // close modal
    if (closeCO) {
      closeCO.addEventListener("click", () => this.closeModal());
    }
  }

  async createTransfer() {
    requestAnimationFrame(() => {
      const loader = this.container.querySelector("#loader");
      const mainContent = this.container.querySelector("#details-content");

      // show loading spinner
      if (loader && mainContent) {
        loader.classList.remove("hidden");
        loader.querySelector("img")?.setAttribute("src", loaderGif);
        mainContent.classList.add("hidden");
      }

      const payload = {
        amount: 14.99,
        channel: "bank_transfer",
        currency: "USD",
        customer: {
          email: this.email,
        },
        reference: generatePaymentReference(),
      };

      // send transfer details
      const response = createTransferPayment(this.token, payload);

      response
        .then((data) => {
          if (data.status === "failed") {
            if (data.providerMessage) {
              showToast(data.providerMessage, "error");
            } else {
              showToast("Payment failed", "error");
            }
            this.currentStep = 2;
          } else {
            // remove loading spinner
            if (loader && mainContent) {
              loader.classList.add("hidden");
              mainContent.classList.remove("hidden");
            }
            this.activeRef = data.reference;
            this.paymentResponse = data;
            this.updateTransferDetailsContent();
            const initialInterval = 30000; // 30 secs
            // verify transfer
            setTimeout(() => {
              this.verifyTransfer(
                this.token,
                initialInterval,
                () => {
                  this.currentStep = 6;
                },
                (error) => {
                  console.error("Polling failed:", error);
                  showToast(error.message, "error");
                }
              );
            }, initialInterval);
          }
        })
        .catch((error) => {
          showToast(error.message, "error");
        });
    });
  }
  async verifyTransfer(
    token: string,
    initialInterval: number,
    onSuccess: (data: PaymentResponseData) => void,
    onError: (error: Error) => void
  ) {
    let attempts = 0;
    let interval = initialInterval;
    let pollingActive = true;
    let signal: AbortSignal;
    if (this.abortController) {
      signal = this.abortController.signal;
    }

    const poll = async () => {
      if (this.timeLeft <= 0) {
        pollingActive = false; // Stop polling
        onError(new Error("Max polling time reached"));
        this.currentStep = 2;
        return;
      }

      attempts += 1;
      try {
        const responseData = await verifyPaymentTransfer(
          token,
          this.activeRef,
          signal
        );
        if (responseData.status === "failed") {
          if (pollingActive) {
            interval = initialInterval * (attempts + 1); // Increase interval with each retry
            setTimeout(poll, interval); // Retry after the increased interval
          }
        } else {
          pollingActive = false; // Stop polling when successful
          onSuccess(responseData);
        }
      } catch (error) {
        if (pollingActive) {
          interval = initialInterval * (attempts + 1);
          setTimeout(poll, interval);
        }
      }
    };

    poll();
  }

  private getTransferStepContent() {
    switch (this.currentStep) {
      case 1:
        return transferDetails;
      case 2:
        return transferExpired;
      case 3:
        return transferConfirmationOne;
      case 4:
        return transferConfirmationTwo;
      case 5:
        return transferConfirmationProgress;
      case 6:
        return paymentSuccess;
      default:
        return transferDetails;
    }
  }

  private updateTransferDetailsContent() {
    const currAmount = this.container.querySelectorAll(".transfer-curr-amount");
    const bank = this.container.querySelector("#transfer-bank");
    const accountNumber = this.container.querySelector("#transfer-acn");
    const timeLeftText = this.container.querySelector("#time-left");

    if (this.paymentResponse) {
      if (currAmount.length) {
        currAmount.forEach(
          (curr) =>
            (curr.innerHTML = `${this.paymentResponse?.currency} ${this.paymentResponse?.amount}`)
        );
      }

      if (bank && this.paymentResponse.bankDetails) {
        bank.innerHTML = this.paymentResponse.bankDetails?.bankName;
      }
      if (accountNumber && this.paymentResponse.bankDetails) {
        accountNumber.innerHTML =
          this.paymentResponse.bankDetails.accountNumber;
      }
      if (timeLeftText) {
        timeLeftText.innerHTML = formatTime(this.initialTime);
      }
      // start timer immediately bank details has been fetched
      this.startTimer("poll");
    }
  }
  renderTransferContent() {
    if (this.contents[1]) {
      this.contents[1].innerHTML = this.getTransferStepContent();
      this.attachInputListeners();
    }
  }

  private startTimer(type: "poll" | "check") {
    const timeLeftText = this.container.querySelector("#ctd-timer");
    // Ensure any existing timer is stopped
    this.stopTimer();

    this.timerId = window.setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft -= 1;
        // Update the view with the remaining time
        if (type === "poll") {
          this.updateProgressTimerContent();
        } else {
          // requestAnimationFrame(() => {
          if (timeLeftText) {
            timeLeftText.innerHTML = formatTime(this.timeLeft);
            this.startTimer("check");
          }
          // });
        }
      } else {
        this.stopTimer();
        if (type === "check") {
          this.currentStep = 3;
        }
      }
    }, 1000);
  }

  private updateProgressTimerContent() {
    const radius = 40;
    const circumference = 2 * Math.PI * radius;
    const progress =
      ((this.initialTime - this.timeLeft) / this.initialTime) * 100;

    const strokeDashoffset = (progress / 100) * circumference;
    const progressCircle = this.container.querySelector(".circle-progress");
    const timeLeftText = this.container.querySelector("#time-left");

    if (progressCircle) {
      progressCircle.setAttribute("stroke-dasharray", `${circumference}`);
      progressCircle.setAttribute("stroke-dashoffset", `${strokeDashoffset}`);
    }

    if (timeLeftText) {
      timeLeftText.innerHTML = formatTime(this.timeLeft);
    }
  }
  private stopTimer() {
    if (this.timerId !== null) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  //  startProgressBar() {
  //     const progressBar = this.container.querySelector(".progress-bar") as HTMLElement;
  //     if (progressBar) {
  //       progressBar.style.animationPlayState = 'running';
  //     }
  //   }

  stopProgressBar() {
    const progressBar = this.container.querySelector(
      ".progress-bar"
    ) as HTMLElement;
    if (progressBar) {
      progressBar.style.animationPlayState = "paused";
    }
  }
  copyToClipboard(text: string, element: Element) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        element.innerHTML = "Copied!";
      })
      .catch(() => {
        element.innerHTML = `Failed to copy`;
      });
  }

  destroyTimer() {
    this.stopTimer();
  }

  stopPolling() {
    if (this.abortController) {
      this.abortController.abort();
    }
  }
}
export default Transfer;
