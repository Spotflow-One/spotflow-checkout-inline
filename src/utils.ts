// -------------------------   //
//     Generate Reference      //
// -------------------------   //

export const generatePaymentReference = (): string => {
  const timestamp = Date.now().toString(36);
  const uid = "xxxx-xxxx-xxx-xxxx".replace(/[x]/g, () => {
    const r = Math.floor(Math.random() * 16);
    return r.toString(16);
  });
  return `SPF-${timestamp}-${uid}`.toUpperCase();
};

// -------------------------   //
//        Formatters           //
// -------------------------   //

export const clearNumber = (value = "") => {
  return value.replace(/\D+/g, "");
};

export const formatCreditCardNumber = (value: string): string => {
  if (!value) {
    return value;
  }

  const clearValue = clearNumber(value);
  const nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
    4,
    8
  )} ${clearValue.slice(8, 12)} ${clearValue.slice(12, 16)}`;
  return nextValue.trim();
};

export const formatCVC = (value: string): string => {
  const clearValue = clearNumber(value);
  const maxLength = 3;

  return clearValue.slice(0, maxLength);
};

export const formatExpirationDate = (value: string): string => {
  const clearValue = clearNumber(value);

  if (clearValue.length >= 3) {
    return `${clearValue.slice(0, 2)} / ${clearValue.slice(2, 4)}`;
  }

  return clearValue;
};

export const unFormatCreditCardNumber = (value: string): string => {
  if (!value) {
    return value;
  }

  const clearValue = clearNumber(value);
  const nextValue = `${clearValue.slice(0, 4)}${clearValue.slice(
    4,
    8
  )}${clearValue.slice(8, 12)}${clearValue.slice(12, 16)}`;
  return nextValue.trim();
};

// ----------------------- //
//     Toaster functions   //
// ----------------------- //
// Function to create a toast element
const createToast = (
  message: string,
  theme: "success" | "error" | "info" | "warning"
): HTMLDivElement => {
  const toast = document.createElement("div");
  toast.classList.add("toast", theme);

  const messageElement = document.createElement("span");
  messageElement.textContent = message;
  toast.appendChild(messageElement);

  const closeButton = document.createElement("span");
  closeButton.textContent = "×";
  closeButton.classList.add("close-btn");
  closeButton.onclick = () => removeToast(toast);
  toast.appendChild(closeButton);

  return toast;
};

// Function to show a toast
export const showToast = (
  message: string,
  theme: "success" | "error" | "info" | "warning",
  duration = 3000
): void => {
  const toastContainer = document.getElementById("toast-container");
  if (toastContainer) {
    const toast = createToast(message, theme);
    toastContainer.appendChild(toast);

    // Force a reflow to apply transition
    toast.offsetHeight;
    toast.classList.add("show");

    // Remove the toast after the specified duration
    setTimeout(() => removeToast(toast), duration);
  }
};

// Function to remove a toast
const removeToast = (toast: HTMLDivElement): void => {
  toast.classList.remove("show");
  toast.addEventListener("transitionend", () => {
    if (toast.parentElement) {
      toast.parentElement.removeChild(toast);
    }
  });
};
