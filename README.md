
# Spotflow Checkout Inline

This project is an inline library that enables users to make payments seamlessly. It integrates smoothly into your application, providing a streamlined checkout experience.

## Demo
<img width="808" alt="Screenshot 2024-07-26 at 16 05 52" src="https://github.com/user-attachments/assets/4dbb0b2e-2142-4f04-994a-5c352de7d30e">


## Installation
 ```sh
 npm install @spotflow/inline-js-checkout
   ```

## Usage
 ```sh
 import SpotflowCheckout from @spotflow/inline-js-checkout;

 const checkout = new SpotflowCheckout(
       merchantKey = "<sk_test_f998479c0eedhXXXXXXXXXXXXXXXX>"// This is your Merchant Key generated for your Merchant on Spotflow
       email = "email",
       amount = 1000,
     );
 checkout.setup();
 ```

Alternatively, you can include it directly in your HTML via a CDN:
```sh 
<script src="spotflow/cdn"></script>  
```

 ```sh
 <button onclick="openCheckout()">
    Make Payment
 </button>
 ```
 ```sh
 <script>
   const openCheckout = () => {
     const checkout = new SpotflowCheckout(
       merchantKey = "<sk_test_f998479c0eedhXXXXXXXXXXXXXXXX>"// This is your Merchant Key generated for your Merchant on Spotflow
       email = "temi@mailinator.com",
       amount = 1000,
     );
     checkout.setup();
   };
 </script>
 ```



