// ==UserScript==
// @name        Prevent Page Visibility
// @namespace   Disable Page Visibility API
// @description Block websites from knowing if you switched tabs/windows
// @author      @SalahDesDz
// @version     0.1
// @run-at      document-start
// @grant       none
// @match       *://*/*
// @license     MIT
// ==/UserScript==
 
// This userscript blocks the page visibility API and to some extent the old blur/focus APIs.
 
const eventsToBlock = [
  "visibilitychange",
  "webkitvisibilitychange",
  "mozvisibilitychange",
  "hasFocus",
  "blur",
  "focus",
  "mouseleave",
];
 
const preventDefaultHandler = (event) => {
  event.preventDefault();
  event.stopPropagation();
  event.stopImmediatePropagation();
};
 
for (const eventName of eventsToBlock) {
  document.addEventListener(eventName, preventDefaultHandler, true);
}
 
for (const eventName of eventsToBlock) {
  window.addEventListener(eventName, preventDefaultHandler, true);
}
 
document.hasFocus = () => true;
document.onvisibilitychange = null;
Object.defineProperty(document, "visibilityState", { value: "visible" });
Object.defineProperty(document, "hidden", { value: false });
Object.defineProperty(document, "mozHidden", { value: false });
