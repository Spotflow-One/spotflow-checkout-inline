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

// --------------- //
//     Toaster     //
// --------------- //
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
