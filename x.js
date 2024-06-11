// ==UserScript==
// @name        PreventPageVisibility 
// @namespace   https://github.com/IceWreck
// @match       *://*/*
// @run-at      document-start
// @grant       none
// @version     1.1
// @author      IceWreck
// @description Block websites from knowing if you switched tabs/windows
// ==/UserScript==

let events_to_block = [
  "visibilitychange",
  "webkitvisibilitychange",
  "mozvisibilitychange",
  "hasFocus",
  "blur",
  "focus",
  "mouseleave"
]

for (var event_name of events_to_block) {
  alert(event_name);
}
