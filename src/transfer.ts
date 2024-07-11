
import transferDetails from './views/transfer/transferDetails.html?raw';
import transferExpired from './views/transfer/transferExpired.html?raw';
import transferConfirmationOne from './views/transfer/transferConfirmationOne.html?raw';
import transferConfirmationTwo from './views/transfer/transferConfirmationTwo.html?raw';
import transferConfirmationProgress from './views/transfer/transferConfirmtationProgress.html?raw';
import paymentSuccess from "./views/shared/paymentSuccess.html?raw";


class Transfer {
  constructor() {
    console.log('Transfer constructor');
  }

  renderTransferContent(step: number) {
    switch (step) {
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

  // updateProgressBar(progressBar: HTMLElement) {
  //   let width = 0;
  
  //   //  setInterval(() => {
  //   //   if (width >= 100) {
  //   //     width = 0; // Reset the progress bar
  //   //   } else {
  //   //     width++;
  //   //   }
  //   //   progressBar.style.width = width + '%';
  //   // }, 100); // Adjust the interval as needed for your desired speed
  
  // }
}
export default Transfer;
