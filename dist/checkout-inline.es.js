import './index.css';var D = Object.defineProperty;
var J = (r, e, t) => e in r ? D(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var o = (r, e, t) => J(r, typeof e != "symbol" ? e + "" : e, t);
const K = `<div id="checkout-modal">
  <div role="dialog" class="relative z-10" aria-labelledby="modal-title" aria-modal="true">
    <div class="fixed inset-0 bg-[#fafaff] bg-opacity-100 transition-opacity" aria-hidden="true"></div>
  
    <div id="toast-container"></div>
  
    <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div class="relative flex min-h-full items-end justify-center text-center sm:items-center p-0">
        <div
          class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-full sm:w-4/5 md:w-[90%] lg:w-[900px] min-h-screen sm:min-h-[70%] flex">
  
          <aside class="px-2 py-4 md:flex justify-center w-[250px] bg-[#f4f4ff] overflow-auto hidden">
            <div class="w-full py-8">
              <div class="container-center">
                <img src="" alt="Nba Logo" id="merchantLogo" class="hidden md:flex" />
              </div>
              <h5 class="text-xl font-semibold text-common pt-10 pb-4 text-center">PAYMENT OPTIONS</h5>
              <div class="payment-options">
  
                <!-- Tab options -->
              </div>
            </div>
          </aside>
          <div class="main" id="main">
            <div class="container-center w-full bg-primary-lighter">
              <img src="" alt="Nba Logo" id="merchantLogoMob" class="md:hidden" />
            </div>
            <div id="mob-tab-co">
  
            </div>
            <button
              class="hidden top-0 right-0 text-lg fixed hover:bg-primary hover:text-white h-6 w-6 md:flex justify-center items-end rounded-full close-btn">x</button>
  
            <div class="box-container relative max-sm:py-4 max-sm:px-4">
              <!-- header -->
              <div class="header-container">
                <div class="container-between border-b border-b-white pb-[9.6px]">
                  <p class="text-xs" id="merchant-email"></p>
                  <p class="text-xs">League Pass</p>
                </div>
                <div class="container-between pt-[9.6px] pb-[6.4px]">
                  <div class="align-center">
                    <p class="text-sm mr-1">USD 1 = NGN 1,483.98</p>
                    <div class="group relative flex flex-col items-center cursor-pointer">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M5 8C4.72386 8 4.5 7.77614 4.5 7.5L4.5 4C4.5 3.72386 4.72386 3.5 5 3.5C5.27614 3.5 5.5 3.72386 5.5 4L5.5 7.5C5.5 7.77614 5.27614 8 5 8Z"
                          fill="#CCCCE8" />
                        <path
                          d="M5.625 2.625C5.625 2.27982 5.34518 2 5 2C4.65482 2 4.375 2.27982 4.375 2.625C4.375 2.97018 4.65482 3.25 5 3.25C5.34518 3.25 5.625 2.97018 5.625 2.625Z"
                          fill="#CCCCE8" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M10 5C10 7.76142 7.76142 10 5 10C2.23858 10 1.95703e-07 7.76142 4.37114e-07 5C6.78525e-07 2.23858 2.23858 -6.78525e-07 5 -4.37114e-07C7.76142 -1.95703e-07 10 2.23858 10 5ZM5 9C7.20914 9 9 7.20914 9 5C9 2.79086 7.20914 1 5 1C2.79086 0.999999 1 2.79086 1 5C1 7.20914 2.79086 9 5 9Z"
                          fill="#CCCCE8" />
                      </svg>
  
                      <div class="tooltip">
                        <div class="tooltip-textbox">
                          <p class="tooltip-title">
                            What is this?
                          </p>
                          <p class="tooltip-text">
                            This rate reflects the current exchange rate for
                            converting United States Dollars (USD) to Nigerian Naira
                            (NGN). Please note that exchange rates are subject to
                            change and may vary slightly at the time of the
                            transaction.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p class="text-sm"> Pay
                      <span> USD 14.99</span>
                    </p>
                  </div>
  
                </div>
  
                <div class="flex justify-end">
                  <div class="header-chip">
                    NGN 22,244.86
                  </div>
                </div>
              </div>
              <!-- body -->
              <div class="box-container-method">
                <div class="content active" data-content="0">
                </div>
                <div class="content" data-content="1"></div>
                <div class="content" data-content="2"></div>
              </div>
  
              <div id="mob-container" class="md:hidden">
  
              
              </div>
              <!-- footer -->
              <div class="container-between gap-2 mt-20 mb-8 md:hidden" id="mob-action-btns">
                <button class="button-outline px-3 w-auto" id="change-method">
                  <span class="text-[10px] mr-1">x</span> Change Payment Method
                </button>
                <button class="button-outline px-6 w-auto close-btn">
                  <span class="text-[10px] mr-1">x</span> Cancel Payment
                </button>
              </div>
              <div class="container-center pt-2 pb-8 gap-1">
                <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4.884 0.68L1.384 2.235C1.024 2.395 0.789001 2.755 0.789001 3.15V5.5C0.789001 8.275 2.709 10.87 5.289 11.5C7.869 10.87 9.789 8.275 9.789 5.5V3.15C9.789 2.755 9.554 2.395 9.194 2.235L5.694 0.68C5.439 0.565 5.139 0.565 4.884 0.68ZM5.289 5.995H8.789C8.524 8.055 7.149 9.89 5.289 10.465V6H1.789V3.15L5.289 1.595V5.995Z"
                    fill="#6D6A73" />
                </svg>
  
                <p class="text-[10px] text-grey-100">
                  PCI DSS Certified
                </p>
              </div>
            </div>
          </div>
        </div>
  
      </div>
    </div>
  </div>
</div>
`, M = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAAAuCAYAAACRfL+OAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAptSURBVHgB7ZkJcBPXGYB/rXZlWadlyQfGJ7axzQ0+Cjg4rg0pBJqZBNI2TMg0DS2dhqNJm4Npp51m0qEDTUiHprSFhGmgpG0oTUgoiQk2kJjD4AsbGwPyfVu2dViWdfd/ayykXfmQcaYzGX0zq9197+3T7r/vPxcgSJAgQYIECRLk/4OA/Ljd7nm4ewo32XgDXS5XM0VRRwQCgRG+xghQGI9+VN17fM/ZRqXF7vR0HN68ALI0IWDefRCctVqgYiNB8uozWuG8xHUolDtOp/Ply82GHwxZnbxJVyQqzykloufJMc4/u6HH/HnzgEXgPUYWIoTcOapfu1zw7c8bdFnuie7SDW4BBdYwMWOYHyMtk4rok3gPl8cbbrLYz5Y26ePG67/33/twjne4fbS2d3jPc8drlP1mu6dRFcpAdoJydEDybLD96xw465rB3DuYLPvn69uw+ecGq0O98VBVWo/JyvvD87tyFLhjBTIyMkK/e6U9be/ZJh+BZMUr4NrLK1U3uoxRa/90Pc09oURGIRPEhonzXihI+pnRYv+dXEzvwYcyeY8pKSmhP7zRk7flvRoRTCAQ/d7CbDzkCYSq6jIt9BYGYUHMfc2xl9d7jp23WsCtNy2BSfhPdc8sXBkLYYYhMmvTj8CLJ+sF3323erdh2LabOyY/Pz/jSrNBNNE8ZFVXthvn++uj3C63z5tDiYNUJGSPHWV14Citvd/pwltyuyiYhE/rdWT3PfgKOVPXBx/W6F5Fwc/ldGVXtE5u5q62GHBVulXcds/DqaUMFG3PAsPvC+HM81lsm6ulG9wjVggUtBnQY7Kth6+Yw5fayMss4DSvqu8Z8mkQ0QLetc06SwTukrntHoG8tDoJ1qRrQB5C35/oyQJQfrofKE0YBMrRso5kfAPx8AAc+M68gVPbMm8d//5iXXqUlNd/rdkAdqdrsXebtm84VW9x+IyLkoXwrm3oGyY7nvqzAqEpAfww179RFi5MBvGOTRAon9X1E0OUCw8AeqvyxxZFZjyVNSvjN+tT+7j9VqcLek1Wzdg5vgD6epuB9yALZ8s9ZmCM2k4TGIYdSdyxrECeWxkL4RKG2wduG0ra4QB6UQoESlWHEbr09uUwA6Bd06VGSm7463O4fE7jKttMs7lj0MVCuNT3+Tr0VrirM2dxx7IC2Z6XAP4w73gDbKe+BCoicJXRDdmgtLF/s1gsntQITwURRTm4bRSubI2M9ragWdUdJiF33LxoGcSpQn3abLi60Nbl4KryMTBUQngozIkI5c4BzoYWsJ2+xMYfFMYiglC+Hk5GRbuRLOeV8ICQm+4yjvDeWqpGgqrAeOICDPKWt6Nb5jJHHQpJajGvvU1vJW96jncb1YETbD1WCzaHb2REhSlAIA4B29kycDucINrwEATKsbJOEvLnwzQRMzRxjS8N25xH/ntTl87tfyRDTXZlY+edBuv8Rt2wzxiMIiA5QtKRjMLjcrOLjel81IZ2YGyhljE81ySIUgG9ajHYz1wGx9U6YAozwfbRRZiMSJkIelFdCCSIqmof2kBim+mw5W9V8XjtXuOIA+72+T6oQkzDj3LjLuHhlbG2mg5jIgrPZxzxmhIRdSNOJSZu1idgK20cJC/Md4WQn6x4pd8bEq3OBmoWvgW7HZi8JcCszobJKEhT+5xf1A5EA0dPp0pluwkq2ow8YSyYJYfT25Y1LIiRP40CY6WPKymyutOUyp1jliKE9JVKGHqQ29eos0C30foN7zZWIJVt/iM7YXwUSPdtB+abmSAIV4DkjR1oYFUwEatSVGyuMMbp2j6YSULRfRJVkYcydpvN5m0Y0qvajTwDnhIhReNLVUcpmB5/811uMiz1PmcnePtiK3oFO2+wcHEyUCgUz2CVHEAihomgUT2WJ6m8/lDvUaGZwIIq8WZxM6w7eH1BsdZ4AZPHtHtdiZhR88anRrIOozElUtrobz6MqGNwBXk8BisQYkf2FPHHCxQysJeUe84dX1SDq0MHE0FM86al0Z7owIwPcLNrCKbDT1bFwy/XJsOPH4pD9+obR3QZrPDk4coIq4t6jZxjwrairsvMm2NupIzcizZOGdIoYXgeGcpbDSQ09ySinjj9zeImcKLfemtThs8FtnPlYD1xHqhwJRrXm6A4fwAmY9WcMBJEecLi6nYTTIetuXEXlsbKSeEq5tH5mpOP/aXSJxUgWesHlT3r8A1TX2r1WSYrL1SBKLmILJuNqDYxKRESuNHpey/lo+ZiBW7XyQHt3Yl1C9iKUSsaK08bk7sILHveA2K7BSIGpkJ6lORMpFy0pNc0qipWTjg5VdAD2NBoduFhFz70v7H+8YJpxPeh0f6Rm83uG7Kl+ZvjFx/flh640PJ3ctzjR3W16Kbx7paNnfsYIdOIE544VAVmryqY+Nn1QEWrIRDwbZzcnDkLZhhtfDg/gGwZZAOxtTWdJrm/i25h5n3+zgC79Rj5mTtZZdpec87YOc8q3+kzwzNHa1i7QhAopGyCFyC1azI0wzCzOBmK773J6sOVlFLWrIfp8oV2MBxXICtQv3nGyapuKPxDGZsAEZhlcyFArGlRkk9wicMMouSqC0GGbtjqdGdUtE2/9l3TOURcaSI5HjfxuqgdhEf+eA0wWQLmW8tHY+AASNZIT5G66YNAoQEhKb3BYAi/1W3Ob/HjVpM0odCiG4nu9lPbXZOmgX2Ppw2Nbb9al+z29xhXmw2klVUb9hUKcSlmxSnQy7jZ5w7DInMx6lwS6uzbF1rgr1iBF6bEshW0ALiyPCHMXnJ7YGqW2A/XWg2F6LKb9MN2pqihP2pMjb3JjFdYW/UWhb8i9RoM4HblxeYxDNNGztsGR47uL25Zy/VGnQYL4BeHTDx8hxVIiFAAJ7YuhSKshc7FyhTJGNWYk+zfmAEbD1UAqUC5uwcgQJpWp4fX4+eNRTBNtr1/ky20j9dPIuLMOEV9UX2/38K3Ukw7UBh1uNDY5WO2ObqJGvMFYiXehs2mPSojoilYEju6xOdGStmyW2WbAWLCQqAU1YfNaQIAb8KVn6a5FKMMvGwwVXY+nOhMi5KdudTo36BqpKKOMWEQxEJBj3daMYbd6Ya6riE260UPKWCDhHO3+0F1r6o0OGyHDQs0QD5PJIVLgITEdHYG+2GEEjEOmCIo7ZKCuYEJcqpsyZ4NPy1IPIiHxuvjGNTZqpAm73N82FbFOIa+qt0UifYqgc6KlV8Ri4Qrd35QDyJUHTGGt1asf5AElQgmVETBkacXAZMzD1x320EQra6AqfPxw6kq27FrnSKYAUjtdzHWR7eujLNhFPtbRih4De3LCa2OH7JL0PtEy0M6OM2tJPv1x72MOpOOV0te+WTbsvdf/6wxdogX+o4GQiP4iVOgVoLsz69gPZF6i/1Dmu78x7OLq4FjtTOi71fHcbla2gYtR0t25fBql3Ixu3S7Mce4U7wzJwImQcxQzjCxsCNBLS0JZagTODdrKNETGfD6au54HAMJ6tAyTnP7vifSq18sTOTNrxSz2qEc+9hNSmmP4zaun8Rvua1CobAIb8QMQYIECRIkSJAgQWac/wFqwwbQ88yE+AAAAABJRU5ErkJggg==", x = `<form id="checkoutcard">
  <div class="box-container">
    <h5 class="content-heading">Enter your card details to pay</h5>
    <div class="mt-8">
      <div class="relative mx-4 md:mx-6 mb-4">
        <span
          class="absolute text-xs left-0 top-1 text-grey-100 pt-1 pb-1 px-3 tracking-[0.5px]"
          >CARD NUMBER</span
        >
        <div>
          <input
            class="details-input-container"
            type="tel"
            id="card-number"
            name="number"
            placeholder="0000 0000 0000 0000"
            required
          />
        </div>
        <div class="absolute right-3 top-1/2 -translate-y-2/4 max-sm:hidden">
          <div id="card-types" class="align-center gap-2">
          </div>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-4 my-4 mx-4 md:mx-6">
        <div class="relative w-full">
          <span
            class="absolute text-xs left-0 top-1 text-grey-100 pt-1 pb-1 px-3 tracking-[0.5px]"
            >CARD EXPIRY</span
          >
          <div>
            <input
              class="details-input-container"
              type="tel"
              id="card-expiry"
              name="expiry"
              placeholder="MM / YY"
              required
            />
          </div>
        </div>

        <div class="relative w-full">
          <span
            class="absolute text-xs left-0 top-1 text-grey-100 pt-1 pb-1 px-3 tracking-[0.5px]"
            >CVV</span
          >
          <div>
            <input
              class="details-input-container"
              type="tel"
              id="card-cvv"
              name="cvv"
              placeholder="123"
              required
            />
          </div>
        </div>
      </div>

      <div class="mx-4 md:mx-6 my-8">
        <button type="submit" disabled="true" class="details-form-button">
          <svg class="spinner hidden" id="spinner" viewBox="0 0 24 24">
            <path
              d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
            ></path>
          </svg>
          <span id="details-form-button-text"> Pay USD 14.99 </span>
        </button>
      </div>
    </div>
  </div>
</form>
`, O = `<div id="checkoutcardpin">
  <div class="box-container md:w-4/5 mx-auto py-8 md:py-16">
    <div class="container-center h-[20vh] hidden" id="loader">
      <img src="" alt="loader gif" />
    </div>
    <div id="pin-content">
      <h5 class="pin-text">
        Please enter your 4-digit card pin to authorize this payment
      </h5>

      <div class="mt-8">
        <div class="pin-container">
          <input type="tel" class="pin-input" maxlength="1" id="pin1" />
          <input type="tel" class="pin-input" maxlength="1" id="pin2" />
          <input type="tel" class="pin-input" maxlength="1" id="pin3" />
          <input type="tel" class="pin-input" maxlength="1" id="pin4" />
        </div>

        <div class="container-center mt-8">
          <button class="pin-cancel close-btn">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</div>
`, Z = `<div id="checkoutcardotp">
  <div class="box-containe w-11/12 md:w-4/5 mx-auto py-8 md:py-16">
    <div class="container-center h-[20vh] hidden" id="loader">
      <img src="" alt="loader gif" />
    </div>
    <div id="otp-content">
      <h5 class="otp-text">Kindly enter the OTP sent to 234249***3875</h5>

      <div class="mt-8">
        <div class="relative w-full grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-5">
          <div class="col-span-2">
            <input
              class="otp-input"
              type="tel"
              id="card-otp"
              name="otp"
              required
            />
          </div>

          <div class="max-sm:text-center max-sm:w-4/5 max-sm:mx-auto">
            <button class="otp-button" disabled="true">Authorize</button>
          </div>
        </div>

        <div class="py-5">
          <p class="otp-subtext">
            A token should be sent to you  within 6 minutes
          </p>
        </div>

        <div class="container-center">
          <button class="pin-cancel">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</div>
`, I = `<div id="paymentWarning">
  <div class="box-container">
    <div class="text-center mt-7">
      <svg
        class="mx-auto"
        width="48"
        height="46"
        viewBox="0 0 48 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M47.4936 39.5624L27.5213 2.47251C26.1057 -0.157178 22.3346 -0.157178 20.9178 2.47251L0.946695 39.5624C0.639327 40.1332 0.485227 40.7741 0.499436 41.4223C0.513645 42.0705 0.695678 42.7039 1.02777 43.2608C1.35986 43.8177 1.83065 44.2789 2.39421 44.5995C2.95776 44.9201 3.59481 45.0892 4.24318 45.0901H44.1912C44.8401 45.0902 45.4779 44.9219 46.0422 44.6017C46.6066 44.2815 47.0782 43.8204 47.411 43.2633C47.7438 42.7063 47.9263 42.0724 47.9408 41.4237C47.9553 40.775 47.8012 40.1337 47.4936 39.5624V39.5624ZM24.2201 39.3479C23.7566 39.3479 23.3034 39.2104 22.918 38.9529C22.5326 38.6954 22.2322 38.3293 22.0548 37.9011C21.8774 37.4728 21.831 37.0016 21.9214 36.5469C22.0119 36.0923 22.2351 35.6746 22.5629 35.3469C22.8906 35.0191 23.3082 34.7959 23.7629 34.7054C24.2175 34.615 24.6888 34.6614 25.117 34.8388C25.5453 35.0162 25.9114 35.3166 26.1689 35.702C26.4264 36.0875 26.5639 36.5406 26.5639 37.0042C26.5639 37.3119 26.5033 37.6167 26.3855 37.9011C26.2677 38.1854 26.095 38.4438 25.8774 38.6614C25.6598 38.8791 25.4014 39.0517 25.117 39.1695C24.8327 39.2873 24.5279 39.3479 24.2201 39.3479ZM26.7654 15.7756L26.0928 30.0725C26.0928 30.5698 25.8952 31.0467 25.5436 31.3983C25.192 31.75 24.7151 31.9475 24.2178 31.9475C23.7205 31.9475 23.2436 31.75 22.892 31.3983C22.5403 31.0467 22.3428 30.5698 22.3428 30.0725L21.6701 15.7815C21.655 15.44 21.7088 15.099 21.8283 14.7787C21.9478 14.4584 22.1306 14.1655 22.3657 13.9174C22.6008 13.6692 22.8835 13.471 23.1968 13.3344C23.5102 13.1979 23.8478 13.1258 24.1897 13.1225H24.2143C24.5584 13.1223 24.899 13.1919 25.2156 13.327C25.5321 13.462 25.818 13.6598 26.0559 13.9085C26.2939 14.1571 26.4791 14.4513 26.6002 14.7734C26.7213 15.0955 26.776 15.4389 26.7608 15.7827L26.7654 15.7756Z"
          fill="#FF9B00"
        />
      </svg>

      <p id="payment-warning-text" class="warning-text"></p>
    </div>

    <div class="warning-list box-container">
    </div>
  </div>
</div>
`, H = `<div id="paymentSuccess">
    <div class="box-container">
        <div class="text-center mt-7"></div>
        <svg class="mx-auto" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="50" fill="#D6F1E4" />
            <circle opacity="0.52" cx="49.5" cy="49.5" r="37.5" fill="#99DDBC" />
            <ellipse cx="48.4502" cy="48.45" rx="23.25" ry="23.25" fill="white" />
            <path
                d="M50.0003 75.8333C35.7395 75.8177 24.1827 64.2609 24.167 50V49.4833C24.451 35.2867 36.1397 23.9806 50.3379 24.1689C64.5361 24.3573 75.9207 35.9696 75.8279 50.1688C75.7352 64.368 64.1998 75.8305 50.0003 75.8333ZM39.9658 50.7568C38.9584 49.7533 37.3288 49.7549 36.3233 50.7603C35.3165 51.7671 35.3165 53.3995 36.3233 54.4064L42.0453 60.1283C43.5853 61.6683 46.0821 61.6683 47.622 60.1283L63.6791 44.0713C64.686 43.0644 64.6888 41.4328 63.6855 40.4223C62.6772 39.4068 61.0356 39.4039 60.0237 40.4158L45.4287 55.0108C45.0999 55.3396 44.5669 55.3401 44.2374 55.0119L39.9658 50.7568Z"
                fill="#54C68F" />
        </svg>

        <h5 class="success-text">
            Your payment has been received
        </h5>
    </div>

    <div class="mt-12 mx-auto w-3/5">
        <button class="success-button close-btn">
            Close
        </button>
    </div>

</div>
</div>
</div>`, N = `<div class="box-container">
  <div class="container-center h-[40vh] hidden" id="loader">
    <img src="" alt="loader gif" />
  </div>
</div>
`;
class p extends Error {
  constructor(e, t) {
    super(e), this.status = t, this.name = "FetchError";
  }
}
class g extends Error {
  constructor(e) {
    super(e), this.name = "AuthorizationError";
  }
}
const y = (r) => {
  if (!r)
    throw new g("Missing authorization token");
  const e = new Headers();
  return e.append("Content-Type", "application/json"), e.append("Authorization", `Bearer ${r}`), e;
}, L = "https://dev-api.spotflow.one/api/v1", q = async (r, e) => {
  try {
    const t = y(r), n = await fetch(`${L}/payments`, {
      method: "POST",
      headers: t,
      body: JSON.stringify(e)
    });
    if (!n.ok) {
      const s = await n.json();
      throw s.message ? new p(s.message, n.status) : new p("Network response was not ok", n.status);
    }
    return await n.json();
  } catch (t) {
    throw t instanceof p ? console.error(`FetchError: ${t.message} (status: ${t.status})`) : t instanceof g ? console.error(`AuthorizationError: ${t.message}`) : console.error(`Unexpected error: ${t}`), t;
  }
}, P = async (r, e) => {
  try {
    const t = y(r), n = await fetch(`${L}/payments/authorize`, {
      method: "POST",
      headers: t,
      body: JSON.stringify(e)
    });
    if (!n.ok) {
      const s = await n.json();
      throw s.message ? new p(s.message, n.status) : new p("Network response was not ok", n.status);
    }
    return await n.json();
  } catch (t) {
    throw t instanceof p ? console.error(`FetchError: ${t.message} (status: ${t.status})`) : t instanceof g ? console.error(`AuthorizationError: ${t.message}`) : console.error(`Unexpected error: ${t}`), t;
  }
}, Y = async (r, e) => {
  try {
    const t = y(r), n = await fetch(`${L}/payments/validate`, {
      method: "POST",
      headers: t,
      body: JSON.stringify(e)
    });
    if (!n.ok) {
      const s = await n.json();
      throw s.message ? new p(s.message, n.status) : new p("Network response was not ok", n.status);
    }
    return await n.json();
  } catch (t) {
    throw t instanceof p ? console.error(`FetchError: ${t.message} (status: ${t.status})`) : t instanceof g ? console.error(`AuthorizationError: ${t.message}`) : console.error(`Unexpected error: ${t}`), t;
  }
}, z = async (r, e) => {
  try {
    const t = y(r), n = await fetch(`${L}/payments`, {
      method: "POST",
      headers: t,
      body: JSON.stringify(e)
    });
    if (!n.ok) {
      const s = await n.json();
      throw s.message ? new p(s.message, n.status) : new p("Network response was not ok", n.status);
    }
    return await n.json();
  } catch (t) {
    throw t instanceof p ? console.error(`FetchError: ${t.message} (status: ${t.status})`) : t instanceof g ? console.error(`AuthorizationError: ${t.message}`) : console.error(`Unexpected error: ${t}`), t;
  }
}, k = async (r, e, t) => {
  try {
    const n = y(r), A = await fetch(`${L}/payments/verify?reference=${e}`, {
      method: "GET",
      headers: n,
      signal: t
    });
    if (!A.ok) {
      const i = await A.json();
      throw i.message ? new p(i.message, A.status) : new p("Network response was not ok", A.status);
    }
    return await A.json();
  } catch (n) {
    throw n instanceof p ? console.error(`FetchError: ${n.message} (status: ${n.status})`) : n instanceof g ? console.error(`AuthorizationError: ${n.message}`) : console.error(`Unexpected error: ${n}`), n;
  }
}, T = () => {
  const r = Date.now().toString(36), e = "xxxx-xxxx-xxx-xxxx".replace(/[x]/g, () => Math.floor(Math.random() * 16).toString(16));
  return `SPF-${r}-${e}`.toUpperCase();
}, S = (r = "") => r.replace(/\D+/g, ""), V = (r) => {
  if (!r)
    return r;
  const e = S(r);
  return `${e.slice(0, 4)} ${e.slice(
    4,
    8
  )} ${e.slice(8, 12)} ${e.slice(12, 16)}`.trim();
}, W = (r) => S(r).slice(0, 3), j = (r) => {
  const e = S(r);
  return e.length >= 3 ? `${e.slice(0, 2)} / ${e.slice(2, 4)}` : e;
}, X = (r) => {
  if (!r)
    return r;
  const e = S(r);
  return `${e.slice(0, 4)}${e.slice(
    4,
    8
  )}${e.slice(8, 12)}${e.slice(12, 16)}`.trim();
}, B = (r) => {
  const e = Math.floor(r / 60), t = r % 60;
  return `${String(e).padStart(2, "0")}:${String(t).padStart(2, "0")}`;
}, $ = (r) => {
  r = r.replace(/\D/g, "");
  const e = {
    Visa: /^4/,
    MasterCard: /^5[1-5]|^2(2[2-9]|[3-6]|7[01])/,
    "American Express": /^3[47]/,
    Discover: /^6(?:011|5|4[4-9]|22)/,
    UnionPay: /^62/,
    Verve: /^506099|^5061[0-8]|^50619|^6500[02]|^5078[6-9]|^65003[1-3]/
  };
  for (const [t, n] of Object.entries(e))
    if (n.test(r))
      return t;
  return "Unknown";
}, _ = (r, e) => {
  const t = document.createElement("div");
  t.classList.add("toast", e);
  const n = document.createElement("span");
  n.textContent = r, t.appendChild(n);
  const A = document.createElement("span");
  return A.textContent = "×", A.classList.add("close-btn"), A.onclick = () => F(t), t.appendChild(A), t;
}, h = (r, e, t = 3e3) => {
  const n = document.getElementById("toast-container");
  if (n) {
    const A = _(r, e);
    n.appendChild(A), A.offsetHeight, A.classList.add("show"), setTimeout(() => F(A), t);
  }
}, F = (r) => {
  r.classList.remove("show"), r.addEventListener("transitionend", () => {
    r.parentElement && r.parentElement.removeChild(r);
  });
}, G = "data:image/gif;base64,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", E = [
  {
    label: "Pay with Card",
    icon: `<svg width="23" height="19" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path class="group-hover:fill-white" d="M12.7499 6.99996H14.2499C14.6639 6.99996 14.9999 6.66398 14.9999 6.24998C14.9999 5.92756 14.7936 5.65819 14.5079 5.55259L17.78 2.28048C18.0733 1.98718 18.0733 1.51328 17.78 1.21997C17.4867 0.926671 17.0128 0.926679 16.7195 1.21997L13.4474 4.49209C13.3417 4.20633 13.0724 4.00011 12.75 4.00011C12.336 4.00011 12 4.33609 12 4.75008V6.25003C12 6.66402 12.3359 6.99996 12.7499 6.99996Z" fill="#9E9BA1"/>
<path class="group-hover:fill-white" fill-rule="evenodd" clip-rule="evenodd" d="M22.0999 10.6729C22.0999 10.3565 21.8534 10.1001 21.5492 10.1001H10.6507C10.3465 10.1001 10.0999 10.3565 10.0999 10.6729V11.883H22.0999V13.0715H10.0999V17.5273C10.0999 17.8437 10.3465 18.1001 10.6507 18.1001H21.5492C21.8534 18.1001 22.0999 17.8437 22.0999 17.5273V10.6729ZM11.5285 15.4487C11.3707 15.4487 11.2428 15.5817 11.2428 15.7458V16.3401C11.2428 16.5042 11.3707 16.6372 11.5285 16.6372H12.0999C12.2577 16.6372 12.3856 16.5042 12.3856 16.3401V15.7458C12.3856 15.5817 12.2577 15.4487 12.0999 15.4487H11.5285Z" fill="#9E9BA1"/>
<path class="group-hover:fill-white" d="M6.88262 0.261719C7.86089 0.261719 8.74721 0.655845 9.38178 1.37154C10.0242 2.09609 10.3372 3.07136 10.2632 4.11714C10.1161 6.19882 8.6021 7.89216 6.88262 7.89216C5.16315 7.89216 3.6465 6.19848 3.50172 4.11645C3.42867 3.06114 3.73976 2.08383 4.37825 1.36473C5.00989 0.65346 5.89914 0.261719 6.88262 0.261719Z" fill="#9E9BA1"/>
<path class="group-hover:fill-white" d="M0.70806 15.4224C0.844564 15.4904 0.993346 15.5246 1.14358 15.5225H9.09995V10.6C9.09995 10.0621 9.38312 9.59027 9.80853 9.32553C8.90234 8.94337 7.90107 8.73999 6.88256 8.73999C5.32293 8.73999 3.80373 9.21653 2.60441 10.0824C1.25445 11.0577 0.395559 12.4471 0.120348 14.101C0.0570892 14.4801 0.142522 14.8549 0.354473 15.1293C0.450765 15.2543 0.571556 15.3544 0.70806 15.4224Z" fill="#9E9BA1"/>
</svg>`,
    key: "card"
  },
  {
    label: "Pay with Transfer",
    icon: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path class="group-hover:fill-white" d="M17.0141 7.64786H0.985866C0.44523 7.64786 0 8.05497 0 8.54931V17.0986C0 17.5929 0.44523 18 0.985866 18H17.0141C17.5548 18 18 17.5929 18 17.0986V8.54931C18 8.05497 17.5548 7.64786 17.0141 7.64786ZM16.6007 15.0049C15.6466 15.1794 14.8834 15.8482 14.7244 16.7206H3.30742C3.11661 15.8482 2.38516 15.1503 1.4311 15.0049V10.643C2.38516 10.4685 3.14841 9.79972 3.30742 8.92734H14.7244C14.9152 9.79972 15.6466 10.4976 16.6007 10.643V15.0049Z" fill="#9E9BA1"/>
<path class="group-hover:fill-white" d="M3.23733 11.9998C2.83133 11.9998 2.51233 12.3196 2.51233 12.7267C2.51233 13.1338 2.83133 13.4537 3.23733 13.4537C3.64333 13.4537 3.96233 13.1338 3.96233 12.7267C3.96233 12.3196 3.64333 11.9998 3.23733 11.9998Z" fill="#9E9BA1"/>
<path class="group-hover:fill-white" d="M14.6216 12C14.2161 12 13.8975 12.3198 13.8975 12.7269C13.8975 13.1341 14.2161 13.4539 14.6216 13.4539C15.0271 13.4539 15.3458 13.1341 15.3458 12.7269C15.3747 12.3198 15.0271 12 14.6216 12Z" fill="#9E9BA1"/>
<path class="group-hover:fill-white" d="M8.99644 9.99997C7.3184 9.99997 5.99994 11.32 5.99994 13C5.99994 14.68 7.3184 16 8.99644 16C10.6745 16 11.9929 14.68 11.9929 13C12.1128 11.32 10.6745 9.99997 8.99644 9.99997Z" fill="#9E9BA1"/>
<path class="group-hover:fill-white" d="M12.0212 6.19386C12.212 6.39741 12.5618 6.39741 12.7526 6.19386L14.9152 3.83845C15.1696 3.54766 14.947 3.11147 14.5336 3.11147H13.4841V0.436187C13.4841 0.174475 13.2615 0 13.007 0H11.8304C11.5442 0 11.3533 0.203554 11.3533 0.436187V3.11147H10.3039C9.89044 3.11147 9.66783 3.54766 9.92224 3.83845L12.0212 6.19386Z" fill="#9E9BA1"/>
<path class="group-hover:fill-white" d="M5.24738 6.19386C5.43819 6.39741 5.78802 6.39741 5.97883 6.19386L8.14137 3.83845C8.39579 3.54766 8.17318 3.11147 7.75975 3.11147H6.71028V0.436187C6.71028 0.174475 6.48766 0 6.23325 0H5.05657C4.77035 0 4.57954 0.203554 4.57954 0.436187V3.11147H3.53007C3.11664 3.11147 2.89402 3.54766 3.14844 3.83845L5.24738 6.19386Z" fill="#9E9BA1"/>
</svg>
`,
    key: "transfer"
  },
  {
    label: "Pay with USSD",
    icon: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path class="group-hover:fill-white" d="M17 10.994H12.7L13.43 7.00603H17C17.2652 7.00603 17.5196 6.90099 17.7071 6.71402C17.8946 6.52705 18 6.27346 18 6.00905C18 5.74463 17.8946 5.49104 17.7071 5.30407C17.5196 5.1171 17.2652 5.01206 17 5.01206H13.79L14.48 1.21355C14.5073 1.08026 14.5069 0.942815 14.4789 0.809676C14.4509 0.676537 14.3958 0.550522 14.3171 0.439385C14.2385 0.328249 14.1378 0.234342 14.0213 0.163445C13.9049 0.0925489 13.7751 0.046162 13.64 0.02714C13.5057 -0.0047662 13.3662 -0.00858576 13.2303 0.0159217C13.0944 0.0404292 12.965 0.0927325 12.8504 0.169536C12.7358 0.24634 12.6384 0.345978 12.5643 0.462174C12.4902 0.578369 12.4411 0.708602 12.42 0.844667L11.67 5.01206H7.79L8.48 1.21355C8.50727 1.08026 8.50688 0.942815 8.47887 0.809676C8.45086 0.676537 8.39582 0.550522 8.31714 0.439385C8.23845 0.328249 8.13778 0.234342 8.02133 0.163445C7.90488 0.0925489 7.77511 0.046162 7.64 0.02714C7.50566 -0.0047662 7.36615 -0.00858576 7.23026 0.0159217C7.09437 0.0404292 6.96504 0.0927325 6.85042 0.169536C6.73581 0.24634 6.63839 0.345978 6.56431 0.462174C6.49024 0.578369 6.4411 0.708602 6.42 0.844667L5.67 5.01206H1C0.734784 5.01206 0.48043 5.1171 0.292893 5.30407C0.105357 5.49104 0 5.74463 0 6.00905C0 6.27346 0.105357 6.52705 0.292893 6.71402C0.48043 6.90099 0.734784 7.00603 1 7.00603H5.3L4.57 10.994H1C0.734784 10.994 0.48043 11.099 0.292893 11.286C0.105357 11.4729 0 11.7265 0 11.991C0 12.2554 0.105357 12.509 0.292893 12.6959C0.48043 12.8829 0.734784 12.9879 1 12.9879H4.21L3.52 16.7864C3.49273 16.9197 3.49312 17.0572 3.52113 17.1903C3.54914 17.3235 3.60418 17.4495 3.68286 17.5606C3.76155 17.6718 3.86222 17.7657 3.97867 17.8366C4.09512 17.9075 4.22489 17.9538 4.36 17.9729C4.49434 18.0048 4.63385 18.0086 4.76974 17.9841C4.90563 17.9596 5.03496 17.9073 5.14958 17.8305C5.26419 17.7537 5.36161 17.654 5.43569 17.5378C5.50976 17.4216 5.5589 17.2914 5.58 17.1553L6.33 12.9879H10.21L9.52 16.7864C9.49273 16.9197 9.49312 17.0572 9.52113 17.1903C9.54914 17.3235 9.60418 17.4495 9.68286 17.5606C9.76155 17.6718 9.86222 17.7657 9.97867 17.8366C10.0951 17.9075 10.2249 17.9538 10.36 17.9729C10.4943 18.0048 10.6338 18.0086 10.7697 17.9841C10.9056 17.9596 11.035 17.9073 11.1496 17.8305C11.2642 17.7537 11.3616 17.654 11.4357 17.5378C11.5098 17.4216 11.5589 17.2914 11.58 17.1553L12.33 12.9879H17C17.2652 12.9879 17.5196 12.8829 17.7071 12.6959C17.8946 12.509 18 12.2554 18 11.991C18 11.7265 17.8946 11.4729 17.7071 11.286C17.5196 11.099 17.2652 10.994 17 10.994ZM6.7 10.994L7.43 7.00603H11.3L10.57 10.994H6.7Z" fill="#9E9BA1"/>
</svg>
`,
    key: "ussd"
  }
], t1 = [
  {
    name: "First City Monument Bank",
    code: "*329#"
  },
  {
    name: "First Bank",
    code: "*268#"
  }
], u = [
  {
    name: "MasterCard",
    icon: `<svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.3295 1.73883H8.91364V12.2617H15.3295V1.73883Z" fill="#FF5F00"/>
<path d="M9.32119 6.99988C9.32018 5.98645 9.5718 4.98609 10.057 4.07454C10.5422 3.16299 11.2483 2.36413 12.1218 1.73845C11.0401 0.962455 9.74099 0.479876 8.37301 0.345869C7.00503 0.211862 5.62333 0.43183 4.38585 0.98064C3.14837 1.52945 2.10503 2.38496 1.37509 3.44937C0.645144 4.51379 0.258057 5.74417 0.258057 6.99988C0.258057 8.25559 0.645144 9.48597 1.37509 10.5504C2.10503 11.6148 3.14837 12.4703 4.38585 13.0191C5.62333 13.5679 7.00503 13.7879 8.37301 13.6539C9.74099 13.5199 11.0401 13.0373 12.1218 12.2613C11.2483 11.6356 10.5422 10.8368 10.057 9.92521C9.57181 9.01366 9.32019 8.0133 9.32119 6.99988Z" fill="#EB001B"/>
<path d="M23.9852 6.99994C23.9852 8.25563 23.5982 9.48601 22.8683 10.5504C22.1384 11.6148 21.0951 12.4703 19.8576 13.0192C18.6201 13.568 17.2385 13.788 15.8705 13.654C14.5025 13.5199 13.2035 13.0374 12.1218 12.2614C12.9945 11.6351 13.7001 10.8361 14.1852 9.92466C14.6703 9.01325 14.9224 8.01321 14.9224 6.99994C14.9224 5.98667 14.6703 4.98663 14.1852 4.07522C13.7001 3.16381 12.9945 2.36483 12.1218 1.73851C13.2035 0.962513 14.5025 0.479933 15.8705 0.345928C17.2385 0.211923 18.6201 0.431901 19.8576 0.980717C21.0951 1.52953 22.1384 2.38504 22.8683 3.44946C23.5982 4.51387 23.9852 5.74425 23.9852 6.99994Z" fill="#F79E1B"/>
<path d="M23.2856 11.1474V10.9317H23.3808V10.8878H23.1384V10.9317H23.2336V11.1474H23.2856ZM23.7562 11.1474V10.8874H23.6819L23.5964 11.0662L23.5109 10.8874H23.4366V11.1474H23.4891V10.9513L23.5692 11.1203H23.6236L23.7038 10.9508V11.1474H23.7562Z" fill="#F79E1B"/>
</svg>
`
  },
  {
    name: "American Express",
    icon: `<svg width="25" height="14" viewBox="0 0 25 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.2104 0.249756H2.39723C1.59259 0.249756 0.940308 0.792175 0.940308 1.46128V12.5381C0.940308 13.2072 1.59259 13.7496 2.39723 13.7496H23.2104C24.0151 13.7496 24.6673 13.2072 24.6673 12.5381V1.46128C24.6673 0.792175 24.0151 0.249756 23.2104 0.249756Z" fill="#006FCF" stroke="#F3F3F3" stroke-width="0.457968"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.6704 10.0782V7.22787H9.55152L9.96791 7.65L10.3981 7.22787H24.4855V9.88167C24.4855 9.88167 24.1171 10.0754 23.691 10.0782H15.8905L15.421 9.62895V10.0782H13.8826V9.31125C13.8826 9.31125 13.6724 9.41831 13.2181 9.41831H12.6945V10.0782H10.3651L9.94934 9.64708L9.52716 10.0782H5.6704ZM1.14844 5.07956L2.02166 3.49289H3.5318L4.02736 4.38169V3.49289H5.90459L6.19963 4.13526L6.48561 3.49289H14.9125V3.81583C14.9125 3.81583 15.3555 3.49289 16.0835 3.49289L18.8178 3.50034L19.3047 4.3775V3.49289H20.8757L21.3081 3.99673V3.49289H22.8935V6.34329H21.3081L20.8938 5.8378V6.34329H18.5857L18.3535 5.89395H17.733L17.5047 6.34329H15.9394C15.3129 6.34329 14.9125 6.0269 14.9125 6.0269V6.34329H12.5524L12.084 5.89395V6.34329H3.30808L3.07613 5.89395H2.45761L2.22729 6.34329H1.14844V5.07956ZM1.15294 5.97855L2.33072 3.84429H3.22363L4.40029 5.97855H3.6166L3.40041 5.55119H2.13706L1.91974 5.97855H1.15294ZM3.15157 5.08783L2.76648 4.34098L2.38027 5.08783H3.15157ZM4.48136 5.9782V3.84391L5.57103 3.84709L6.2048 5.22311L6.82341 3.84391H7.90436V5.9782H7.21977V4.40557L6.49406 5.9782H5.89368L5.16597 4.40557V5.9782H4.48136ZM8.37278 5.9782V3.84391H10.6067V4.32132H9.06457V4.6864H10.5707V5.13571H9.06457V5.51484H10.6067V5.9782H8.37278ZM11.0031 5.97855V3.84429H12.5266C13.0313 3.84429 13.4836 4.08756 13.4836 4.53669C13.4836 4.92064 13.1023 5.16793 12.7326 5.19223L13.6334 5.97855H12.7968L11.9759 5.22034H11.6877V5.97855H11.0031ZM12.4702 4.3217H11.6877V4.771H12.4804C12.6176 4.771 12.7945 4.68813 12.7945 4.54635C12.7945 4.43614 12.658 4.3217 12.4702 4.3217ZM14.4621 5.9782H13.7631V3.84391H14.4621V5.9782ZM16.1196 5.9782H15.9687C15.2386 5.9782 14.7954 5.52994 14.7954 4.91985C14.7954 4.29466 15.2337 3.84391 16.1556 3.84391H16.9123V4.34943H16.1279C15.7537 4.34943 15.489 4.57705 15.489 4.92511C15.489 5.33845 15.7916 5.51204 16.2276 5.51204H16.4078L16.1196 5.9782ZM16.4314 5.97855L17.6092 3.84429H18.5021L19.6788 5.97855H18.8951L18.6789 5.55119H17.4156L17.1982 5.97855H16.4314ZM18.4301 5.08783L18.045 4.34098L17.6588 5.08783H18.4301ZM19.7588 5.9782V3.84391H20.6291L21.7405 5.18486V3.84391H22.4251V5.9782H21.5828L20.4434 4.60215V5.9782H19.7588ZM6.13882 9.7132V7.5789H8.37278V8.05631H6.83061V8.4214H8.33673V8.8707H6.83061V9.24984H8.37278V9.7132H6.13882ZM17.0852 9.7132V7.5789H19.3191V8.05631H17.777V8.4214H19.2759V8.8707H17.777V9.24984H19.3191V9.7132H17.0852ZM8.45949 9.7132L9.54719 8.65921L8.43356 7.5789H9.2961L9.95929 8.24673L10.6247 7.5789H11.4535L10.3545 8.64605L11.4442 9.7132H10.5819L9.93789 9.05589L9.30958 9.7132H8.45949ZM11.5255 9.71354V7.57929H13.0377C13.6582 7.57929 14.0207 7.89096 14.0207 8.29713C14.0207 8.78745 13.5586 9.03956 12.9488 9.03956H12.2281V9.71354H11.5255ZM12.9871 8.06192H12.2281V8.55339H12.9848C13.1848 8.55339 13.3249 8.4501 13.3249 8.30766C13.3249 8.15604 13.184 8.06192 12.9871 8.06192ZM14.318 9.7132V7.5789H15.8414C16.3462 7.5789 16.7985 7.82218 16.7985 8.27131C16.7985 8.65526 16.4172 8.90255 16.0475 8.92688L16.9483 9.7132H16.1117L15.2908 8.95496H15.0026V9.7132H14.318ZM15.7852 8.05631H15.0026V8.50562H15.7953C15.9325 8.50562 16.1094 8.42278 16.1094 8.28097C16.1094 8.17075 15.9729 8.05631 15.7852 8.05631ZM19.6363 9.7132V9.24984H21.0064C21.2091 9.24984 21.2969 9.16445 21.2969 9.07081C21.2969 8.98109 21.2094 8.89036 21.0064 8.89036H20.3872C19.8491 8.89036 19.5493 8.6348 19.5493 8.25113C19.5493 7.90892 19.8238 7.5789 20.6235 7.5789H21.9567L21.6684 8.05912H20.5154C20.295 8.05912 20.2271 8.14926 20.2271 8.23534C20.2271 8.32382 20.311 8.4214 20.4794 8.4214H21.1279C21.7279 8.4214 21.9882 8.68662 21.9882 9.03395C21.9882 9.40734 21.6981 9.7132 21.0953 9.7132H19.6363ZM22.0486 9.7132V9.24984H23.4186C23.6214 9.24984 23.7092 9.16445 23.7092 9.07081C23.7092 8.98109 23.6217 8.89036 23.4186 8.89036H22.7995C22.2613 8.89036 21.9616 8.6348 21.9616 8.25113C21.9616 7.90892 22.2361 7.5789 23.0358 7.5789H24.369L24.0808 8.05912H22.9277C22.7073 8.05912 22.6395 8.14926 22.6395 8.23534C22.6395 8.32382 22.7233 8.4214 22.8917 8.4214H23.5403C24.1402 8.4214 24.4005 8.68662 24.4005 9.03395C24.4005 9.40734 24.1104 9.7132 23.5076 9.7132H22.0486Z" fill="white"/>
</svg>
`
  },
  {
    name: "UnionPay",
    icon: `<svg width="30" height="22" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_6292_30183)">
<path d="M29.4327 4.56458H0.230164V17.4343H29.4327V4.56458Z" fill="white"/>
<path d="M7.61537 4.61139H13.534C14.3599 4.61139 14.876 5.19639 14.6824 5.91182L11.9252 16.1627C11.7317 16.8781 10.9015 17.4631 10.0756 17.4631H4.15704C3.33112 17.4631 2.815 16.8781 3.00857 16.1627L5.76569 5.91182C5.95926 5.19268 6.78513 4.61139 7.61101 4.61139H7.61537Z" fill="#D10429"/>
<path d="M13.0164 4.61108H19.8257C20.6516 4.61108 20.2774 5.19608 20.0838 5.91152L17.3266 16.1624C17.133 16.8778 17.1932 17.4628 16.3674 17.4628H9.55845C8.72829 17.4628 8.2164 16.8778 8.41426 16.1624L11.1715 5.91152C11.365 5.19237 12.1909 4.61108 13.0211 4.61108H13.0168H13.0164Z" fill="#022E64"/>
<path d="M19.5868 4.61108H25.5058C26.3317 4.61108 26.8478 5.19608 26.6542 5.91152L23.897 16.1624C23.7034 16.8778 22.8732 17.4628 22.0474 17.4628H16.1288C15.2986 17.4628 14.7868 16.8778 14.9804 16.1624L17.7375 5.91152C17.9311 5.19237 18.757 4.61108 19.5828 4.61108H19.5872H19.5868Z" fill="#076F74"/>
<path d="M18.593 14.2754H19.1522L19.3113 13.8096H18.7564L18.593 14.2754ZM19.0403 12.9935L18.8468 13.5451C18.8468 13.5451 19.0575 13.4519 19.1737 13.4221C19.2898 13.3997 19.4619 13.3811 19.4619 13.3811L19.5952 12.9973H19.0361L19.0403 12.9935ZM19.3199 12.2036L19.135 12.7327C19.135 12.7327 19.3414 12.6507 19.4576 12.6247C19.5737 12.5986 19.7458 12.5912 19.7458 12.5912L19.8791 12.2074H19.3242L19.3199 12.2036ZM20.5545 12.2036L19.8318 14.2717H20.0254L19.8748 14.7002H19.6812L19.6339 14.8306H18.9456L18.993 14.7002H17.5994L17.737 14.3052H17.8789L18.6103 12.2037L18.7565 11.7789H19.4576L19.3845 11.9912C19.3845 11.9912 19.5694 11.8758 19.7501 11.8347C19.9265 11.7938 20.9416 11.7789 20.9416 11.7789L20.7911 12.2H20.5502L20.5545 12.2036Z" fill="#FEFEFE"/>
<path d="M20.8412 11.7783H21.5896L21.5982 12.0205C21.5939 12.0615 21.6326 12.0801 21.7229 12.0801H21.8735L21.7359 12.4789H21.3315C20.9831 12.5012 20.8497 12.3708 20.8583 12.2255L20.8454 11.782L20.8412 11.7783ZM20.9333 13.6753H20.2193L20.3396 13.3213H21.1569L21.273 12.9971H20.4687L20.6063 12.5984H22.8431L22.7054 12.9971H21.9527L21.8365 13.3213H22.5893L22.4645 13.6753H21.6515L21.5053 13.8243H21.8365L21.9182 14.2715C21.9268 14.3162 21.9268 14.346 21.944 14.3646C21.9612 14.3796 22.0602 14.387 22.1161 14.387H22.215L22.0602 14.823H21.8064C21.7677 14.823 21.7074 14.8193 21.6257 14.8193C21.5483 14.8118 21.4967 14.7745 21.4451 14.7522C21.3977 14.7336 21.3289 14.6851 21.3117 14.5994L21.2343 14.1523L20.8644 14.592C20.7482 14.7298 20.5892 14.8379 20.3181 14.8379H19.8019L19.9396 14.4503H20.1375C20.1934 14.4503 20.245 14.4318 20.2838 14.4131C20.3225 14.3982 20.3568 14.3833 20.3913 14.3349L20.9333 13.6753ZM13.123 12.7054H15.0113L14.8737 13.0967H14.1209L14.0048 13.4282H14.7791L14.6372 13.8307H13.8672L13.6779 14.371C13.6564 14.4306 13.8629 14.4381 13.936 14.4381L14.3231 14.3934L14.1682 14.8405H13.2994C13.2306 14.8405 13.179 14.833 13.1015 14.8181C13.0283 14.8032 12.994 14.7734 12.9639 14.7325C12.9337 14.6877 12.8821 14.6542 12.9165 14.5573L13.166 13.8419H12.7358L12.8778 13.432H13.3079L13.424 13.1004H12.994L13.1316 12.7091L13.123 12.7054ZM14.4277 11.9981H15.2019L15.06 12.4043H14.0018L13.8857 12.49C13.8341 12.531 13.8212 12.5161 13.7566 12.5459C13.6965 12.5719 13.5717 12.6241 13.4082 12.6241H13.0684L13.206 12.2329H13.3093C13.3953 12.2329 13.4556 12.2254 13.4856 12.2105C13.5201 12.1919 13.5588 12.1509 13.5975 12.0838L13.791 11.7783H14.561L14.4277 12.0018V11.9981ZM15.8869 12.6688C15.8869 12.6688 16.0977 12.5012 16.459 12.4491C16.5407 12.4341 17.0569 12.4415 17.0569 12.4415L17.1344 12.218H16.0461L15.8869 12.6726L15.8869 12.6688ZM16.9106 12.8402H15.831L15.7665 13.0303H16.7042C16.816 13.0191 16.8375 13.034 16.8461 13.0266L16.9149 12.8402H16.9106ZM15.5084 11.782H16.1665L16.0719 12.0689C16.0719 12.0689 16.2784 11.9236 16.4246 11.8714C16.5709 11.8267 16.8978 11.782 16.8978 11.782L17.9645 11.7783L17.5989 12.8291C17.5387 13.0079 17.4656 13.1235 17.4225 13.1794C17.3839 13.2315 17.3365 13.2799 17.2419 13.3247C17.1516 13.3657 17.0698 13.3917 16.9924 13.3955C16.9236 13.3992 16.8117 13.4029 16.6655 13.4029H15.6375L15.3493 14.2339C15.3235 14.3158 15.3106 14.3568 15.3278 14.3791C15.3407 14.3978 15.3794 14.4201 15.4267 14.4201L15.8783 14.3829L15.7234 14.8375H15.2159C15.0524 14.8375 14.9363 14.8338 14.8546 14.83C14.7772 14.8226 14.6954 14.83 14.6395 14.7928C14.5922 14.7555 14.5191 14.7071 14.5233 14.6586C14.5277 14.6139 14.5492 14.5393 14.5836 14.435L15.5084 11.782Z" fill="#FEFEFE"/>
<path d="M17.4261 13.4544L17.3659 13.7078C17.3401 13.786 17.3186 13.8456 17.2497 13.8978C17.1766 13.95 17.0949 14.0058 16.8971 14.0058L16.5315 14.0208L16.5271 14.3039C16.5229 14.3821 16.5487 14.3747 16.5616 14.3896C16.5788 14.4045 16.5916 14.4082 16.6089 14.4157L16.725 14.4082L17.0735 14.3933L16.9272 14.8107H16.5271C16.2476 14.8107 16.0368 14.8032 15.9722 14.7585C15.9034 14.7212 15.8948 14.6765 15.8948 14.5945L15.9206 13.4841H16.5616L16.5529 13.7114H16.7078C16.7594 13.7114 16.7982 13.7077 16.8196 13.6965C16.8411 13.6853 16.8541 13.6667 16.8627 13.6406L16.9272 13.4618H17.4304L17.4261 13.4544ZM8.30775 7.89182C8.28626 7.98124 7.87334 9.62449 7.87334 9.62449C7.78298 9.95611 7.71847 10.1946 7.50341 10.3474C7.37867 10.4368 7.2324 10.4778 7.06468 10.4778C6.79367 10.4778 6.63883 10.3623 6.61302 10.1425L6.6087 10.0679C6.6087 10.0679 6.69042 9.62449 6.69042 9.62078C6.69042 9.62078 7.12058 8.12284 7.19802 7.92533C7.2023 7.91417 7.2023 7.90672 7.2023 7.90298C6.3635 7.91046 6.21299 7.90298 6.20439 7.89182C6.20006 7.90672 6.17857 7.99986 6.17857 7.99986L5.7398 9.68789L5.70106 9.82945L5.62799 10.299C5.62799 10.4368 5.65808 10.5523 5.72264 10.6455C5.92477 10.9511 6.49689 10.9958 6.81948 10.9958C7.23672 10.9958 7.62815 10.9175 7.89051 10.7797C8.35077 10.5449 8.47119 10.176 8.57444 9.85184L8.62606 9.68415C8.62606 9.68415 9.06912 8.13033 9.14655 7.92911C9.15083 7.91792 9.15083 7.91046 9.15516 7.90676C8.54434 7.91046 8.36798 7.90676 8.30775 7.89556V7.89182ZM10.7614 10.9806C10.4646 10.9768 10.357 10.9768 10.0086 10.9917L9.9957 10.9694C10.0258 10.8539 10.0602 10.7421 10.086 10.6266L10.129 10.4701C10.1936 10.2279 10.2538 9.94095 10.2624 9.85527C10.271 9.8031 10.2882 9.6727 10.1161 9.6727C10.043 9.6727 9.96989 9.70247 9.8925 9.73228C9.84943 9.86272 9.76771 10.2279 9.72469 10.3918C9.63865 10.7421 9.63437 10.7831 9.59567 10.9545L9.56986 10.9768C9.26448 10.9731 9.15694 10.9731 8.80421 10.988L8.78701 10.9619C8.84724 10.7533 8.90314 10.5446 8.95909 10.3359C9.10532 9.77325 9.14406 9.55717 9.18271 9.27023L9.21285 9.25533C9.55698 9.21436 9.63869 9.20316 10.0129 9.13983L10.043 9.16964L9.9871 9.3485C10.0516 9.31498 10.1118 9.28143 10.1764 9.25533C10.3527 9.1808 10.5463 9.15845 10.6538 9.15845C10.8173 9.15845 10.9979 9.19945 11.0711 9.36341C11.1399 9.50871 11.0968 9.68757 11.0022 10.0416L10.9549 10.2204C10.8603 10.6154 10.8431 10.6862 10.7914 10.9545L10.7571 10.9768L10.7614 10.9806ZM11.9692 10.9815C11.7885 10.9815 11.6724 10.9778 11.5606 10.9815C11.4487 10.9815 11.3412 10.989 11.1734 10.9927L11.1648 10.9815L11.1562 10.9666C11.2035 10.8176 11.2251 10.7654 11.2509 10.7133C11.2724 10.6611 11.2939 10.6089 11.3369 10.4562C11.3885 10.2587 11.4229 10.1208 11.4444 9.99783C11.4702 9.8823 11.4831 9.78174 11.5004 9.66621L11.5132 9.65876L11.5261 9.6476C11.7068 9.62524 11.8187 9.61033 11.9348 9.59543C12.0509 9.58052 12.1714 9.56191 12.3563 9.5321L12.3649 9.54701L12.3692 9.56191L12.266 9.93079C12.2316 10.0538 12.1972 10.1767 12.1671 10.2997C12.1025 10.5605 12.0725 10.6574 12.0596 10.7282C12.0424 10.7953 12.038 10.8288 12.0122 10.963L11.995 10.9741L11.9778 10.9853L11.9692 10.9815ZM13.8788 10.066C13.8659 10.1331 13.7971 10.3828 13.7068 10.4871C13.6422 10.5654 13.5691 10.6138 13.483 10.6138C13.4573 10.6138 13.311 10.6138 13.3067 10.4238C13.3067 10.3306 13.3282 10.2337 13.354 10.1294C13.4315 9.82756 13.5261 9.57792 13.7627 9.57792C13.9476 9.57792 13.9605 9.76423 13.8788 10.066ZM14.6573 10.0958C14.7605 9.70087 14.6789 9.51456 14.5799 9.40277C14.4251 9.23137 14.1498 9.17549 13.8659 9.17549C13.6938 9.17549 13.2895 9.19039 12.9712 9.44378C12.7433 9.62634 12.6357 9.87602 12.5755 10.1145C12.5109 10.3567 12.4378 10.7927 12.9024 10.9566C13.0443 11.0088 13.2508 11.0237 13.3841 11.0237C13.724 11.0237 14.0724 10.9417 14.3347 10.7032C14.5369 10.5095 14.6272 10.2188 14.6616 10.0958H14.6573ZM21.9077 11.0258C21.5464 11.0221 21.4431 11.0221 21.1119 11.037L21.0904 11.0146C21.1807 10.7202 21.271 10.4222 21.3527 10.1241C21.4559 9.73653 21.4818 9.57257 21.5162 9.34529L21.542 9.32668C21.899 9.28196 21.998 9.2708 22.3722 9.21118L22.3808 9.23725C22.312 9.48318 22.2474 9.7254 22.1786 9.96759C22.041 10.4781 21.9936 10.7389 21.9421 11.0072L21.9077 11.0296V11.0258Z" fill="#FEFEFE"/>
<path d="M21.3881 10.1159C21.3709 10.1793 21.3021 10.4326 21.2118 10.537C21.1515 10.6115 21.0053 10.66 20.9236 10.66C20.8978 10.66 20.7558 10.66 20.7472 10.4736C20.7472 10.3805 20.7687 10.2836 20.7945 10.1793C20.872 9.8849 20.9666 9.63522 21.2032 9.63522C21.3881 9.63522 21.4698 9.81779 21.3881 10.1196V10.1159ZM22.0979 10.1457C22.201 9.75075 21.7795 10.1122 21.715 9.98178C21.6118 9.77682 21.6763 9.36694 21.2634 9.22908C21.1042 9.17317 20.73 9.24399 20.4117 9.49737C20.188 9.67623 20.0762 9.92587 20.016 10.1643C19.9514 10.4028 19.8783 10.8426 20.3385 10.9953C20.4849 11.0512 20.6182 11.0661 20.7515 11.0586C21.2161 11.0363 21.5688 10.4289 21.8312 10.1904C22.0333 10.0004 22.0677 10.2612 22.0979 10.1457ZM16.6968 10.9806C16.4 10.9768 16.2967 10.9768 15.9483 10.9917L15.9354 10.9694C15.9655 10.8539 16 10.7421 16.03 10.6266L16.0687 10.4701C16.1333 10.2279 16.1978 9.94095 16.2021 9.85527C16.2107 9.8031 16.2279 9.6727 16.0601 9.6727C15.987 9.6727 15.9096 9.70247 15.8365 9.73228C15.7977 9.86272 15.7117 10.2279 15.6687 10.3918C15.587 10.7421 15.5784 10.7831 15.5397 10.9545L15.5138 10.9768C15.2085 10.9731 15.1009 10.9731 14.7482 10.988L14.731 10.9619C14.7912 10.7533 14.8471 10.5446 14.9031 10.3359C15.0493 9.77325 15.0838 9.55717 15.1267 9.27023L15.1525 9.25533C15.4967 9.21436 15.5827 9.20316 15.9526 9.13983L15.9828 9.16964L15.9311 9.3485C15.9914 9.31498 16.0559 9.28143 16.1161 9.25533C16.2925 9.1808 16.486 9.15845 16.5935 9.15845C16.757 9.15845 16.9334 9.19945 17.0107 9.36341C17.0796 9.50871 17.0323 9.68757 16.9376 10.0416L16.8903 10.2204C16.7914 10.6154 16.7785 10.6862 16.7268 10.9545L16.6925 10.9768L16.6968 10.9806ZM19.2739 7.89552L19.0244 7.89927C18.3792 7.90672 18.1211 7.90298 18.0179 7.89182C18.0093 7.93282 17.9921 8.0036 17.9921 8.0036C17.9921 8.0036 17.7598 8.9277 17.7598 8.93141C17.7598 8.93141 17.2092 10.8989 17.1834 10.992C17.7469 10.9845 17.9749 10.9845 18.0738 10.9957C18.0954 10.9026 18.2244 10.3548 18.2287 10.3548C18.2287 10.3548 18.3405 9.9524 18.3449 9.93749C18.3449 9.93749 18.3792 9.89649 18.4136 9.87787H18.4652C18.9513 9.87787 19.4976 9.87787 19.9278 9.60588C20.2202 9.41957 20.4181 9.14008 20.5085 8.80472C20.5299 8.72274 20.5472 8.62586 20.5472 8.52527C20.5472 8.39484 20.5171 8.26818 20.431 8.16756C20.2116 7.90298 19.7771 7.89927 19.2739 7.89552ZM19.5965 8.86063C19.5449 9.06556 19.39 9.24071 19.1922 9.32268C19.0287 9.39346 18.8309 9.40092 18.6244 9.40092H18.4911L18.4997 9.3562C18.4997 9.3562 18.7449 8.4321 18.7449 8.43584L18.7534 8.38739L18.7577 8.35012L18.8567 8.35761C18.8567 8.35761 19.3642 8.39484 19.3728 8.39484C19.5706 8.46191 19.6567 8.63332 19.5965 8.86063ZM24.8841 9.16964L24.8541 9.13983C24.4884 9.20316 24.4196 9.21436 24.084 9.25536L24.0583 9.27768C24.0583 9.28143 24.054 9.28517 24.054 9.29259V9.28888C23.8045 9.7919 23.8088 9.68386 23.6067 10.0788C23.6067 10.0602 23.6067 10.049 23.6023 10.0304L23.5507 9.17335L23.5206 9.14354C23.1335 9.2069 23.1249 9.21807 22.7721 9.25907L22.7463 9.28143C22.742 9.29259 22.742 9.30379 22.742 9.31495L22.7463 9.31869C22.7894 9.51616 22.7807 9.47145 22.8238 9.78074C22.8453 9.9335 22.8711 10.0863 22.8926 10.2353C22.927 10.4887 22.9485 10.6117 22.9915 10.9955C22.7506 11.3383 22.6947 11.4687 22.4624 11.7705L22.4753 11.8003C22.8238 11.7892 22.9012 11.7892 23.1593 11.7892L23.2152 11.7332C23.4088 11.3719 24.8885 9.17339 24.8885 9.17339L24.8841 9.16964ZM12.3013 9.41646C12.4991 9.29723 12.5249 9.13327 12.3572 9.04759C12.1894 8.96187 11.8926 8.98797 11.6947 9.10721C11.4969 9.22274 11.4754 9.38665 11.6431 9.47608C11.8066 9.5581 12.1034 9.5357 12.3013 9.41646Z" fill="#FEFEFE"/>
<path d="M22.3316 11.5377L22.072 11.847C21.9906 11.9519 21.8357 12.0326 21.5955 12.0326L21.1809 12.0272L21.301 11.7475H21.3824C21.425 11.7475 21.456 11.7448 21.4792 11.7367C21.5025 11.7313 21.5142 11.7206 21.5335 11.7044L21.6885 11.535H22.3355L22.3316 11.5377Z" fill="#FEFEFE"/>
</g>
<defs>
<clipPath id="clip0_6292_30183">
<rect x="0.230164" y="0.961639" width="29.2025" height="20.0767" rx="1.82516" fill="white"/>
</clipPath>
</defs>
</svg>
`
  },
  {
    name: "Discover",
    icon: `<svg width="25" height="14" viewBox="0 0 25 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.28494 0.709717C1.36126 0.709717 0.612122 1.34368 0.612122 2.12549V12.1894C0.612122 12.9713 1.36101 13.6052 2.28494 13.6052H22.6663C23.59 13.6052 24.3392 12.9712 24.3392 12.1894V2.12549C24.3392 1.34352 23.5903 0.709717 22.6663 0.709717H2.28494Z" fill="#4D4D4D"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.5638 4.8775C10.8326 4.8775 11.058 4.92342 11.3324 5.03426V5.61985C11.0725 5.41746 10.8471 5.33276 10.5489 5.33276C9.96292 5.33276 9.50207 5.71923 9.50207 6.20918C9.50207 6.7259 9.94866 7.08937 10.578 7.08937C10.8613 7.08937 11.0825 7.00906 11.3324 6.80991V7.39582C11.0483 7.50238 10.818 7.54449 10.5489 7.54449C9.59747 7.54449 8.85815 6.96288 8.85815 6.21281C8.85815 5.47085 9.61715 4.8775 10.5638 4.8775ZM7.60966 4.89364C7.96088 4.89364 8.28223 4.98939 8.55092 5.17662L8.22397 5.51762C8.06123 5.37229 7.90731 5.31098 7.72011 5.31098C7.45081 5.31098 7.25469 5.43311 7.25469 5.59383C7.25469 5.73164 7.36478 5.80458 7.7397 5.91511C8.45045 6.12216 8.6611 6.30573 8.6611 6.71113C8.6611 7.20514 8.20554 7.54902 7.55627 7.54902C7.08082 7.54902 6.73513 7.39986 6.44724 7.06327L6.85085 6.75362C6.99473 6.97524 7.2348 7.09395 7.53285 7.09395C7.81158 7.09395 8.01794 6.94075 8.01794 6.73401C8.01794 6.62683 7.95543 6.53494 7.83062 6.46997C7.76778 6.43921 7.6433 6.39335 7.39867 6.32462C6.81185 6.15634 6.6105 5.97645 6.6105 5.6249C6.6105 5.20728 7.04288 4.89364 7.60966 4.89364ZM14.7498 4.93812H15.4323L16.2866 6.65216L17.1519 4.93812H17.8292L16.4453 7.55545H16.1091L14.7498 4.93812ZM2.66272 4.94203H3.57986C4.59319 4.94203 5.29959 5.46665 5.29959 6.21976C5.29959 6.5953 5.08349 6.95838 4.71803 7.19932C4.41055 7.40269 4.06018 7.49391 3.57505 7.49391H2.66272V4.94203ZM5.58708 4.94203H6.21189V7.49391H5.58708V4.94203ZM18.1117 4.94203H19.8837V5.37445H18.7361V5.94085H19.8415V6.37304H18.7361V7.06188H19.8837V7.49391H18.1118L18.1117 4.94203ZM20.2976 4.94203H21.224C21.9447 4.94203 22.3576 5.2177 22.3576 5.69547C22.3576 6.0862 22.0986 6.34256 21.628 6.41888L22.6363 7.49391H21.8679L21.0031 6.46876H20.9217V7.49391H20.2976V4.94203ZM20.9217 5.34398V6.1168H21.1042C21.5032 6.1168 21.7147 5.97879 21.7147 5.72227C21.7147 5.47394 21.5032 5.34398 21.1141 5.34398H20.9217ZM3.28711 5.37443V7.06188H3.45478C3.85853 7.06188 4.11354 7.00026 4.30986 6.85905C4.52593 6.70577 4.65591 6.46099 4.65591 6.21608C4.65591 5.97158 4.52593 5.73411 4.30986 5.58081C4.10347 5.43203 3.85853 5.37443 3.45478 5.37443H3.28711Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.2401 4.8594C14.1813 4.8594 14.9442 5.46634 14.9442 6.2161V6.21695C14.9442 6.96674 14.1813 7.57449 13.2401 7.57449C12.299 7.57449 11.536 6.96671 11.536 6.21695V6.2161C11.536 5.46631 12.299 4.85938 13.2401 4.85938L13.2401 4.8594ZM24.3386 8.13216C23.5462 8.60397 17.6135 11.9761 7.3418 13.6049H22.6658C23.5895 13.6049 24.3386 12.9709 24.3386 12.1891V8.13206L24.3386 8.13216Z" fill="#F47216"/>
</svg>
`
  },
  {
    name: "Verve",
    icon: `<svg width="28" height="14" viewBox="0 0 28 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.9689 0.709717H1.05166C0.648454 0.709717 0.321594 1.09842 0.321594 1.5779V12.6668C0.321594 13.1462 0.648454 13.5349 1.05166 13.5349H26.9689C27.3721 13.5349 27.6989 13.1462 27.6989 12.6668V1.5779C27.6989 1.09842 27.3721 0.709717 26.9689 0.709717Z" fill="#00425F"/>
<path d="M6.65498 11.5618C8.8222 11.5618 10.5791 9.47256 10.5791 6.89533C10.5791 4.31811 8.8222 2.22885 6.65498 2.22885C4.48777 2.22885 2.7309 4.31811 2.7309 6.89533C2.7309 9.47256 4.48777 11.5618 6.65498 11.5618Z" fill="#EE312A"/>
<path d="M6.65486 8.88663C5.77763 6.5219 5.13432 4.31293 5.13432 4.31293H3.78937C3.78937 4.31293 4.60798 7.14828 6.12852 10.6941H7.18121C8.70175 7.14828 9.52036 4.31293 9.52036 4.31293H8.17541C8.17541 4.31293 7.5321 6.5219 6.65486 8.88663Z" fill="white"/>
<path d="M25.4034 8.59042H22.7825C22.7825 8.59042 22.8408 9.63772 24.0056 9.63772C24.588 9.63772 25.1705 9.4281 25.1705 9.4281L25.287 10.545C25.287 10.545 24.7045 10.8242 23.8891 10.8242C22.7243 10.8242 21.676 10.1261 21.676 8.17158C21.676 6.63582 22.4913 5.65854 23.6562 5.65854C25.4034 5.65854 25.5199 7.75274 25.4034 8.59042ZM23.5979 6.63582C22.8408 6.63582 22.7825 7.6131 22.7825 7.6131H24.4133C24.4133 7.6131 24.3551 6.63582 23.5979 6.63582Z" fill="white"/>
<path d="M16.3543 6.94405L16.529 5.83304C16.529 5.83304 15.1799 5.34486 14.0833 6.24967V10.6936H15.248L15.2479 7.08292C15.7137 6.6663 16.3543 6.94405 16.3543 6.94405Z" fill="white"/>
<path d="M13.1748 8.59042H10.5539C10.5539 8.59042 10.6122 9.63772 11.777 9.63772C12.3594 9.63772 12.9418 9.4281 12.9418 9.4281L13.0583 10.545C13.0583 10.545 12.4759 10.8242 11.6605 10.8242C10.4957 10.8242 9.44733 10.1261 9.44733 8.17158C9.44733 6.63582 10.2627 5.65854 11.4276 5.65854C13.1748 5.65854 13.2913 7.75274 13.1748 8.59042ZM11.3693 6.63582C10.6122 6.63582 10.5539 7.6131 10.5539 7.6131H12.1847C12.1847 7.6131 12.1265 6.63582 11.3693 6.63582Z" fill="white"/>
<path d="M19.1937 9.02718C18.8306 7.97671 18.5377 6.89383 18.3176 5.7886L17.1495 5.78879C17.1495 5.78879 17.7336 8.47117 18.7266 10.6938H19.6608C20.6538 8.47117 21.2379 5.78928 21.2379 5.78928H20.0698C19.8497 6.89427 19.5568 7.97692 19.1937 9.02718Z" fill="white"/>
</svg>
`
  },
  {
    name: "Visa",
    icon: `<svg width="28" height="7" viewBox="0 0 28 7" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.0163 6.41102L11.366 0.60263H13.5249L12.1742 6.41102H10.0163ZM19.974 0.727841C19.5464 0.610166 18.8761 0.483887 18.0392 0.483887C15.9058 0.483887 14.4033 1.27168 14.3904 2.40075C14.3784 3.23536 15.4632 3.70099 16.2821 3.9788C17.1225 4.26358 17.4049 4.44511 17.4009 4.6993C17.3955 5.08867 16.7298 5.26646 16.1092 5.26646C15.2452 5.26646 14.7861 5.17842 14.0771 4.96165L13.7988 4.86934L13.4959 6.16958C14.0002 6.33179 14.9326 6.4722 15.9008 6.4795C18.1702 6.4795 19.6435 5.70069 19.6602 4.49495C19.6683 3.83418 19.0931 3.33141 17.8475 2.91682C17.0929 2.64812 16.6308 2.46881 16.6357 2.19673C16.6357 1.9553 17.0269 1.69713 17.8722 1.69713C18.578 1.68909 19.0895 1.80199 19.488 1.91966L19.6814 1.98669L19.974 0.727841ZM25.5296 0.602541H23.8614C23.3447 0.602541 22.9579 0.705974 22.731 1.08422L19.5247 6.40719H21.7917C21.7917 6.40719 22.1623 5.69149 22.2461 5.53433C22.4939 5.53433 24.6962 5.53682 25.011 5.53682C25.0756 5.74018 25.2737 6.40719 25.2737 6.40719H27.277L25.5296 0.602363V0.602541ZM22.8828 4.35325C23.0614 4.01859 23.743 2.72953 23.743 2.72953C23.7303 2.74499 23.9203 2.39324 24.0292 2.17516L24.1751 2.67595C24.1751 2.67595 24.5885 4.06244 24.6749 4.35316H22.8828V4.35325ZM8.18357 0.602541L6.06996 4.56361L5.8448 3.75867C5.45128 2.83074 4.22537 1.8254 2.85486 1.32209L4.78753 6.40176L7.07172 6.39989L10.4706 0.602481L8.18357 0.602452" fill="#0E4595"/>
<path d="M4.09771 0.602448H0.616461L0.588867 0.723297C3.29725 1.20409 5.08928 2.36597 5.83334 3.7622L5.07637 1.093C4.94572 0.725196 4.56669 0.615413 4.09779 0.602596" fill="#F2AE14"/>
</svg>
`
  }
];
class f {
  constructor(e, t, n, A, s, i) {
    o(this, "cardDetailsValues");
    o(this, "cardPin");
    o(this, "cardOtp");
    o(this, "contents");
    o(this, "container");
    o(this, "closeModal");
    o(this, "email");
    o(this, "token");
    o(this, "amount");
    o(this, "_currentStep");
    o(this, "activeRef");
    o(this, "creditCardTypes");
    o(this, "switchTab");
    this.container = e, this.closeModal = t, this.token = n, this.email = A, this.amount = s, this._currentStep = 1, this.cardDetailsValues = {
      number: "",
      expiry: "",
      cvv: ""
    }, this.cardPin = "", this.cardOtp = "", this.activeRef = "", this.contents = document.querySelectorAll(".content"), this.creditCardTypes = [...u], this.switchTab = i, this.renderCardContent(), this.currentStep === 1 && this.displayCardTypes(), this.attachInputListeners();
  }
  displayCardTypes() {
    requestAnimationFrame(() => {
      const e = this.container.querySelector(
        "#card-types"
      );
      this.creditCardTypes.length === 1 && this.creditCardTypes[0].name === "Unknown" ? u.forEach((t) => {
        const n = document.createElement("div");
        n.classList.add("card-type"), n.innerHTML = t.icon, e.appendChild(n);
      }) : (e.innerHTML = "", this.creditCardTypes.forEach((t) => {
        const n = document.createElement("div");
        n.classList.add("card-type"), n.innerHTML = t.icon, e.appendChild(n);
      }));
    });
  }
  get currentStep() {
    return this._currentStep;
  }
  set currentStep(e) {
    this._currentStep = e, this.renderCardContent(), e === 1 && (this.displayCardTypes(), this.creditCardTypes = [...u]);
  }
  attachInputListeners() {
    const e = this.container.querySelector(
      'input[name="number"]'
    ), t = this.container.querySelector(
      'input[name="expiry"]'
    ), n = this.container.querySelector(
      'input[name="cvv"]'
    ), A = this.container.querySelector(
      ".details-form-button"
    ), s = document.querySelector("#checkoutcard"), i = Array.from(
      this.container.querySelectorAll(".pin-input")
    ), c = this.container.querySelector(
      ".otp-input"
    ), a = this.container.querySelector(
      ".otp-button"
    ), l = this.container.querySelector(
      ".success-button"
    ), C = this.container.querySelector(
      "#go-to-card"
    ), m = document.querySelector(
      "#go-to-transfer"
    );
    e && e.addEventListener(
      "input",
      (d) => this.handleInputChange(d, A)
    ), t && t.addEventListener(
      "input",
      (d) => this.handleInputChange(d, A)
    ), n && n.addEventListener(
      "input",
      (d) => this.handleInputChange(d, A)
    ), s && s.addEventListener("submit", (d) => this.handleSubmit(d)), i.forEach((d, Q) => {
      d.addEventListener(
        "input",
        (w) => this.handlePinInputChange(w, Q, i)
      ), d.addEventListener(
        "paste",
        (w) => this.handlePinPaste(w, i)
      );
    }), c && c.addEventListener(
      "input",
      (d) => this.handleOtpInput(d, a)
    ), a && a.addEventListener("click", (d) => this.submitOtp(d)), l && l.addEventListener("click", () => this.closeModal()), C && C.addEventListener("click", () => {
      this.currentStep = 1;
    }), m && m.addEventListener("click", () => {
      this.switchTab(1);
    });
  }
  handleInputChange(e, t) {
    const n = e.target, { name: A, value: s } = n;
    let i = s;
    A === "number" ? (i = V(s), this.filterCreditCardType(s)) : A === "expiry" ? i = j(s) : A === "cvv" && (i = W(s)), this.cardDetailsValues = {
      ...this.cardDetailsValues,
      [A]: i
    }, n.value = i, this.cardDetailsValues.number && this.cardDetailsValues.expiry && this.cardDetailsValues.cvv && t && t.removeAttribute("disabled");
  }
  handlePinRequest() {
    if (this.cardPin.length === 4) {
      const e = {
        authorization: {
          pin: this.cardPin
        },
        reference: this.activeRef
      };
      setTimeout(() => {
        this.currentStep = 6, this.showLoader(), P(this.token, e).then((n) => {
          n.status === "failed" ? (this.currentStep = 4, n.providerMessage ? (h(n.providerMessage, "error"), this.setPaymentError(n.providerMessage)) : (h("Payment failed", "error"), this.setPaymentError("Payment failed"))) : (h("Payment Authorized!", "success"), this.currentStep = 3);
        }).catch((n) => {
          h(n.message, "error"), this.currentStep = 4, this.setPaymentError("Payment failed");
        });
      }, 500);
    }
  }
  handlePinInputChange(e, t, n) {
    this.cardPin = "", e.target.value ? t < n.length - 1 && n[t + 1].focus() : t > 0 && n[t - 1].focus(), this.cardPin = n.map((i) => i.value).join(""), this.handlePinRequest();
  }
  showLoader() {
    var t;
    const e = this.container.querySelector("#loader");
    e && (e.classList.remove("hidden"), (t = e.querySelector("img")) == null || t.setAttribute("src", G));
  }
  setPaymentError(e) {
    const t = this.container.querySelector("#payment-warning-text"), n = this.container.querySelector(".warning-list");
    t && (t.textContent = e), n && [
      {
        text: "Try again with your card",
        action: "go-to-card"
      },
      {
        text: "Try again with transfer",
        action: "go-to-transfer"
      }
    ].forEach(({ action: s, text: i }) => {
      const c = document.createElement("button");
      c.textContent = i, c.setAttribute("id", s), c.classList.add("warning-button");
      const a = document.createElement("div");
      a.appendChild(c), n.appendChild(a);
    }), this.attachInputListeners();
  }
  handlePinPaste(e, t) {
    var s;
    e.preventDefault(), this.cardPin = "";
    const A = (((s = e.clipboardData) == null ? void 0 : s.getData("text").trim()) || "").split("");
    t.forEach((i, c) => {
      i.value = A[c] || "";
    });
    for (let i = 0; i < t.length; i++)
      if (!t[i].value) {
        t[i].focus();
        break;
      }
    this.cardPin = t.map((i) => i.value).join(""), this.handlePinRequest();
  }
  handleOtpInput(e, t) {
    const n = e.target, { value: A } = n;
    this.cardOtp = "", this.cardOtp = A, this.cardOtp.length > 3 && t && t.removeAttribute("disabled");
  }
  submitOtp(e) {
    e.preventDefault();
    const t = {
      authorization: {
        otp: this.cardPin
      },
      reference: this.activeRef
    };
    this.currentStep = 6, this.showLoader(), Y(this.token, t).then((A) => {
      A.status === "failed" ? (this.currentStep = 4, A.providerMessage ? (h(A.providerMessage, "error"), this.setPaymentError(A.providerMessage)) : (h("Payment failed", "error"), this.setPaymentError("Payment failed"))) : A.status === "successful" && (this.currentStep = 5);
    }).catch((A) => {
      h(A.message, "error"), this.currentStep = 4, this.setPaymentError("Payment failed");
    });
  }
  async handleSubmit(e) {
    var i, c;
    e.preventDefault();
    const t = this.container.querySelector(".spinner"), n = this.container.querySelector(
      "#details-form-button-text"
    ), A = {
      amount: this.amount,
      channel: "card",
      currency: "USD",
      customer: {
        email: this.email
      },
      reference: T(),
      card: {
        pan: X(this.cardDetailsValues.number),
        cvv: this.cardDetailsValues.cvv,
        expiryMonth: (i = this.cardDetailsValues) == null ? void 0 : i.expiry.split("/")[0].trim(),
        expiryYear: (c = this.cardDetailsValues) == null ? void 0 : c.expiry.split("/")[1].trim()
      }
    };
    t && n && (t.classList.remove("hidden"), n.classList.add("hidden")), q(this.token, A).then((a) => {
      a.status === "failed" ? (this.currentStep = 4, a.providerMessage ? (h(a.providerMessage, "error"), this.setPaymentError(a.providerMessage)) : (h("Payment failed", "error"), this.setPaymentError("Payment failed"))) : a.status === "pending_authorization" ? (h("Payment Created!", "success"), this.activeRef = a.reference, this.currentStep = 2) : a.status === "pending_validation" && a.authorization.mode === "3DS" && a.authorization.redirectUrl && (this.activeRef = a.reference, this.redirectTo3DS(a.authorization.redirectUrl));
    }).catch((a) => {
      h(a.message, "error"), this.currentStep = 4, this.setPaymentError("Payment failed");
    }).finally(() => {
      t && n && (t.classList.add("hidden"), n.classList.remove("hidden"));
    });
  }
  redirectTo3DS(e) {
    const t = window.open(e, "_blank");
    if (t) {
      this.currentStep = 6, this.showLoader();
      const n = setInterval(() => {
        t.closed && (clearInterval(n), this.verifyPayment(
          () => {
            this.currentStep = 5;
          },
          (A) => {
            h(A.message, "error"), this.currentStep = 4;
          }
        ));
      }, 2e3);
    } else
      alert(
        "Please enable popups for this site to complete the authentication."
      );
  }
  async verifyPayment(e, t) {
    try {
      const n = await k(this.token, this.activeRef);
      n.status === "failed" ? this.currentStep = 4 : e(n);
    } catch (n) {
      console.error(n), t(new Error("failed"));
    }
  }
  getCardStepContent() {
    switch (this.currentStep) {
      case 1:
        return x;
      case 2:
        return O;
      case 3:
        return Z;
      case 4:
        return I;
      case 5:
        return H;
      case 6:
        return N;
      default:
        return x;
    }
  }
  filterCreditCardType(e) {
    e ? (this.creditCardTypes = u.filter(
      (t) => t.name === $(e)
    ), this.creditCardTypes.length >= 1 ? this.displayCardTypes() : (this.creditCardTypes = [...u], this.displayCardTypes())) : (this.creditCardTypes = [...u], this.displayCardTypes());
  }
  renderCardContent() {
    this.contents[0] && (this.contents[0].innerHTML = this.getCardStepContent(), this.attachInputListeners());
  }
}
const R = `<div>
  <div class="box-container">
    <div class="container-center h-[40vh] hidden" id="loader">
      <img src="" alt="loader gif" />
    </div>
    <div id="details-content" class="grid">
      <h5 class="content-heading">
        Transfer <span class="transfer-curr-amount"></span> the details below
      </h5>
      <div
        class="box-container bg-primary-lighter rounded-md mt-8 md:mx-5 max-sm:px-4 max-sm:py-5"
      >
        <div class="container-between pb-5">
          <div>
            <p class="text-grey-700 text-xs">BANK NAME</p>
            <p class="text-grey-600" id="transfer-bank"></p>
          </div>
        </div>

        <div class="container-between pb-5">
          <div>
            <p class="text-grey-700 text-xs">ACCOUNT NUMBER</p>
            <p class="text-grey-600" id="transfer-acn"></p>
          </div>

          <div>
            <button class="relative group" id="copy-acn">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.33337 4.33337H1.66671C0.931374 4.33337 0.333374 4.93137 0.333374 5.66671V12.3334C0.333374 13.0687 0.931374 13.6667 1.66671 13.6667H8.33337C9.06871 13.6667 9.66671 13.0687 9.66671 12.3334V5.66671C9.66671 4.93137 9.06871 4.33337 8.33337 4.33337Z"
                  fill="#2B2BA1"
                />
                <path
                  d="M12.3334 0.333374H5.66671C5.31309 0.333374 4.97395 0.47385 4.7239 0.723898C4.47385 0.973947 4.33337 1.31309 4.33337 1.66671V3.00004H9.66671C10.0203 3.00004 10.3595 3.14052 10.6095 3.39056C10.8596 3.64061 11 3.97975 11 4.33337V9.66671H12.3334C12.687 9.66671 13.0261 9.52623 13.2762 9.27618C13.5262 9.02613 13.6667 8.687 13.6667 8.33337V1.66671C13.6667 1.31309 13.5262 0.973947 13.2762 0.723898C13.0261 0.47385 12.687 0.333374 12.3334 0.333374Z"
                  fill="#2B2BA1"
                />
              </svg>

              <div
                class="absolute left-0 flex-col items-center hidden mb-5 group-hover:flex w-auto top-[20px]"
              >
                <div class="tooltip-textbox">
                  <p class="tooltip-text" id="acn-tooltip">Copy</p>
                </div>
              </div>
            </button>
          </div>
        </div>
        <div class="container-between pb-5">
          <div>
            <p class="text-grey-700 text-xs">AMOUNT</p>
            <p
              class="text-grey-600 transfer-curr-amount"
              id="transfer-amount"
            ></p>
          </div>

          <div>
            <button class="relative group" id="copy-amount">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.33337 4.33337H1.66671C0.931374 4.33337 0.333374 4.93137 0.333374 5.66671V12.3334C0.333374 13.0687 0.931374 13.6667 1.66671 13.6667H8.33337C9.06871 13.6667 9.66671 13.0687 9.66671 12.3334V5.66671C9.66671 4.93137 9.06871 4.33337 8.33337 4.33337Z"
                  fill="#2B2BA1"
                />
                <path
                  d="M12.3334 0.333374H5.66671C5.31309 0.333374 4.97395 0.47385 4.7239 0.723898C4.47385 0.973947 4.33337 1.31309 4.33337 1.66671V3.00004H9.66671C10.0203 3.00004 10.3595 3.14052 10.6095 3.39056C10.8596 3.64061 11 3.97975 11 4.33337V9.66671H12.3334C12.687 9.66671 13.0261 9.52623 13.2762 9.27618C13.5262 9.02613 13.6667 8.687 13.6667 8.33337V1.66671C13.6667 1.31309 13.5262 0.973947 13.2762 0.723898C13.0261 0.47385 12.687 0.333374 12.3334 0.333374Z"
                  fill="#2B2BA1"
                />
              </svg>

              <div
                class="absolute left-0 flex-col items-center hidden mb-5 group-hover:flex w-auto top-[20px]"
              >
                <div class="tooltip-textbox">
                  <p class="tooltip-text" id="amount-tooltip">Copy</p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div class="mt-6 mx-[18px]">
        <p class="mx-auto w-5/6 text-grey-700 text-center text-sm">
          Search for Spotflow Direct or Direct Spotflow on your bank app. Use
          this account for this transaction only
        </p>
      </div>
      <div class="justify-center flex relative mb-7 mt-6 mx-5">
        <div class="relative w-12 h-12">
          <svg
            id="homeicon"
            class="absolute top-2/4 right-2/4 translate-x-2/4 -translate-y-1/2 my-auto"
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.8428 5.89789H1.15724C0.79682 5.89789 0.5 6.16929 0.5 6.49886V12.1984C0.5 12.5279 0.79682 12.7993 1.15724 12.7993H11.8428C12.2032 12.7993 12.5 12.5279 12.5 12.1984V6.49886C12.5 6.16929 12.2032 5.89789 11.8428 5.89789ZM11.5671 10.8026C10.9311 10.9189 10.4223 11.3648 10.3163 11.9464H2.70495C2.57774 11.3648 2.09011 10.8995 1.45406 10.8026V7.89466C2.09011 7.77834 2.59894 7.33246 2.70495 6.75088H10.3163C10.4435 7.33246 10.9311 7.79773 11.5671 7.89466V10.8026Z"
              fill="#32BB78"
            />
            <path
              d="M2.65822 8.79915C2.38755 8.79915 2.17489 9.0124 2.17489 9.28381C2.17489 9.55521 2.38755 9.76846 2.65822 9.76846C2.92889 9.76846 3.14155 9.55521 3.14155 9.28381C3.14155 9.0124 2.92889 8.79915 2.65822 8.79915Z"
              fill="#32BB78"
            />
            <path
              d="M10.2477 8.7993C9.97739 8.7993 9.76497 9.01254 9.76497 9.28395C9.76497 9.55536 9.97739 9.7686 10.2477 9.7686C10.5181 9.7686 10.7305 9.55536 10.7305 9.28395C10.7498 9.01254 10.5181 8.7993 10.2477 8.7993Z"
              fill="#32BB78"
            />
            <path
              d="M6.49763 7.46596C5.37893 7.46596 4.49996 8.34596 4.49996 9.46596C4.49996 10.586 5.37893 11.466 6.49763 11.466C7.61632 11.466 8.4953 10.586 8.4953 9.46596C8.5752 8.34596 7.61632 7.46596 6.49763 7.46596Z"
              fill="#32BB78"
            />
            <path
              d="M8.51412 4.92856C8.64133 5.06426 8.87455 5.06426 9.00176 4.92856L10.4435 3.35828C10.6131 3.16442 10.4647 2.87363 10.189 2.87363H9.48939V1.09011C9.48939 0.915633 9.34098 0.799316 9.17137 0.799316H8.38691C8.1961 0.799316 8.06889 0.935019 8.06889 1.09011V2.87363H7.36925C7.09363 2.87363 6.94522 3.16442 7.11483 3.35828L8.51412 4.92856Z"
              fill="#32BB78"
            />
            <path
              d="M3.99825 4.92856C4.12546 5.06426 4.35868 5.06426 4.48589 4.92856L5.92758 3.35828C6.09719 3.16442 5.94878 2.87363 5.67317 2.87363H4.97352V1.09011C4.97352 0.915633 4.82511 0.799316 4.6555 0.799316H3.87105C3.68023 0.799316 3.55302 0.935019 3.55302 1.09011V2.87363H2.85338C2.57776 2.87363 2.42935 3.16442 2.59896 3.35828L3.99825 4.92856Z"
              fill="#32BB78"
            />
          </svg>

          <div class="circular-progress-bar w-12 h-12">
            <svg
              viewBox="0 0 100 100"
              width="100"
              height="100"
              class="h-full w-full"
            >
              <circle
                stroke-width="10"
                stroke="#e1e0f1"
                stroke-linecap="round"
                cx="50"
                cy="50"
                class="circle-progress-bg"
                r="40"
                fill="transparent"
              ></circle>
              <circle
                stroke-width="11"
                stroke="#01008E"
                stroke-linecap="round"
                cx="50"
                cy="50"
                r="40"
                class="circle-progress"
                fill="transparent"
                stroke-dasharray=""
                stroke-dashoffset=""
                transform="rotate(-90 50 50)"
              ></circle>
            </svg>
          </div>
        </div>
        <p
          class="absolute right-2/4 -bottom-[30px] translate-x-2/4 text-grey-700"
        >
          Expires in <span class="text-success" id="time-left"></span>
        </p>
      </div>
      <div class="mt-10 mx-[18px]">
        <button class="transfer-button">I’ve sent the money</button>
      </div>
    </div>
  </div>
</div>
`, e1 = `<div id="paymentWarning">
    <div class="box-container">
        <div class="text-center mt-7">
            <svg class="mx-auto" width="48" height="46" viewBox="0 0 48 46" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M47.4936 39.5624L27.5213 2.47251C26.1057 -0.157178 22.3346 -0.157178 20.9178 2.47251L0.946695 39.5624C0.639327 40.1332 0.485227 40.7741 0.499436 41.4223C0.513645 42.0705 0.695678 42.7039 1.02777 43.2608C1.35986 43.8177 1.83065 44.2789 2.39421 44.5995C2.95776 44.9201 3.59481 45.0892 4.24318 45.0901H44.1912C44.8401 45.0902 45.4779 44.9219 46.0422 44.6017C46.6066 44.2815 47.0782 43.8204 47.411 43.2633C47.7438 42.7063 47.9263 42.0724 47.9408 41.4237C47.9553 40.775 47.8012 40.1337 47.4936 39.5624V39.5624ZM24.2201 39.3479C23.7566 39.3479 23.3034 39.2104 22.918 38.9529C22.5326 38.6954 22.2322 38.3293 22.0548 37.9011C21.8774 37.4728 21.831 37.0016 21.9214 36.5469C22.0119 36.0923 22.2351 35.6746 22.5629 35.3469C22.8906 35.0191 23.3082 34.7959 23.7629 34.7054C24.2175 34.615 24.6888 34.6614 25.117 34.8388C25.5453 35.0162 25.9114 35.3166 26.1689 35.702C26.4264 36.0875 26.5639 36.5406 26.5639 37.0042C26.5639 37.3119 26.5033 37.6167 26.3855 37.9011C26.2677 38.1854 26.095 38.4438 25.8774 38.6614C25.6598 38.8791 25.4014 39.0517 25.117 39.1695C24.8327 39.2873 24.5279 39.3479 24.2201 39.3479ZM26.7654 15.7756L26.0928 30.0725C26.0928 30.5698 25.8952 31.0467 25.5436 31.3983C25.192 31.75 24.7151 31.9475 24.2178 31.9475C23.7205 31.9475 23.2436 31.75 22.892 31.3983C22.5403 31.0467 22.3428 30.5698 22.3428 30.0725L21.6701 15.7815C21.655 15.44 21.7088 15.099 21.8283 14.7787C21.9478 14.4584 22.1306 14.1655 22.3657 13.9174C22.6008 13.6692 22.8835 13.471 23.1968 13.3344C23.5102 13.1979 23.8478 13.1258 24.1897 13.1225H24.2143C24.5584 13.1223 24.899 13.1919 25.2156 13.327C25.5321 13.462 25.818 13.6598 26.0559 13.9085C26.2939 14.1571 26.4791 14.4513 26.6002 14.7734C26.7213 15.0955 26.776 15.4389 26.7608 15.7827L26.7654 15.7756Z"
                    fill="#FF9B00" />
            </svg>

            <p id="payment-warning-text" class="warning-text">Account expired</p>
        </div>

        <div class="warning-list box-container">
            <div>
                <button class="warning-button" id="transfer-try-again">
                    Try again
                </button>
            </div>
            <div>
                <button class="warning-button" id="transfer-sent">
                    I already sent the money
                </button>
            </div>
        </div>
    </div>
</div>`, n1 = `<div id="trasferConfirmationOne">
    <div class="box-container">
        <div class="text-center mt-7 w-4/5 md:w-3/5 mx-auto">
            <h5 class="text-center text-grey-400 w-4/5 mx-auto mt-4 mb-7 flex">
                We’ll complete this transaction automatically once we confirm your transfer.
            </h5>

            <div class="container-center gap-2">
                <div class="h-3 w-3 order-1 rounded-full border-primary border bg-primary"></div>
                <div class="h-3 w-3 order-2 rounded-full border-[1px] border-[#C0B5CF]"></div>
            </div>

            <div class="mt-10 mx-[18px]">
                <button class="warning-button w-[200px]" id="confirm-one">
                    Next
                </button>
            </div>
        </div>
    </div>
    </div>`, A1 = `<div id="trasferConfirmationOne">
  <div class="box-container">
    <div class="text-center mt-7 w-4/5 md:w-3/5 mx-auto">
      <h5 class="text-center text-grey-400 w-4/5 mx-auto mt-4 mb-7 flex">
        If you have any issues with this transfer, please contact us via
        support@spotflow.com
      </h5>

      <div class="container-center gap-2">
        <div
          class="order-2 h-3 w-3 rounded-full border-primary border bg-primary"
        ></div>
        <div
          class="order-1 h-3 w-3 rounded-full border-[1px] border-[#C0B5CF]"
        ></div>
      </div>

      <div class="mt-10 mb-4 mx-[18px]">
        <button class="transfer-close">Close Checkout</button>
      </div>
      <div class="container-center">
        <button class="text-grey-400 text-center hover:underline">
          Keep waiting
        </button>
      </div>
    </div>
  </div>
</div>
`, s1 = `<div id="trasferConfirmationProgress">
  <div class="box-container">
    <div class="text-center mt-7 w-11/12 md:w-4/5 mx-auto">
      <h5
        class="text-center text-grey-400 w-4/5 mx-auto mt-4 mb-7 flex md:text-xl"
      >
        We’re waiting to confirm your transfer. This can take a few minutes
      </h5>

      <div class="container-center gap-2 pb-10">
        <div class="relative">
          <div
            class="relative h-9 w-9 rounded-full border border-dashed border-grey-200"
          ></div>
          <p
            class="text-sm absolute -bottom-[25px] right-2/4 translate-x-2/4 text-grey-100"
          >
            Sent
          </p>
        </div>
        <div class="w-4/5">
          <div class="progress-container">
            <div class="progress-bar"></div>
          </div>
        </div>
        <div class="relative">
          <div
            class="relative h-9 w-9 rounded-full border border-dashed border-grey-200"
          ></div>
          <p
            class="text-sm absolute -bottom-[25px] right-2/4 translate-x-2/4 text-grey-100"
          >
            Received
          </p>
        </div>
      </div>
      <div class="mt-10 mx-[18px]">
        <button class="warning-button w-full cursor-text">
          Please wait for <span id="ctd-timer"> </span> minutes
        </button>
      </div>
      <div class="container-center">
        <button class="text-grey-400 text-center hover:underline" id="show-acn">
          Show account number
        </button>
      </div>
    </div>
  </div>
</div>
`;
class i1 {
  constructor(e, t, n, A, s) {
    o(this, "container");
    o(this, "contents");
    o(this, "closeModal");
    o(this, "email");
    o(this, "token");
    o(this, "amount");
    o(this, "_currentStep");
    o(this, "activeRef");
    o(this, "paymentResponse");
    o(this, "initialTime");
    o(this, "timeLeft");
    o(this, "timerId");
    o(this, "abortController", null);
    this.container = e, this.contents = document.querySelectorAll(".content"), this.closeModal = t, this.token = n, this.email = A, this.amount = s, this._currentStep = 1, this.renderTransferContent(), this.paymentResponse = null, this.activeRef = "", this.initialTime = 600, this.timeLeft = this.initialTime, this.timerId = null, this.attachInputListeners(), this.currentStep === 1 && (this.abortController = new AbortController(), this.createTransfer());
  }
  get currentStep() {
    return this._currentStep;
  }
  set currentStep(e) {
    this._currentStep = e, this.renderTransferContent(), e === 1 && this.createTransfer(), e === 5 && this.startTimer("check");
  }
  attachInputListeners() {
    const e = this.container.querySelector("#transfer-acn"), t = this.container.querySelector("#copy-acn"), n = this.container.querySelector("#acn-tooltip"), A = this.container.querySelector("#transfer-amount"), s = this.container.querySelector("#copy-amount"), i = this.container.querySelector("#amount-tooltip"), c = this.container.querySelector("#transfer-try-again"), a = this.container.querySelector("#transfer-sent"), l = this.container.querySelector(".transfer-button"), C = this.container.querySelector("#show-acn"), m = this.container.querySelector("#ctd-timer"), d = this.container.querySelector(
      ".success-button"
    ), Q = this.container.querySelector("#confirm-one"), w = this.container.querySelector(".transfer-close");
    if (t && e && t.addEventListener("click", () => {
      n && this.copyToClipboard(e.innerHTML, n);
    }), s && A && s.addEventListener("click", () => {
      i && this.copyToClipboard(A.innerHTML.split(" ")[1], i);
    }), l && l.addEventListener("click", () => {
      this.abortController && (this.abortController.abort(), this.currentStep = 5);
    }), c && c.addEventListener("click", () => {
      this.currentStep = 1;
    }), a && a.addEventListener("click", () => {
      this.abortController && (this.abortController.abort(), this.currentStep = 5);
    }), C && C.addEventListener("click", () => {
      this.stopProgressBar(), this.currentStep = 1;
    }), this.currentStep === 5) {
      this.initialTime = 300, this.timeLeft = this.initialTime, m && (m.innerHTML = B(this.initialTime));
      const U = 3e4;
      this.abortController = new AbortController(), setTimeout(() => {
        this.verifyTransfer(
          this.token,
          U,
          () => {
            this.currentStep = 6;
          },
          (v) => {
            console.error("Polling failed:", v), h(v.message, "error");
          }
        );
      }, 5e3), this.startTimer("check");
    }
    Q && Q.addEventListener("click", () => {
      this.currentStep = 4;
    }), d && d.addEventListener("click", () => this.closeModal()), w && w.addEventListener("click", () => this.closeModal());
  }
  async createTransfer() {
    requestAnimationFrame(() => {
      var s;
      const e = this.container.querySelector("#loader"), t = this.container.querySelector("#details-content");
      e && t && (e.classList.remove("hidden"), (s = e.querySelector("img")) == null || s.setAttribute("src", G), t.classList.add("hidden"));
      const n = {
        amount: this.amount,
        channel: "bank_transfer",
        currency: "USD",
        customer: {
          email: this.email
        },
        reference: T()
      };
      z(this.token, n).then((i) => {
        if (i.status === "failed")
          i.providerMessage ? h(i.providerMessage, "error") : h("Payment failed", "error"), this.currentStep = 2;
        else {
          e && t && (e.classList.add("hidden"), t.classList.remove("hidden")), this.activeRef = i.reference, this.paymentResponse = i, this.updateTransferDetailsContent();
          const c = 3e4;
          setTimeout(() => {
            this.verifyTransfer(
              this.token,
              c,
              () => {
                this.currentStep = 6;
              },
              (a) => {
                console.error("Polling failed:", a), h(a.message, "error");
              }
            );
          }, c);
        }
      }).catch((i) => {
        h(i.message, "error");
      });
    });
  }
  async verifyTransfer(e, t, n, A) {
    let s = 0, i = t, c = !0, a;
    this.abortController && (a = this.abortController.signal);
    const l = async () => {
      if (this.timeLeft <= 0) {
        c = !1, A(new Error("Max polling time reached")), this.currentStep = 2;
        return;
      }
      s += 1;
      try {
        const C = await k(
          e,
          this.activeRef,
          a
        );
        C.status === "failed" ? c && (i = t * (s + 1), setTimeout(l, i)) : (c = !1, n(C));
      } catch {
        c && (i = t * (s + 1), setTimeout(l, i));
      }
    };
    l();
  }
  getTransferStepContent() {
    switch (this.currentStep) {
      case 1:
        return R;
      case 2:
        return e1;
      case 3:
        return n1;
      case 4:
        return A1;
      case 5:
        return s1;
      case 6:
        return H;
      default:
        return R;
    }
  }
  updateTransferDetailsContent() {
    var s;
    const e = this.container.querySelectorAll(".transfer-curr-amount"), t = this.container.querySelector("#transfer-bank"), n = this.container.querySelector("#transfer-acn"), A = this.container.querySelector("#time-left");
    this.paymentResponse && (e.length && e.forEach(
      (i) => {
        var c, a;
        return i.innerHTML = `${(c = this.paymentResponse) == null ? void 0 : c.currency} ${(a = this.paymentResponse) == null ? void 0 : a.amount}`;
      }
    ), t && this.paymentResponse.bankDetails && (t.innerHTML = (s = this.paymentResponse.bankDetails) == null ? void 0 : s.bankName), n && this.paymentResponse.bankDetails && (n.innerHTML = this.paymentResponse.bankDetails.accountNumber), A && (A.innerHTML = B(this.initialTime)), this.startTimer("poll"));
  }
  renderTransferContent() {
    this.contents[1] && (this.contents[1].innerHTML = this.getTransferStepContent(), this.attachInputListeners());
  }
  startTimer(e) {
    const t = this.container.querySelector("#ctd-timer");
    this.stopTimer(), this.timerId = window.setInterval(() => {
      this.timeLeft > 0 ? (this.timeLeft -= 1, e === "poll" ? this.updateProgressTimerContent() : t && (t.innerHTML = B(this.timeLeft), this.startTimer("check"))) : (this.stopTimer(), e === "check" && (this.currentStep = 3));
    }, 1e3);
  }
  updateProgressTimerContent() {
    const t = 2 * Math.PI * 40, A = (this.initialTime - this.timeLeft) / this.initialTime * 100 / 100 * t, s = this.container.querySelector(".circle-progress"), i = this.container.querySelector("#time-left");
    s && (s.setAttribute("stroke-dasharray", `${t}`), s.setAttribute("stroke-dashoffset", `${A}`)), i && (i.innerHTML = B(this.timeLeft));
  }
  stopTimer() {
    this.timerId !== null && (clearInterval(this.timerId), this.timerId = null);
  }
  //  startProgressBar() {
  //     const progressBar = this.container.querySelector(".progress-bar") as HTMLElement;
  //     if (progressBar) {
  //       progressBar.style.animationPlayState = 'running';
  //     }
  //   }
  stopProgressBar() {
    const e = this.container.querySelector(
      ".progress-bar"
    );
    e && (e.style.animationPlayState = "paused");
  }
  copyToClipboard(e, t) {
    navigator.clipboard.writeText(e).then(() => {
      t.innerHTML = "Copied!";
    }).catch(() => {
      t.innerHTML = "Failed to copy";
    });
  }
  destroyTimer() {
    this.stopTimer();
  }
  stopPolling() {
    this.abortController && this.abortController.abort();
  }
}
const b = `<div id="ussdBanks">
  <div class="box-container">
    <div class="text-center my-6">
      <svg
        class="mx-auto w-8 h-8 mb-3"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17 10.994H12.7L13.43 7.00603H17C17.2652 7.00603 17.5196 6.90099 17.7071 6.71402C17.8946 6.52705 18 6.27346 18 6.00905C18 5.74463 17.8946 5.49104 17.7071 5.30407C17.5196 5.1171 17.2652 5.01206 17 5.01206H13.79L14.48 1.21355C14.5073 1.08026 14.5069 0.942815 14.4789 0.809676C14.4509 0.676537 14.3958 0.550522 14.3171 0.439385C14.2385 0.328249 14.1378 0.234342 14.0213 0.163445C13.9049 0.0925489 13.7751 0.046162 13.64 0.02714C13.5057 -0.0047662 13.3662 -0.00858576 13.2303 0.0159217C13.0944 0.0404292 12.965 0.0927325 12.8504 0.169536C12.7358 0.24634 12.6384 0.345978 12.5643 0.462174C12.4902 0.578369 12.4411 0.708602 12.42 0.844667L11.67 5.01206H7.79L8.48 1.21355C8.50727 1.08026 8.50688 0.942815 8.47887 0.809676C8.45086 0.676537 8.39582 0.550522 8.31714 0.439385C8.23845 0.328249 8.13778 0.234342 8.02133 0.163445C7.90488 0.0925489 7.77511 0.046162 7.64 0.02714C7.50566 -0.0047662 7.36615 -0.00858576 7.23026 0.0159217C7.09437 0.0404292 6.96504 0.0927325 6.85042 0.169536C6.73581 0.24634 6.63839 0.345978 6.56431 0.462174C6.49024 0.578369 6.4411 0.708602 6.42 0.844667L5.67 5.01206H1C0.734784 5.01206 0.48043 5.1171 0.292893 5.30407C0.105357 5.49104 0 5.74463 0 6.00905C0 6.27346 0.105357 6.52705 0.292893 6.71402C0.48043 6.90099 0.734784 7.00603 1 7.00603H5.3L4.57 10.994H1C0.734784 10.994 0.48043 11.099 0.292893 11.286C0.105357 11.4729 0 11.7265 0 11.991C0 12.2554 0.105357 12.509 0.292893 12.6959C0.48043 12.8829 0.734784 12.9879 1 12.9879H4.21L3.52 16.7864C3.49273 16.9197 3.49312 17.0572 3.52113 17.1903C3.54914 17.3235 3.60418 17.4495 3.68286 17.5606C3.76155 17.6718 3.86222 17.7657 3.97867 17.8366C4.09512 17.9075 4.22489 17.9538 4.36 17.9729C4.49434 18.0048 4.63385 18.0086 4.76974 17.9841C4.90563 17.9596 5.03496 17.9073 5.14958 17.8305C5.26419 17.7537 5.36161 17.654 5.43569 17.5378C5.50976 17.4216 5.5589 17.2914 5.58 17.1553L6.33 12.9879H10.21L9.52 16.7864C9.49273 16.9197 9.49312 17.0572 9.52113 17.1903C9.54914 17.3235 9.60418 17.4495 9.68286 17.5606C9.76155 17.6718 9.86222 17.7657 9.97867 17.8366C10.0951 17.9075 10.2249 17.9538 10.36 17.9729C10.4943 18.0048 10.6338 18.0086 10.7697 17.9841C10.9056 17.9596 11.035 17.9073 11.1496 17.8305C11.2642 17.7537 11.3616 17.654 11.4357 17.5378C11.5098 17.4216 11.5589 17.2914 11.58 17.1553L12.33 12.9879H17C17.2652 12.9879 17.5196 12.8829 17.7071 12.6959C17.8946 12.509 18 12.2554 18 11.991C18 11.7265 17.8946 11.4729 17.7071 11.286C17.5196 11.099 17.2652 10.994 17 10.994ZM6.7 10.994L7.43 7.00603H11.3L10.57 10.994H6.7Z"
          fill="#01008E"
        />
      </svg>

      <h5 class="content-heading">Choose your bank to start the payment</h5>
    </div>

    <div class="my-12">
      <div class="relative md:mx-[18px] mb-4 mx-0">
        <div class="relative">
          <input
            type="text"
            id="bank-search-input"
            class=""
            placeholder="Search..."
            autocomplete="off"
          />
          <div class="bank-options" id="bank-options"></div>
        </div>
      </div>
    </div>
  </div>
</div>
`, r1 = `<div id="viewCode">
  <div class="box-container">
    <div class="text-center pb-5 mt-4 mb-6">
      <svg
        class="mx-auto w-8 h-8 mb-3"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17 10.994H12.7L13.43 7.00603H17C17.2652 7.00603 17.5196 6.90099 17.7071 6.71402C17.8946 6.52705 18 6.27346 18 6.00905C18 5.74463 17.8946 5.49104 17.7071 5.30407C17.5196 5.1171 17.2652 5.01206 17 5.01206H13.79L14.48 1.21355C14.5073 1.08026 14.5069 0.942815 14.4789 0.809676C14.4509 0.676537 14.3958 0.550522 14.3171 0.439385C14.2385 0.328249 14.1378 0.234342 14.0213 0.163445C13.9049 0.0925489 13.7751 0.046162 13.64 0.02714C13.5057 -0.0047662 13.3662 -0.00858576 13.2303 0.0159217C13.0944 0.0404292 12.965 0.0927325 12.8504 0.169536C12.7358 0.24634 12.6384 0.345978 12.5643 0.462174C12.4902 0.578369 12.4411 0.708602 12.42 0.844667L11.67 5.01206H7.79L8.48 1.21355C8.50727 1.08026 8.50688 0.942815 8.47887 0.809676C8.45086 0.676537 8.39582 0.550522 8.31714 0.439385C8.23845 0.328249 8.13778 0.234342 8.02133 0.163445C7.90488 0.0925489 7.77511 0.046162 7.64 0.02714C7.50566 -0.0047662 7.36615 -0.00858576 7.23026 0.0159217C7.09437 0.0404292 6.96504 0.0927325 6.85042 0.169536C6.73581 0.24634 6.63839 0.345978 6.56431 0.462174C6.49024 0.578369 6.4411 0.708602 6.42 0.844667L5.67 5.01206H1C0.734784 5.01206 0.48043 5.1171 0.292893 5.30407C0.105357 5.49104 0 5.74463 0 6.00905C0 6.27346 0.105357 6.52705 0.292893 6.71402C0.48043 6.90099 0.734784 7.00603 1 7.00603H5.3L4.57 10.994H1C0.734784 10.994 0.48043 11.099 0.292893 11.286C0.105357 11.4729 0 11.7265 0 11.991C0 12.2554 0.105357 12.509 0.292893 12.6959C0.48043 12.8829 0.734784 12.9879 1 12.9879H4.21L3.52 16.7864C3.49273 16.9197 3.49312 17.0572 3.52113 17.1903C3.54914 17.3235 3.60418 17.4495 3.68286 17.5606C3.76155 17.6718 3.86222 17.7657 3.97867 17.8366C4.09512 17.9075 4.22489 17.9538 4.36 17.9729C4.49434 18.0048 4.63385 18.0086 4.76974 17.9841C4.90563 17.9596 5.03496 17.9073 5.14958 17.8305C5.26419 17.7537 5.36161 17.654 5.43569 17.5378C5.50976 17.4216 5.5589 17.2914 5.58 17.1553L6.33 12.9879H10.21L9.52 16.7864C9.49273 16.9197 9.49312 17.0572 9.52113 17.1903C9.54914 17.3235 9.60418 17.4495 9.68286 17.5606C9.76155 17.6718 9.86222 17.7657 9.97867 17.8366C10.0951 17.9075 10.2249 17.9538 10.36 17.9729C10.4943 18.0048 10.6338 18.0086 10.7697 17.9841C10.9056 17.9596 11.035 17.9073 11.1496 17.8305C11.2642 17.7537 11.3616 17.654 11.4357 17.5378C11.5098 17.4216 11.5589 17.2914 11.58 17.1553L12.33 12.9879H17C17.2652 12.9879 17.5196 12.8829 17.7071 12.6959C17.8946 12.509 18 12.2554 18 11.991C18 11.7265 17.8946 11.4729 17.7071 11.286C17.5196 11.099 17.2652 10.994 17 10.994ZM6.7 10.994L7.43 7.00603H11.3L10.57 10.994H6.7Z"
          fill="#01008E"
        />
      </svg>

      <div class="w-4/5 mx-auto">
        <h5 class="content-heading">
          Dial the code below to complete this transaction with FCMB’s 329
        </h5>

        <p class="text-primary-dark my-4">How to pay with FCMB USSD</p>
      </div>
    </div>

    <div>
      <button class="copy-code-button">
        <span> *329*33*4*343788#</span>

        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.33337 4.33337H1.66671C0.931374 4.33337 0.333374 4.93137 0.333374 5.66671V12.3334C0.333374 13.0687 0.931374 13.6667 1.66671 13.6667H8.33337C9.06871 13.6667 9.66671 13.0687 9.66671 12.3334V5.66671C9.66671 4.93137 9.06871 4.33337 8.33337 4.33337Z"
            fill="#F4F4FF"
          />
          <path
            d="M12.3334 0.333374H5.66671C5.31309 0.333374 4.97395 0.47385 4.7239 0.723898C4.47385 0.973947 4.33337 1.31309 4.33337 1.66671V3.00004H9.66671C10.0203 3.00004 10.3595 3.14052 10.6095 3.39056C10.8596 3.64061 11 3.97975 11 4.33337V9.66671H12.3334C12.687 9.66671 13.0261 9.52623 13.2762 9.27618C13.5262 9.02613 13.6667 8.687 13.6667 8.33337V1.66671C13.6667 1.31309 13.5262 0.973947 13.2762 0.723898C13.0261 0.47385 12.687 0.333374 12.3334 0.333374Z"
            fill="#F4F4FF"
          />
        </svg>
      </button>

      <div class="container-center">
        <button class="text-grey-400 text-sm text-center hover:underline">
          Click to copy
        </button>
      </div>
    </div>

    <div class="pt-16 mb-2">
      <button class="ussd-button text-grey-700">I have completed the payment</button>
    </div>
    <div class="container-center">
      <button class="text-grey-400 text-center hover:underline">Cancel</button>
    </div>
  </div>
</div>
`;
class a1 {
  constructor() {
    // private container: HTMLElement;
    o(this, "contents");
    o(this, "banks");
    o(this, "_currentStep");
    this.contents = document.querySelectorAll(".content"), this.banks = t1, this._currentStep = 1, this.renderUssdContent();
  }
  get currentStep() {
    return this._currentStep;
  }
  set currentStep(e) {
    this._currentStep = e, this.renderUssdContent();
  }
  getUssdStepContent() {
    switch (this.currentStep) {
      case 1:
        return b;
      case 2:
        return r1;
      case 3:
        return I;
      case 4:
        return H;
      default:
        return b;
    }
  }
  renderUssdContent() {
    this.contents[2] && (this.contents[2].innerHTML = this.getUssdStepContent());
  }
  renderSearchOptions(e, t, n) {
    n.innerHTML = "", e.forEach((A) => {
      const s = document.createElement("div");
      s.classList.add("bank-option"), s.textContent = A.name, s.addEventListener("click", () => {
        t.value = A.name, n.style.display = "none";
      }), n.appendChild(s);
    }), n.style.display = e.length ? "block" : "none";
  }
  searchBanksOnInput(e, t) {
    const n = e.value.toLowerCase(), A = this.banks.filter(
      (s) => s.name.toLowerCase().includes(n)
    );
    this.renderSearchOptions(A, e, t);
  }
  openSearchOnFocus(e, t) {
    this.renderSearchOptions(this.banks, e, t);
  }
  closeSearchOptionsOutsideFocus(e, t, n) {
    !t.contains(e.target) && !n.contains(e.target) && (n.style.display = "none");
  }
}
class c1 {
  constructor(e, t, n) {
    o(this, "modalContainer");
    o(this, "currentPaymentMethod");
    o(this, "currentStep");
    o(this, "container");
    o(this, "card");
    o(this, "transfer");
    o(this, "ussd");
    o(this, "merchantKey");
    o(this, "email");
    o(this, "amount");
    o(this, "isMobile", !1);
    if (this.modalContainer = document.createElement("div"), this.modalContainer.innerHTML = K, document.body.appendChild(this.modalContainer), this.isMobile = window.matchMedia("(max-width: 767px)").matches, this.currentPaymentMethod = this.isMobile ? 3 : 0, this.currentStep = 1, this.container = document.querySelectorAll(".content")[0], this.merchantKey = e, this.email = t, this.amount = n, this.attachInputListeners(), this.switchTab = this.switchTab.bind(this), e === "" || t === "")
      throw this.closeModal(), new Error("Merchant key or email is required");
  }
  attachInputListeners() {
    const e = document.body.querySelector(
      "#change-method"
    ), t = document.body.querySelectorAll(
      ".close-btn"
    ), n = document.querySelector("#mob-container"), A = document.querySelector("#mob-tab-co"), s = document.querySelector("#mob-tab-c");
    e && (this.cleanup(), e.addEventListener("click", () => {
      this.currentPaymentMethod = 3, this.attachInputListeners(), n && (n.innerHTML = this.mobileContainerContent()), this.setup(), A && s && s.parentNode && A.removeChild(s);
    })), t.length > 0 && t.forEach((i) => {
      i.addEventListener("click", () => {
        this.cleanup(), this.closeModal();
      });
    });
  }
  displayTabLayout() {
    const e = document.querySelectorAll(".tab-button"), t = document.querySelectorAll(".mob-tab-button"), n = document.querySelector(".box-container-method"), A = document.querySelector("#mob-container"), s = document.querySelector("#inner-mob-container"), i = document.querySelector("#mob-tab-co");
    this.isMobile ? t && n && A && s && t.forEach((c) => {
      c.addEventListener("click", (a) => {
        if (a.currentTarget instanceof HTMLElement && a.currentTarget.dataset.tab) {
          const l = parseInt(a.currentTarget.dataset.tab);
          this.updatePaymentMethodView(
            this.merchantKey,
            this.email,
            this.amount
          ), this.setCurrentPaymentMethod(l), A.removeChild(s), this.cleanup(), E.forEach((C, m) => {
            this.currentPaymentMethod === m && i && (i.innerHTML = `
                          <div id="mob-tab-c" class="w-full pt-2 px-5 md:hidden">
                            <div>
                              <button class="pt-3 px-2 grow align-center text-grey-600 tex-sm font-semibold" data-tab="${m}">
                              <div class="min-w-8 mr-2 align-center">
                                ${C.icon}
                                </div>
                                <span>${C.label}</span>
                              </button>
                            </div>
                          </div>
                      `);
          }), this.renderPaymentMethodContent(), this.attachInputListeners();
        }
      });
    }) : e && n && e.forEach((c) => {
      c.addEventListener("click", (a) => {
        if (a.currentTarget instanceof HTMLElement && a.currentTarget.dataset.tab) {
          const l = parseInt(a.currentTarget.dataset.tab);
          this.switchTab(l);
        }
      });
    }), this.updatePaymentMethodView(this.merchantKey, this.email, this.amount), this.renderPaymentMethodContent(), this.attachInputListeners(), this.setCurrentPaymentMethod(this.currentPaymentMethod);
  }
  updatePaymentMethodView(e, t, n) {
    switch (this.currentPaymentMethod) {
      case 0:
        return this.card = new f(
          this.modalContainer,
          () => this.closeModal(),
          e,
          t,
          n,
          () => this.switchTab(1)
        );
      case 1:
        return this.transfer = new i1(
          this.modalContainer,
          () => this.closeModal(),
          e,
          t,
          n
        );
      case 2:
        return this.ussd = new a1();
      default:
        return this.card = new f(
          this.modalContainer,
          () => this.closeModal(),
          e,
          t,
          n,
          () => this.switchTab(1)
        );
    }
  }
  renderPaymentMethodContent() {
    return (() => {
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
    })();
  }
  setCurrentPaymentMethod(e) {
    this.currentPaymentMethod = e;
    const t = document.querySelectorAll(".tab-button");
    let n = document.querySelectorAll(".content");
    const A = document.getElementById("mob-action-btns");
    t.forEach((s) => s.classList.remove("active")), n.forEach((s) => s.classList.remove("active")), t[e] && t[e].classList.add("active"), n[e] && n[e].classList.add("active"), e !== 3 && A && (A.classList.remove("hidden"), A.classList.add("md:hidden"));
  }
  switchTab(e) {
    this.setCurrentPaymentMethod(e), this.updatePaymentMethodView(this.merchantKey, this.email, this.amount), this.cleanup(), this.renderPaymentMethodContent(), this.attachInputListeners();
  }
  setup() {
    const e = document.getElementById("merchantLogo"), t = document.getElementById("merchantLogoMob"), n = document.getElementById("mob-action-btns"), A = document.getElementById("merchant-email"), s = document.querySelector("#mob-container");
    if (A && (A.innerHTML = this.email), this.isMobile) {
      t && t.setAttribute("src", M), s && (s.innerHTML = this.mobileContainerContent());
      let i = document.querySelector(".mob-options");
      i && this.viewMobileOptions(i);
      const c = document.querySelectorAll(".mob-tab-button");
      E.forEach((a, l) => {
        const C = c[l];
        C && (C.dataset.tab = l.toString(), C.addEventListener("click", () => {
          this.setCurrentPaymentMethod(l);
        }));
      }), n && this.currentPaymentMethod === 3 && (n.classList.add("hidden"), n.classList.remove("md:hidden"));
    } else {
      e && e.setAttribute("src", M);
      let i = document.querySelector(".payment-options");
      i && (i.innerHTML = `<div> 
        ${E.map(
        (a, l) => `
              <div class="tab">   
                <button class="tab-button group" data-tab="${l}"> 
                <div class="min-w-8 md:container-center lg:block">
                  ${a.icon}
                  </div>
                  <span>${a.label}</span>
                </button>
              </div>
            `
      ).join("")}
        </div>`);
      const c = document.querySelectorAll(".tab-button");
      E.forEach((a, l) => {
        const C = c[l];
        if (C) {
          const m = C.querySelector(".tab-button-icon"), d = C.querySelector(".tab-button-label");
          m && (m.innerHTML = a.icon), d && (d.textContent = a.label), C.dataset.tab = l.toString(), C.addEventListener("click", () => {
            this.setCurrentPaymentMethod(l);
          });
        }
      });
    }
    this.displayTabLayout();
  }
  mobileContainerContent() {
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
  viewMobileOptions(e) {
    e.innerHTML = `
      ${E.map(
      (t, n) => `
                <div class="tab">
                  <button class="mob-tab-button py-3 px-2 grow align-center text-grey-600 tex-sm font-semibold" data-tab="${n}">
                  <div class="min-w-8 mr-3 align-center">
                    ${t.icon}
                    </div>
                    <span>${t.label}</span>
                  </button>
                </div>
              `
    ).join("")}`;
  }
  cleanup() {
    this.transfer && this.transfer.destroyTimer();
  }
  closeModal() {
    this.modalContainer && this.modalContainer.parentNode && document.body.removeChild(this.modalContainer);
  }
}
export {
  c1 as CheckoutForm
};
