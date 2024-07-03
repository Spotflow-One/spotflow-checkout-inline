import "./styles/index.css";
import template from "./views/checkoutTransfer.html?raw";

class CheckoutForm {
  showModal(reference: string): void {
    if (typeof document !== "undefined") {
      // Append the modal HTML to the body
      const modalContainer = document.createElement("div");
      modalContainer.innerHTML = template;
      document.body.appendChild(modalContainer);

      // Event listeners for modal actions
      const submitBtn = document.getElementById("submitBtn");
      const closeBtn = document.getElementById("closeBtn");
      const myModalForm = document.getElementById(
        "myModalForm"
      ) as HTMLFormElement | null;

      if (submitBtn && closeBtn && myModalForm) {
        submitBtn.addEventListener("click", () => {
          const formData = new FormData(myModalForm);
          const data: { [key: string]: string } = {};
          formData.forEach((value, key) => {
            data[key] = value as string;
          });
          data["reference"] = reference;

          console.log("Form data:", data);
          alert("Form submitted! Check console for data.");
          document.body.removeChild(modalContainer);
        });

        closeBtn.addEventListener("click", () => {
          document.body.removeChild(modalContainer);
        });
      }
    } else {
      console.error("This function can only be used in a browser environment.");
    }
  }
}

const checkoutForm = new CheckoutForm();

export default checkoutForm;


