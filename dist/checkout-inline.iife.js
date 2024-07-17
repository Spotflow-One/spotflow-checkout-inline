(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode('*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}:root{--primary: 240, 100%, 28%;--primary-light: 266, 21%, 76%;--primary-lighter: 240, 100%, 98%;--primary-dark: 240, 39%, 52%;--primary-darker: 240, 100%, 28%;--success: 151, 58%, 46%;--error: 0, 74%, 48%;--common: 60, 4%, 43%;--grey: 218, 15%, 65%;--grey-100: 270, 3%, 62%;--grey-200: 264, 3%, 72%;--grey-300: 260, 3%, 81%;--grey-400: 264, 6%, 34%;--grey-500: 217, 24%, 27%;--grey-600: 265, 10%, 24%;--grey-700: 260, 4%, 43%;--grey-800: 265, 21%, 76%;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}input:focus,button:focus{outline:none}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.container-center{display:flex;align-items:center;justify-content:center}.container-between{display:flex;align-items:center;justify-content:space-between}.align-center{display:flex;align-items:center}.box-container{padding:18px 0}@media (min-width: 768px){.box-container{padding:1.75rem}}.content-heading{padding-top:.5rem;text-align:center;font-size:1.25rem;line-height:1.75rem;font-weight:600;color:hsl(var(--grey-400))}@media (min-width: 768px){.content-heading{padding-top:0}}.payment-options{display:flex;min-height:3rem;width:100%;max-width:28rem;flex-direction:column;overflow:hidden}.tab{margin-bottom:.75rem;display:flex;align-items:center;justify-content:flex-start;text-align:left}.tab-button{display:flex;flex-grow:1;align-items:center;padding:.75rem 1.25rem;text-align:center;--tw-text-opacity: 1;color:rgb(61 56 68 / var(--tw-text-opacity))}.tab-button:hover,.tab-button.active{border-radius:.75rem;background-color:hsl(var(--primary));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.tab-button.active *{fill:#fff}.tab-button span{margin-top:.25rem;margin-bottom:.25rem;display:flex;flex-shrink:0;justify-content:flex-start;font-weight:600}.main{width:calc(100% - 250px);padding-left:1rem;padding-right:1rem}@media (min-width: 768px){.main{padding-top:1rem;padding-bottom:1rem}}.header-container{border-radius:.75rem;background-color:hsl(var(--primary));padding:2.5rem 1rem;--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}@media (min-width: 768px){.header-container{padding:1.25rem 2.25rem}}.content{display:none}.content.active{display:block}.header-chip{display:flex;height:1.4375rem;align-items:center;justify-content:center;white-space:nowrap;border-radius:.25rem;background-color:hsl(var(--success));padding-top:0;padding-bottom:0;padding-left:.25rem;padding-right:.25rem;font-size:.75rem;line-height:1rem;--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.tooltip{position:absolute;left:0;top:20px;margin-bottom:1.25rem;display:none;width:320px;flex-direction:column;align-items:center}.group:hover .tooltip{display:flex}.tooltip-textbox{position:relative;z-index:10;border-radius:.5rem;--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding:1rem 1.25rem;font-size:.75rem;line-height:1rem;--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.tooltip-title{margin-bottom:.25rem;font-size:13px;font-weight:500;line-height:17.4px;color:hsl(var(--grey-500))}.tooltip-text{font-size:13px;line-height:17.4px;letter-spacing:.025em;color:hsl(var(--grey))}.details-input-container{width:100%;border-radius:.5rem;border-width:1px;--tw-border-opacity: 1;border-color:rgb(206 205 208 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding:1.5rem .75rem .5rem}.details-input-container::-moz-placeholder{color:hsl(var(--grey-200))}.details-input-container::placeholder{color:hsl(var(--grey-200))}.details-input-container:focus{outline:2px solid transparent;outline-offset:2px}.details-form-button{display:inline-flex;height:50px;width:100%;align-items:center;justify-content:center;border-radius:.5rem;background-color:hsl(var(--primary));font-size:.875rem;line-height:1.25rem;font-weight:600;--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.details-form-button:focus{outline:2px solid transparent;outline-offset:2px}.details-form-button:disabled{background-color:hsl(var(--primary-lighter));color:hsl(var(--primary-light))}.pin-container{margin-left:auto;margin-right:auto;display:flex;justify-content:space-between}.pin-text{margin-left:auto;margin-right:auto;width:80%;text-align:center;font-size:.875rem;line-height:1.25rem;font-weight:600;color:hsl(var(--grey-400))}.pin-input{height:3.5rem;width:5rem;border-radius:.5rem;border-width:1px;border-color:hsl(var(--grey-300));text-align:center;font-size:1.125rem;line-height:1.75rem}.pin-input:focus{border-color:hsl(var(--primary));outline:2px solid transparent;outline-offset:2px}.pin-cancel{text-align:center;font-size:.875rem;line-height:1.25rem;font-weight:600;color:hsl(var(--grey-600))}.pin-cancel:hover{text-decoration-line:underline}.otp-input{width:100%;border-radius:.5rem;border-width:1px;--tw-border-opacity: 1;border-color:rgb(206 205 208 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding:1rem .75rem}.otp-input::-moz-placeholder{color:hsl(var(--grey-200))}.otp-input::placeholder{color:hsl(var(--grey-200))}.otp-input:focus{outline:2px solid transparent;outline-offset:2px}.otp-button{height:100%;border-radius:.5rem;background-color:hsl(var(--success));padding-left:1.5rem;padding-right:1.5rem;font-weight:600;--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.otp-button:disabled{opacity:.8}.otp-text{margin-left:auto;margin-right:auto;width:60%;text-align:center;font-size:.875rem;line-height:1.25rem;font-weight:600;color:hsl(var(--grey-400))}.otp-subtext{margin-left:auto;margin-right:auto;width:60%;text-align:center;font-size:.875rem;line-height:1.25rem;color:hsl(var(--grey-700))}.warning-text,.success-text{margin-top:1rem;margin-bottom:1rem;margin-left:auto;margin-right:auto;text-align:center;font-weight:600;color:hsl(var(--grey-400))}.warning-list{margin-left:auto;margin-right:auto;margin-top:3rem}.warning-button,.success-button{margin-bottom:1rem;width:100%;border-radius:.5rem;border-width:1px;border-color:hsl(var(--grey-800));padding:1rem;text-align:center;font-size:.875rem;line-height:1.25rem;font-weight:600;color:hsl(var(--grey-400))}.transfer-button,.ussd-button{margin-bottom:1rem;width:100%;border-radius:.5rem;border-width:1px;border-color:hsl(var(--primary-light));padding:1rem;text-align:center;font-size:.875rem;line-height:1.25rem;font-weight:600;color:hsl(var(--primary-darker))}.transfer-close{margin-bottom:1rem;width:200px;border-radius:.5rem;background-color:hsl(var(--success));padding:1rem;text-align:center;font-size:.875rem;line-height:1.25rem;font-weight:600;--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}#bank-search-input{width:100%;border-radius:.5rem;border-width:1px;border-color:hsl(var(--primary-light));padding:1rem}.bank-options{position:absolute;z-index:1000;margin-top:.25rem;box-sizing:border-box;display:none;max-height:150px;width:100%;overflow-y:auto;border-radius:.5rem;border-width:1px;--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.bank-option{cursor:pointer;padding:10px}.bank-option:hover{background-color:hsl(var(--primary-lighter))}.copy-code-button{margin-left:auto;margin-right:auto;margin-bottom:1rem;display:flex;width:60%;align-items:center;justify-content:center;gap:.5rem;border-radius:.5rem;background-color:hsl(var(--primary));padding:1rem;text-align:center;font-size:1.25rem;line-height:1.75rem;font-weight:600;--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.spinner{margin-right:.75rem;height:2rem;width:2rem}@keyframes spin{to{transform:rotate(360deg)}}.spinner{animation:spin 1s linear infinite;fill:#fff}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.inset-0{top:0;right:0;bottom:0;left:0}.-bottom-\\[25px\\]{bottom:-25px}.-bottom-\\[30px\\]{bottom:-30px}.-right-\\[10px\\]{right:-10px}.-top-\\[15px\\]{top:-15px}.left-0{left:0}.right-2\\/4{right:50%}.top-1{top:.25rem}.top-2\\/4{top:50%}.top-\\[20px\\]{top:20px}.z-10{z-index:10}.order-1{order:1}.order-2{order:2}.col-span-2{grid-column:span 2 / span 2}.mx-0{margin-left:0;margin-right:0}.mx-5{margin-left:1.25rem;margin-right:1.25rem}.mx-6{margin-left:1.5rem;margin-right:1.5rem}.mx-\\[18px\\]{margin-left:18px;margin-right:18px}.mx-auto{margin-left:auto;margin-right:auto}.my-12{margin-top:3rem;margin-bottom:3rem}.my-4{margin-top:1rem;margin-bottom:1rem}.my-6{margin-top:1.5rem;margin-bottom:1.5rem}.my-8{margin-top:2rem;margin-bottom:2rem}.my-auto{margin-top:auto;margin-bottom:auto}.mb-0{margin-bottom:0}.mb-2{margin-bottom:.5rem}.mb-3{margin-bottom:.75rem}.mb-4{margin-bottom:1rem}.mb-5{margin-bottom:1.25rem}.mb-6{margin-bottom:1.5rem}.mb-7{margin-bottom:1.75rem}.mr-1{margin-right:.25rem}.mt-10{margin-top:2.5rem}.mt-12{margin-top:3rem}.mt-4{margin-top:1rem}.mt-6{margin-top:1.5rem}.mt-7{margin-top:1.75rem}.mt-8{margin-top:2rem}.block{display:block}.flex{display:flex}.grid{display:grid}.contents{display:contents}.hidden{display:none}.h-12{height:3rem}.h-3{height:.75rem}.h-8{height:2rem}.h-9{height:2.25rem}.h-\\[20vh\\]{height:20vh}.h-\\[40vh\\]{height:40vh}.h-full{height:100%}.min-h-full{min-height:100%}.min-h-screen{min-height:100vh}.w-12{width:3rem}.w-3{width:.75rem}.w-3\\/5{width:60%}.w-4\\/5{width:80%}.w-5\\/6{width:83.333333%}.w-8{width:2rem}.w-9{width:2.25rem}.w-\\[200px\\]{width:200px}.w-\\[250px\\]{width:250px}.w-auto{width:auto}.w-full{width:100%}.w-screen{width:100vw}.min-w-8{min-width:2rem}.-translate-y-1\\/2{--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-2\\/4{--tw-translate-x: 50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.cursor-pointer{cursor:pointer}.cursor-text{cursor:text}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.flex-col{flex-direction:column}.items-end{align-items:flex-end}.items-center{align-items:center}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.gap-1{gap:.25rem}.gap-2{gap:.5rem}.gap-4{gap:1rem}.gap-5{gap:1.25rem}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:.5rem}.rounded-md{border-radius:.375rem}.border,.border-\\[1px\\]{border-width:1px}.border-b{border-bottom-width:1px}.border-dashed{border-style:dashed}.border-\\[\\#C0B5CF\\]{--tw-border-opacity: 1;border-color:rgb(192 181 207 / var(--tw-border-opacity))}.border-grey-200{border-color:hsl(var(--grey-200))}.border-primary{border-color:hsl(var(--primary))}.border-b-white{--tw-border-opacity: 1;border-bottom-color:rgb(255 255 255 / var(--tw-border-opacity))}.bg-\\[\\#f4f4ff\\]{--tw-bg-opacity: 1;background-color:rgb(244 244 255 / var(--tw-bg-opacity))}.bg-\\[\\#fafaff\\]{--tw-bg-opacity: 1;background-color:rgb(250 250 255 / var(--tw-bg-opacity))}.bg-primary{background-color:hsl(var(--primary))}.bg-primary-lighter{background-color:hsl(var(--primary-lighter))}.bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.bg-opacity-100{--tw-bg-opacity: 1}.p-4{padding:1rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.py-16{padding-top:4rem;padding-bottom:4rem}.py-4{padding-top:1rem;padding-bottom:1rem}.py-5{padding-top:1.25rem;padding-bottom:1.25rem}.py-8{padding-top:2rem;padding-bottom:2rem}.pb-1{padding-bottom:.25rem}.pb-10{padding-bottom:2.5rem}.pb-4{padding-bottom:1rem}.pb-5{padding-bottom:1.25rem}.pb-8{padding-bottom:2rem}.pb-\\[6\\.4px\\]{padding-bottom:6.4px}.pb-\\[9\\.6px\\]{padding-bottom:9.6px}.pt-1{padding-top:.25rem}.pt-10{padding-top:2.5rem}.pt-16{padding-top:4rem}.pt-2{padding-top:.5rem}.pt-\\[9\\.6px\\]{padding-top:9.6px}.text-left{text-align:left}.text-center{text-align:center}.text-\\[10px\\]{font-size:10px}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.font-semibold{font-weight:600}.tracking-\\[0\\.5px\\]{letter-spacing:.5px}.text-common{color:hsl(var(--common))}.text-grey-100{color:hsl(var(--grey-100))}.text-grey-400{color:hsl(var(--grey-400))}.text-grey-600{color:hsl(var(--grey-600))}.text-grey-700{color:hsl(var(--grey-700))}.text-primary-dark{color:hsl(var(--primary-dark))}.text-success{color:hsl(var(--success))}.shadow-xl{--tw-shadow: 0 20px 25px -5px rgb(0 0 0 / .1), 0 8px 10px -6px rgb(0 0 0 / .1);--tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-opacity{transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.tab-button.active:after{animation:text-underline-animation .3s linear forwards}#toast-container{position:fixed;top:20px;right:20px;width:300px;z-index:9999}.toast{display:flex;align-items:center;padding:15px;margin-bottom:10px;border-radius:5px;opacity:0;transform:translateY(-50px);transition:opacity .5s,transform .5s;box-shadow:0 1px 3px #0000001a,0 1px 2px -1px #0000001a}.toast.show{opacity:1;transform:translateY(0)}.toast.success{background-color:hsl(var(--success));color:#fff}.toast.error{background-color:hsl(var(--error));color:#fff}.toast .close-btn{margin-left:auto;cursor:pointer;color:#fff}.progress-container{width:100%;height:10px;background-color:#f3f3f3;border-radius:5px;overflow:hidden;position:relative}.progress-bar{height:100%;background-color:#4caf50;width:0;position:absolute;top:0;left:0;animation:progress 1s linear infinite}@keyframes progress{0%{width:0}to{width:100%}}.hover\\:underline:hover{text-decoration-line:underline}.group:hover .group-hover\\:flex{display:flex}.group:hover .group-hover\\:fill-white{fill:#fff}@media (min-width: 640px){.sm\\:my-8{margin-top:2rem;margin-bottom:2rem}.sm\\:min-h-\\[70\\%\\]{min-height:70%}.sm\\:w-\\[80\\%\\]{width:80%}.sm\\:items-center{align-items:center}.sm\\:p-0{padding:0}}@media (min-width: 768px){.md\\:mx-5{margin-left:1.25rem;margin-right:1.25rem}.md\\:mx-\\[18px\\]{margin-left:18px;margin-right:18px}.md\\:flex{display:flex}.md\\:w-\\[900px\\]{width:900px}}@media (max-width: 639px){.max-sm\\:px-4{padding-left:1rem;padding-right:1rem}.max-sm\\:py-5{padding-top:1.25rem;padding-bottom:1.25rem}}')),document.head.appendChild(t)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
var SpotflowCheckout=function(){"use strict";var st=Object.defineProperty;var it=(w,p,u)=>p in w?st(w,p,{enumerable:!0,configurable:!0,writable:!0,value:u}):w[p]=u;var a=(w,p,u)=>it(w,typeof p!="symbol"?p+"":p,u);const w=`<div role="dialog" class="relative z-10" aria-labelledby="modal-title" aria-modal="true">
  <div class="fixed inset-0 bg-[#fafaff] bg-opacity-100 transition-opacity" aria-hidden="true"></div>
  <div id="toast-container"></div>
  <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
      <div
        class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-100% sm:w-[80%] md:w-[900px] min-h-screen sm:min-h-[70%] flex">
        <aside class="px-2 py-4 md:flex justify-center w-[250px] bg-[#f4f4ff] overflow-auto hidden">
          <div class="w-full py-8">
            <div class="container-center">
              <img src="" alt="Nba Logo" id="merchantLogo" />
            </div>
            <h5 class="text-xl font-semibold text-common pt-10 pb-4 text-center">PAYMENT OPTIONS</h5>
            <div class="payment-options">

              <!-- Tab options -->
            </div>
          </div>
        </aside>
        <div class="main" id="main">

          <div class="box-container relative">
            <!-- header -->
             <button class="-right-[10px] -top-[15px] absolute text-xl" id="close-modal">x</button>
            <div class="header-container">
              <div class="container-between border-b border-b-white pb-[9.6px]">
                <p class="text-xs"></p>
                <p class="text-xs"></p>
              </div>
              <div class="container-between pt-[9.6px] pb-[6.4px]">
                <div class="align-center">
                  <p class="text-sm mr-1"> </p>
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
              <div class="content active" data-content="0"></div>
              <div class="content" data-content="1"></div>
              <div class="content" data-content="2"></div>
            </div>
            <!-- footer -->
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
</div>`,p="data:image/png;base64,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",u=`<form id="checkoutcard">
  <div class="box-container">
    <h5 class="content-heading">Enter your card details to pay</h5>
    <div class="mt-8">
      <div class="relative mx-6 mb-4">
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
      </div>

      <div class="grid grid-cols-2 gap-4 my-4 mx-6">
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

      <div class="mx-6 my-8">
        <button type="submit" disabled="true" class="details-form-button">
          <svg
          class="spinner hidden"
          id="spinner"
            viewBox="0 0 24 24"
          >
            <path
              d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
            ></path>
          </svg>
          <span id="details-form-button-text">
            Pay USD 14.99
          </span>
         
        </button>
      </div>
    </div>
  </div>
</form>
`,G=`<div id="checkoutcardpin">
  <div class="box-container w-4/5 mx-auto py-16">
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
          <button class="pin-cancel">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</div>
`,U=`<div id="checkoutcardotp">
  <div class="box-container w-4/5 mx-auto py-16">
    <div class="container-center h-[20vh] hidden" id="loader">
      <img src="" alt="loader gif" />
    </div>
    <div id="otp-content">
      <h5 class="otp-text">Kindly enter the OTP sent to 234249***3875</h5>

      <div class="mt-8">
        <div class="relative w-full grid grid-cols-3 gap-5">
          <div class="col-span-2">
            <input
              class="otp-input"
              type="tel"
              id="card-otp"
              name="otp"
              required
            />
          </div>

          <div>
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
`,R=`<div id="paymentWarning">
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
      <div>
        <button class="warning-button" fullWidth>
          Try again with your card
        </button>
      </div>
      <div>
        <button class="warning-button" fullWidth>
          Try again with transfer
        </button>
      </div>
      <div>
        <button class="warning-button mb-0" fullWidth>
          I already sent the money
        </button>
      </div>
    </div>
  </div>
</div>
`,x=`<div id="paymentSuccess">
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
        <button class="success-button">
            Close
        </button>
    </div>

</div>
</div>
</div>`;class h extends Error{constructor(A,t){super(A),this.status=t,this.name="FetchError"}}class E extends Error{constructor(A){super(A),this.name="AuthorizationError"}}const Q=r=>{if(!r)throw new E("Missing authorization token");const A=new Headers;return A.append("Content-Type","application/json"),A.append("Authorization",`Bearer ${r}`),A},m="http://dev-api.spotflow.one/api/v1",J=async(r,A)=>{try{const t=Q(r),e=await fetch(`${m}/payments`,{method:"POST",headers:t,body:JSON.stringify(A)});if(!e.ok){const i=await e.json();throw i.message?new h(i.message,e.status):new h("Network response was not ok",e.status)}return await e.json()}catch(t){throw t instanceof h?console.error(`FetchError: ${t.message} (status: ${t.status})`):t instanceof E?console.error(`AuthorizationError: ${t.message}`):console.error(`Unexpected error: ${t}`),t}},D=async(r,A)=>{try{const t=Q(r),e=await fetch(`${m}/payments/authorize`,{method:"POST",headers:t,body:JSON.stringify(A)});if(!e.ok){const i=await e.json();throw i.message?new h(i.message,e.status):new h("Network response was not ok",e.status)}return await e.json()}catch(t){throw t instanceof h?console.error(`FetchError: ${t.message} (status: ${t.status})`):t instanceof E?console.error(`AuthorizationError: ${t.message}`):console.error(`Unexpected error: ${t}`),t}},K=async(r,A)=>{try{const t=Q(r),e=await fetch(`${m}/payments/validate`,{method:"POST",headers:t,body:JSON.stringify(A)});if(!e.ok){const i=await e.json();throw i.message?new h(i.message,e.status):new h("Network response was not ok",e.status)}return await e.json()}catch(t){throw t instanceof h?console.error(`FetchError: ${t.message} (status: ${t.status})`):t instanceof E?console.error(`AuthorizationError: ${t.message}`):console.error(`Unexpected error: ${t}`),t}},O=async(r,A)=>{try{const t=Q(r),e=await fetch(`${m}/payments`,{method:"POST",headers:t,body:JSON.stringify(A)});if(!e.ok){const i=await e.json();throw i.message?new h(i.message,e.status):new h("Network response was not ok",e.status)}return await e.json()}catch(t){throw t instanceof h?console.error(`FetchError: ${t.message} (status: ${t.status})`):t instanceof E?console.error(`AuthorizationError: ${t.message}`):console.error(`Unexpected error: ${t}`),t}},N=async(r,A,t)=>{try{const e=Q(r),n=await fetch(`${m}/payments/verify?reference=${A}`,{method:"GET",headers:e,signal:t});if(!n.ok){const s=await n.json();throw s.message?new h(s.message,n.status):new h("Network response was not ok",n.status)}return await n.json()}catch(e){throw e instanceof h?console.error(`FetchError: ${e.message} (status: ${e.status})`):e instanceof E?console.error(`AuthorizationError: ${e.message}`):console.error(`Unexpected error: ${e}`),e}},M=()=>{const r=Date.now().toString(36),A="xxxx-xxxx-xxx-xxxx".replace(/[x]/g,()=>Math.floor(Math.random()*16).toString(16));return`SPF-${r}-${A}`.toUpperCase()},y=(r="")=>r.replace(/\D+/g,""),Y=r=>{if(!r)return r;const A=y(r);return`${A.slice(0,4)} ${A.slice(4,8)} ${A.slice(8,12)} ${A.slice(12,16)}`.trim()},z=r=>y(r).slice(0,3),q=r=>{const A=y(r);return A.length>=3?`${A.slice(0,2)} / ${A.slice(2,4)}`:A},P=r=>{if(!r)return r;const A=y(r);return`${A.slice(0,4)}${A.slice(4,8)}${A.slice(8,12)}${A.slice(12,16)}`.trim()},B=r=>{const A=Math.floor(r/60),t=r%60;return`${String(A).padStart(2,"0")}:${String(t).padStart(2,"0")}`},Z=(r,A)=>{const t=document.createElement("div");t.classList.add("toast",A);const e=document.createElement("span");e.textContent=r,t.appendChild(e);const n=document.createElement("span");return n.textContent="×",n.classList.add("close-btn"),n.onclick=()=>I(t),t.appendChild(n),t},d=(r,A,t=3e3)=>{const e=document.getElementById("toast-container");if(e){const n=Z(r,A);e.appendChild(n),n.offsetHeight,n.classList.add("show"),setTimeout(()=>I(n),t)}},I=r=>{r.classList.remove("show"),r.addEventListener("transitionend",()=>{r.parentElement&&r.parentElement.removeChild(r)})},v="data:image/gif;base64,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";class f{constructor(A,t,e,n){a(this,"cardDetailsValues");a(this,"cardPin");a(this,"cardOtp");a(this,"contents");a(this,"container");a(this,"closeModal");a(this,"email");a(this,"token");a(this,"_currentStep");a(this,"activeRef");this.container=A,this.closeModal=t,this.token=e,this.email=n,this._currentStep=1,this.cardDetailsValues={number:"",expiry:"",cvv:""},this.cardPin="",this.cardOtp="",this.activeRef="",this.contents=document.querySelectorAll(".content"),this.renderCardContent(),this.attachInputListeners()}get currentStep(){return this._currentStep}set currentStep(A){this._currentStep=A,this.renderCardContent()}attachInputListeners(){const A=this.container.querySelector('input[name="number"]'),t=this.container.querySelector('input[name="expiry"]'),e=this.container.querySelector('input[name="cvv"]'),n=this.container.querySelector(".details-form-button"),i=document.querySelector("#checkoutcard"),s=Array.from(this.container.querySelectorAll(".pin-input")),o=this.container.querySelector(".otp-input"),c=this.container.querySelector(".otp-button"),C=this.container.querySelector(".success-button");A&&A.addEventListener("input",l=>this.handleInputChange(l,n)),t&&t.addEventListener("input",l=>this.handleInputChange(l,n)),e&&e.addEventListener("input",l=>this.handleInputChange(l,n)),i&&i.addEventListener("submit",l=>this.handleSubmit(l)),s.forEach((l,S)=>{l.addEventListener("input",g=>this.handlePinInputChange(g,S,s)),l.addEventListener("paste",g=>this.handlePinPaste(g,s))}),o&&o.addEventListener("input",l=>this.handleOtpInput(l,c)),c&&c.addEventListener("click",l=>this.submitOtp(l)),C&&C.addEventListener("click",()=>this.closeModal())}handleInputChange(A,t){const e=A.target,{name:n,value:i}=e;let s=i;n==="number"?s=Y(i):n==="expiry"?s=q(i):n==="cvv"&&(s=z(i)),this.cardDetailsValues={...this.cardDetailsValues,[n]:s},e.value=s,this.cardDetailsValues.number&&this.cardDetailsValues.expiry&&this.cardDetailsValues.cvv&&t&&t.removeAttribute("disabled")}handlePinRequest(){const A=this.container.querySelector("#loader"),t=this.container.querySelector("#pin-content");if(this.cardPin.length===4){const e={authorization:{pin:this.cardPin},reference:this.activeRef};setTimeout(()=>{var i;A&&t&&(A.classList.remove("hidden"),(i=A.querySelector("img"))==null||i.setAttribute("src",v),t.classList.add("hidden")),D(this.token,e).then(s=>{s.status==="failed"?s.providerMessage?d(s.providerMessage,"error"):d("Payment failed","error"):(d("Payment Authorized!","success"),this.currentStep=3)}).catch(s=>{d(s.message,"error")}).finally(()=>{A&&t&&(A.classList.add("hidden"),t.classList.remove("hidden"))})},500)}}handlePinInputChange(A,t,e){this.cardPin="",A.target.value?t<e.length-1&&e[t+1].focus():t>0&&e[t-1].focus(),this.cardPin=e.map(s=>s.value).join(""),this.handlePinRequest()}handlePinPaste(A,t){var i;A.preventDefault(),this.cardPin="";const n=(((i=A.clipboardData)==null?void 0:i.getData("text").trim())||"").split("");t.forEach((s,o)=>{s.value=n[o]||""});for(let s=0;s<t.length;s++)if(!t[s].value){t[s].focus();break}this.cardPin=t.map(s=>s.value).join(""),this.handlePinRequest()}handleOtpInput(A,t){const e=A.target,{value:n}=e;this.cardOtp="",this.cardOtp=n,this.cardOtp.length>3&&t&&t.removeAttribute("disabled")}submitOtp(A){var s;A.preventDefault();const t=this.container.querySelector("#loader"),e=this.container.querySelector("#otp-content"),n={authorization:{otp:this.cardPin},reference:this.activeRef};t&&e&&(t.classList.remove("hidden"),(s=t.querySelector("img"))==null||s.setAttribute("src",v),e.classList.add("hidden")),K(this.token,n).then(o=>{o.status==="failed"?o.providerMessage?d(o.providerMessage,"error"):d("Payment failed","error"):o.status==="successful"&&(this.currentStep=5)}).catch(o=>{d(o.message,"error")}).finally(()=>{t&&e&&(t.classList.add("hidden"),e.classList.remove("hidden"))})}async handleSubmit(A){var s,o;A.preventDefault();const t=this.container.querySelector(".spinner"),e=this.container.querySelector("#details-form-button-text"),n={amount:14.99,channel:"card",currency:"USD",customer:{email:this.email},reference:M(),card:{pan:P(this.cardDetailsValues.number),cvv:this.cardDetailsValues.cvv,expiryMonth:(s=this.cardDetailsValues)==null?void 0:s.expiry.split("/")[0].trim(),expiryYear:(o=this.cardDetailsValues)==null?void 0:o.expiry.split("/")[1].trim()}};t&&e&&(t.classList.remove("hidden"),e.classList.add("hidden")),J(this.token,n).then(c=>{c.status==="failed"?c.providerMessage?d(c.providerMessage,"error"):d("Payment failed","error"):c.status==="pending_authorization"&&(d("Payment Created!","success"),this.activeRef=c.reference,this.currentStep=2)}).catch(c=>{d(c.message,"error")}).finally(()=>{t&&e&&(t.classList.add("hidden"),e.classList.remove("hidden"))})}getCardStepContent(){switch(this.currentStep){case 1:return u;case 2:return G;case 3:return U;case 4:return R;case 5:return x;default:return u}}renderCardContent(){this.contents[0]&&(this.contents[0].innerHTML=this.getCardStepContent(),this.attachInputListeners())}}const k=`<div>
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
`,W=`<div id="paymentWarning">
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
</div>`,V=`<div id="trasferConfirmationOne">
    <div class="box-container">
        <div class="text-center mt-7 w-3/5 mx-auto">
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
    </div>`,j=`<div id="trasferConfirmationOne">
  <div class="box-container">
    <div class="text-center mt-7 w-3/5 mx-auto">
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
`,X=`<div id="trasferConfirmationProgress">
  <div class="box-container">
    <div class="text-center mt-7 w-4/5 mx-auto">
      <h5
        class="text-center text-grey-400 w-4/5 mx-auto mt-4 mb-7 flex text-xl"
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
`;class ${constructor(A,t,e,n){a(this,"container");a(this,"contents");a(this,"closeModal");a(this,"email");a(this,"token");a(this,"_currentStep");a(this,"activeRef");a(this,"paymentResponse");a(this,"initialTime");a(this,"timeLeft");a(this,"timerId");a(this,"abortController",null);this.container=A,this.contents=document.querySelectorAll(".content"),this.closeModal=t,this.token=e,this.email=n,this._currentStep=1,this.renderTransferContent(),this.paymentResponse=null,this.activeRef="",this.initialTime=600,this.timeLeft=this.initialTime,this.timerId=null,this.attachInputListeners(),this.currentStep===1&&(this.abortController=new AbortController,this.createTransfer())}get currentStep(){return this._currentStep}set currentStep(A){this._currentStep=A,this.renderTransferContent(),A===1&&this.createTransfer(),A===5&&this.startTimer("check")}attachInputListeners(){const A=this.container.querySelector("#transfer-acn"),t=this.container.querySelector("#copy-acn"),e=this.container.querySelector("#acn-tooltip"),n=this.container.querySelector("#transfer-amount"),i=this.container.querySelector("#copy-amount"),s=this.container.querySelector("#amount-tooltip"),o=this.container.querySelector("#transfer-try-again"),c=this.container.querySelector("#transfer-sent"),C=this.container.querySelector(".transfer-button"),l=this.container.querySelector("#show-acn"),S=this.container.querySelector("#ctd-timer"),g=this.container.querySelector(".success-button"),F=this.container.querySelector("#confirm-one"),b=this.container.querySelector(".transfer-close");if(t&&A&&t.addEventListener("click",()=>{e&&this.copyToClipboard(A.innerHTML,e)}),i&&n&&i.addEventListener("click",()=>{s&&this.copyToClipboard(n.innerHTML.split(" ")[1],s)}),C&&C.addEventListener("click",()=>{this.abortController&&(this.abortController.abort(),this.currentStep=5)}),o&&o.addEventListener("click",()=>{this.currentStep=1}),c&&c.addEventListener("click",()=>{this.abortController&&(this.abortController.abort(),this.currentStep=5)}),l&&l.addEventListener("click",()=>{this.stopProgressBar(),this.currentStep=1}),this.currentStep===5){this.initialTime=300,this.timeLeft=this.initialTime,S&&(S.innerHTML=B(this.initialTime));const nt=3e4;this.abortController=new AbortController,setTimeout(()=>{this.verifyTransfer(this.token,nt,()=>{this.currentStep=6},T=>{console.error("Polling failed:",T),d(T.message,"error")})},5e3),this.startTimer("check")}F&&F.addEventListener("click",()=>{this.currentStep=4}),g&&g.addEventListener("click",()=>this.closeModal()),b&&b.addEventListener("click",()=>this.closeModal())}async createTransfer(){requestAnimationFrame(()=>{var i;const A=this.container.querySelector("#loader"),t=this.container.querySelector("#details-content");A&&t&&(A.classList.remove("hidden"),(i=A.querySelector("img"))==null||i.setAttribute("src",v),t.classList.add("hidden"));const e={amount:14.99,channel:"bank_transfer",currency:"USD",customer:{email:this.email},reference:M()};O(this.token,e).then(s=>{if(s.status==="failed")s.providerMessage?d(s.providerMessage,"error"):d("Payment failed","error"),this.currentStep=2;else{A&&t&&(A.classList.add("hidden"),t.classList.remove("hidden")),this.activeRef=s.reference,this.paymentResponse=s,this.updateTransferDetailsContent();const o=3e4;setTimeout(()=>{this.verifyTransfer(this.token,o,()=>{this.currentStep=6},c=>{console.error("Polling failed:",c),d(c.message,"error")})},o)}}).catch(s=>{d(s.message,"error")})})}async verifyTransfer(A,t,e,n){let i=0,s=t,o=!0,c;this.abortController&&(c=this.abortController.signal);const C=async()=>{if(this.timeLeft<=0){o=!1,n(new Error("Max polling time reached")),this.currentStep=2;return}i+=1;try{const l=await N(A,this.activeRef,c);l.status==="failed"?o&&(s=t*(i+1),setTimeout(C,s)):(o=!1,e(l))}catch{o&&(s=t*(i+1),setTimeout(C,s))}};C()}getTransferStepContent(){switch(this.currentStep){case 1:return k;case 2:return W;case 3:return V;case 4:return j;case 5:return X;case 6:return x;default:return k}}updateTransferDetailsContent(){var i;const A=this.container.querySelectorAll(".transfer-curr-amount"),t=this.container.querySelector("#transfer-bank"),e=this.container.querySelector("#transfer-acn"),n=this.container.querySelector("#time-left");this.paymentResponse&&(A.length&&A.forEach(s=>{var o,c;return s.innerHTML=`${(o=this.paymentResponse)==null?void 0:o.currency} ${(c=this.paymentResponse)==null?void 0:c.amount}`}),t&&this.paymentResponse.bankDetails&&(t.innerHTML=(i=this.paymentResponse.bankDetails)==null?void 0:i.bankName),e&&this.paymentResponse.bankDetails&&(e.innerHTML=this.paymentResponse.bankDetails.accountNumber),n&&(n.innerHTML=B(this.initialTime)),this.startTimer("poll"))}renderTransferContent(){this.contents[1]&&(this.contents[1].innerHTML=this.getTransferStepContent(),this.attachInputListeners())}startTimer(A){const t=this.container.querySelector("#ctd-timer");this.stopTimer(),this.timerId=window.setInterval(()=>{this.timeLeft>0?(this.timeLeft-=1,A==="poll"?this.updateProgressTimerContent():t&&(t.innerHTML=B(this.timeLeft),this.startTimer("check"))):(this.stopTimer(),A==="check"&&(this.currentStep=3))},1e3)}updateProgressTimerContent(){const t=2*Math.PI*40,n=(this.initialTime-this.timeLeft)/this.initialTime*100/100*t,i=this.container.querySelector(".circle-progress"),s=this.container.querySelector("#time-left");i&&(i.setAttribute("stroke-dasharray",`${t}`),i.setAttribute("stroke-dashoffset",`${n}`)),s&&(s.innerHTML=B(this.timeLeft))}stopTimer(){this.timerId!==null&&(clearInterval(this.timerId),this.timerId=null)}stopProgressBar(){const A=this.container.querySelector(".progress-bar");A&&(A.style.animationPlayState="paused")}copyToClipboard(A,t){navigator.clipboard.writeText(A).then(()=>{t.innerHTML="Copied!"}).catch(()=>{t.innerHTML="Failed to copy"})}destroyTimer(){this.stopTimer()}stopPolling(){this.abortController&&this.abortController.abort()}}const L=`<div id="ussdBanks">
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
`,_=`<div id="viewCode">
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
`,H=[{label:"Pay with Card",icon:`<svg width="23" height="19" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path class="group-hover:fill-white" d="M12.7499 6.99996H14.2499C14.6639 6.99996 14.9999 6.66398 14.9999 6.24998C14.9999 5.92756 14.7936 5.65819 14.5079 5.55259L17.78 2.28048C18.0733 1.98718 18.0733 1.51328 17.78 1.21997C17.4867 0.926671 17.0128 0.926679 16.7195 1.21997L13.4474 4.49209C13.3417 4.20633 13.0724 4.00011 12.75 4.00011C12.336 4.00011 12 4.33609 12 4.75008V6.25003C12 6.66402 12.3359 6.99996 12.7499 6.99996Z" fill="#9E9BA1"/>
<path class="group-hover:fill-white" fill-rule="evenodd" clip-rule="evenodd" d="M22.0999 10.6729C22.0999 10.3565 21.8534 10.1001 21.5492 10.1001H10.6507C10.3465 10.1001 10.0999 10.3565 10.0999 10.6729V11.883H22.0999V13.0715H10.0999V17.5273C10.0999 17.8437 10.3465 18.1001 10.6507 18.1001H21.5492C21.8534 18.1001 22.0999 17.8437 22.0999 17.5273V10.6729ZM11.5285 15.4487C11.3707 15.4487 11.2428 15.5817 11.2428 15.7458V16.3401C11.2428 16.5042 11.3707 16.6372 11.5285 16.6372H12.0999C12.2577 16.6372 12.3856 16.5042 12.3856 16.3401V15.7458C12.3856 15.5817 12.2577 15.4487 12.0999 15.4487H11.5285Z" fill="#9E9BA1"/>
<path class="group-hover:fill-white" d="M6.88262 0.261719C7.86089 0.261719 8.74721 0.655845 9.38178 1.37154C10.0242 2.09609 10.3372 3.07136 10.2632 4.11714C10.1161 6.19882 8.6021 7.89216 6.88262 7.89216C5.16315 7.89216 3.6465 6.19848 3.50172 4.11645C3.42867 3.06114 3.73976 2.08383 4.37825 1.36473C5.00989 0.65346 5.89914 0.261719 6.88262 0.261719Z" fill="#9E9BA1"/>
<path class="group-hover:fill-white" d="M0.70806 15.4224C0.844564 15.4904 0.993346 15.5246 1.14358 15.5225H9.09995V10.6C9.09995 10.0621 9.38312 9.59027 9.80853 9.32553C8.90234 8.94337 7.90107 8.73999 6.88256 8.73999C5.32293 8.73999 3.80373 9.21653 2.60441 10.0824C1.25445 11.0577 0.395559 12.4471 0.120348 14.101C0.0570892 14.4801 0.142522 14.8549 0.354473 15.1293C0.450765 15.2543 0.571556 15.3544 0.70806 15.4224Z" fill="#9E9BA1"/>
</svg>`,key:"card"},{label:"Pay with Transfer",icon:`<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path class="group-hover:fill-white" d="M17.0141 7.64786H0.985866C0.44523 7.64786 0 8.05497 0 8.54931V17.0986C0 17.5929 0.44523 18 0.985866 18H17.0141C17.5548 18 18 17.5929 18 17.0986V8.54931C18 8.05497 17.5548 7.64786 17.0141 7.64786ZM16.6007 15.0049C15.6466 15.1794 14.8834 15.8482 14.7244 16.7206H3.30742C3.11661 15.8482 2.38516 15.1503 1.4311 15.0049V10.643C2.38516 10.4685 3.14841 9.79972 3.30742 8.92734H14.7244C14.9152 9.79972 15.6466 10.4976 16.6007 10.643V15.0049Z" fill="#9E9BA1"/>
<path class="group-hover:fill-white" d="M3.23733 11.9998C2.83133 11.9998 2.51233 12.3196 2.51233 12.7267C2.51233 13.1338 2.83133 13.4537 3.23733 13.4537C3.64333 13.4537 3.96233 13.1338 3.96233 12.7267C3.96233 12.3196 3.64333 11.9998 3.23733 11.9998Z" fill="#9E9BA1"/>
<path class="group-hover:fill-white" d="M14.6216 12C14.2161 12 13.8975 12.3198 13.8975 12.7269C13.8975 13.1341 14.2161 13.4539 14.6216 13.4539C15.0271 13.4539 15.3458 13.1341 15.3458 12.7269C15.3747 12.3198 15.0271 12 14.6216 12Z" fill="#9E9BA1"/>
<path class="group-hover:fill-white" d="M8.99644 9.99997C7.3184 9.99997 5.99994 11.32 5.99994 13C5.99994 14.68 7.3184 16 8.99644 16C10.6745 16 11.9929 14.68 11.9929 13C12.1128 11.32 10.6745 9.99997 8.99644 9.99997Z" fill="#9E9BA1"/>
<path class="group-hover:fill-white" d="M12.0212 6.19386C12.212 6.39741 12.5618 6.39741 12.7526 6.19386L14.9152 3.83845C15.1696 3.54766 14.947 3.11147 14.5336 3.11147H13.4841V0.436187C13.4841 0.174475 13.2615 0 13.007 0H11.8304C11.5442 0 11.3533 0.203554 11.3533 0.436187V3.11147H10.3039C9.89044 3.11147 9.66783 3.54766 9.92224 3.83845L12.0212 6.19386Z" fill="#9E9BA1"/>
<path class="group-hover:fill-white" d="M5.24738 6.19386C5.43819 6.39741 5.78802 6.39741 5.97883 6.19386L8.14137 3.83845C8.39579 3.54766 8.17318 3.11147 7.75975 3.11147H6.71028V0.436187C6.71028 0.174475 6.48766 0 6.23325 0H5.05657C4.77035 0 4.57954 0.203554 4.57954 0.436187V3.11147H3.53007C3.11664 3.11147 2.89402 3.54766 3.14844 3.83845L5.24738 6.19386Z" fill="#9E9BA1"/>
</svg>
`,key:"transfer"},{label:"Pay with USSD",icon:`<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path class="group-hover:fill-white" d="M17 10.994H12.7L13.43 7.00603H17C17.2652 7.00603 17.5196 6.90099 17.7071 6.71402C17.8946 6.52705 18 6.27346 18 6.00905C18 5.74463 17.8946 5.49104 17.7071 5.30407C17.5196 5.1171 17.2652 5.01206 17 5.01206H13.79L14.48 1.21355C14.5073 1.08026 14.5069 0.942815 14.4789 0.809676C14.4509 0.676537 14.3958 0.550522 14.3171 0.439385C14.2385 0.328249 14.1378 0.234342 14.0213 0.163445C13.9049 0.0925489 13.7751 0.046162 13.64 0.02714C13.5057 -0.0047662 13.3662 -0.00858576 13.2303 0.0159217C13.0944 0.0404292 12.965 0.0927325 12.8504 0.169536C12.7358 0.24634 12.6384 0.345978 12.5643 0.462174C12.4902 0.578369 12.4411 0.708602 12.42 0.844667L11.67 5.01206H7.79L8.48 1.21355C8.50727 1.08026 8.50688 0.942815 8.47887 0.809676C8.45086 0.676537 8.39582 0.550522 8.31714 0.439385C8.23845 0.328249 8.13778 0.234342 8.02133 0.163445C7.90488 0.0925489 7.77511 0.046162 7.64 0.02714C7.50566 -0.0047662 7.36615 -0.00858576 7.23026 0.0159217C7.09437 0.0404292 6.96504 0.0927325 6.85042 0.169536C6.73581 0.24634 6.63839 0.345978 6.56431 0.462174C6.49024 0.578369 6.4411 0.708602 6.42 0.844667L5.67 5.01206H1C0.734784 5.01206 0.48043 5.1171 0.292893 5.30407C0.105357 5.49104 0 5.74463 0 6.00905C0 6.27346 0.105357 6.52705 0.292893 6.71402C0.48043 6.90099 0.734784 7.00603 1 7.00603H5.3L4.57 10.994H1C0.734784 10.994 0.48043 11.099 0.292893 11.286C0.105357 11.4729 0 11.7265 0 11.991C0 12.2554 0.105357 12.509 0.292893 12.6959C0.48043 12.8829 0.734784 12.9879 1 12.9879H4.21L3.52 16.7864C3.49273 16.9197 3.49312 17.0572 3.52113 17.1903C3.54914 17.3235 3.60418 17.4495 3.68286 17.5606C3.76155 17.6718 3.86222 17.7657 3.97867 17.8366C4.09512 17.9075 4.22489 17.9538 4.36 17.9729C4.49434 18.0048 4.63385 18.0086 4.76974 17.9841C4.90563 17.9596 5.03496 17.9073 5.14958 17.8305C5.26419 17.7537 5.36161 17.654 5.43569 17.5378C5.50976 17.4216 5.5589 17.2914 5.58 17.1553L6.33 12.9879H10.21L9.52 16.7864C9.49273 16.9197 9.49312 17.0572 9.52113 17.1903C9.54914 17.3235 9.60418 17.4495 9.68286 17.5606C9.76155 17.6718 9.86222 17.7657 9.97867 17.8366C10.0951 17.9075 10.2249 17.9538 10.36 17.9729C10.4943 18.0048 10.6338 18.0086 10.7697 17.9841C10.9056 17.9596 11.035 17.9073 11.1496 17.8305C11.2642 17.7537 11.3616 17.654 11.4357 17.5378C11.5098 17.4216 11.5589 17.2914 11.58 17.1553L12.33 12.9879H17C17.2652 12.9879 17.5196 12.8829 17.7071 12.6959C17.8946 12.509 18 12.2554 18 11.991C18 11.7265 17.8946 11.4729 17.7071 11.286C17.5196 11.099 17.2652 10.994 17 10.994ZM6.7 10.994L7.43 7.00603H11.3L10.57 10.994H6.7Z" fill="#9E9BA1"/>
</svg>
`,key:"ussd"}],tt=[{name:"First City Monument Bank",code:"*329#"},{name:"First Bank",code:"*268#"}];class At{constructor(){a(this,"contents");a(this,"banks");a(this,"_currentStep");this.contents=document.querySelectorAll(".content"),this.banks=tt,this._currentStep=1,this.renderUssdContent()}get currentStep(){return this._currentStep}set currentStep(A){this._currentStep=A,this.renderUssdContent()}getUssdStepContent(){switch(this.currentStep){case 1:return L;case 2:return _;case 3:return R;case 4:return x;default:return L}}renderUssdContent(){this.contents[2]&&(this.contents[2].innerHTML=this.getUssdStepContent())}renderSearchOptions(A,t,e){e.innerHTML="",A.forEach(n=>{const i=document.createElement("div");i.classList.add("bank-option"),i.textContent=n.name,i.addEventListener("click",()=>{t.value=n.name,e.style.display="none"}),e.appendChild(i)}),e.style.display=A.length?"block":"none"}searchBanksOnInput(A,t){const e=A.value.toLowerCase(),n=this.banks.filter(i=>i.name.toLowerCase().includes(e));this.renderSearchOptions(n,A,t)}openSearchOnFocus(A,t){this.renderSearchOptions(this.banks,A,t)}closeSearchOptionsOutsideFocus(A,t,e){!t.contains(A.target)&&!e.contains(A.target)&&(e.style.display="none")}}class et{constructor(A,t){a(this,"modalContainer");a(this,"currentPaymentMethod");a(this,"currentStep");a(this,"container");a(this,"card");a(this,"transfer");a(this,"ussd");a(this,"merchantKey");a(this,"email");this.modalContainer=document.createElement("div"),this.modalContainer.innerHTML=w,document.body.appendChild(this.modalContainer),this.currentPaymentMethod=0,this.currentStep=1,this.container=document.querySelectorAll(".content")[0],this.merchantKey=A,this.email=t,this.updatePaymentMethodView(this.merchantKey,this.email),this.attachInputListeners()}attachInputListeners(){const A=this.modalContainer.querySelector(".success-button"),t=this.modalContainer.querySelector("#close-modal");A&&(this.cleanup(),A.addEventListener("click",()=>{document.body.removeChild(this.modalContainer)})),t&&(this.cleanup(),t.addEventListener("click",()=>{document.body.removeChild(this.modalContainer)}))}displayTabLayout(){const A=document.querySelectorAll(".tab-button"),t=document.querySelector(".box-container-method");A&&t&&A.forEach(e=>{e.addEventListener("click",n=>{if(n.currentTarget instanceof HTMLElement&&n.currentTarget.dataset.tab){const i=parseInt(n.currentTarget.dataset.tab);this.updatePaymentMethodView(this.merchantKey,this.email),this.setCurrentPaymentMethod(i),this.cleanup(),this.renderPaymentMethodContent(),this.attachInputListeners()}})}),this.updatePaymentMethodView(this.merchantKey,this.email),this.renderPaymentMethodContent(),this.attachInputListeners(),this.setCurrentPaymentMethod(this.currentPaymentMethod)}updatePaymentMethodView(A,t){switch(this.currentPaymentMethod){case 0:return this.card=new f(this.modalContainer,()=>this.closeModal(),A,t);case 1:return this.transfer=new $(this.modalContainer,()=>this.closeModal(),A,t);case 2:return this.ussd=new At;default:return this.card=new f(this.modalContainer,()=>this.closeModal(),A,t)}}renderPaymentMethodContent(){return(()=>{switch(this.currentPaymentMethod){case 0:return this.card.renderCardContent();case 1:return this.transfer.renderTransferContent();case 2:return this.ussd.renderUssdContent();default:return this.card.renderCardContent()}})()}setCurrentPaymentMethod(A){this.currentPaymentMethod=A;const t=document.querySelectorAll(".tab-button"),e=document.querySelectorAll(".content");t.forEach(n=>n.classList.remove("active")),e.forEach(n=>n.classList.remove("active")),t[A]&&t[A].classList.add("active"),e[A]&&e[A].classList.add("active")}cleanup(){this.transfer&&this.transfer.destroyTimer()}closeModal(){document.body.removeChild(this.modalContainer)}setup(){const A=document.getElementById("merchantLogo");A&&A.setAttribute("src",p);let t=document.querySelector(".payment-options");t&&(t.innerHTML=`<div> 
      ${H.map((s,o)=>`
            <div class="tab">   
              <button class="tab-button group" data-tab="${o}"> 
              <div class="min-w-8">
                ${s.icon}
                </div>
                <span>${s.label}</span>
              </button>
            </div>
          `).join("")}
      </div>`);const e=document.querySelectorAll(".tab-button");H.forEach((s,o)=>{const c=e[o];if(c){const C=c.querySelector(".tab-button-icon"),l=c.querySelector(".tab-button-label");C&&(C.innerHTML=s.icon),l&&(l.textContent=s.label),c.dataset.tab=o.toString(),c.addEventListener("click",()=>{this.setCurrentPaymentMethod(o)})}}),this.displayTabLayout();const n=this.modalContainer.querySelector("#paymentWarning"),i=n==null?void 0:n.querySelector("#payment-warning-text");i&&this.displayPaymentWarningText(this.currentPaymentMethod,i)}displayPaymentWarningText(A,t){const e=()=>{switch(A){case 0:return"Incorrect otp. please retry with the correct otp";case 1:return"Account expired";case 2:return"Please dial the ussd shortcode";default:return"Error"}};t&&(t.innerHTML=e())}}return et}();
