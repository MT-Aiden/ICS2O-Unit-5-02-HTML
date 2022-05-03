// Aiden McLeod
// ICS2O-Unit-5-02-HTML
// May 1 2022

'use strict'
/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-02-HTML/sw.js", {
    scope: "/ICS2O-Unit5-02-HTML/",
  })
}

/**
 * Checks if the integer the user chose is negative or positive.
 */
function onButtonClick() {
  const integer = document.getElementById("integer").value

  if (integer >= 0) {
    document.getElementById("result").innerHTML = "<h5>" + integer + " is a positive integer.</h5>"
  } else {
    document.getElementById("result").innerHTML = "<h5>" + integer + " is a negative integer.</h5>"
  }
}