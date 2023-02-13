/**
Napišite JavaScript kod koji će u HTML element s ID "date" upisati trenutni datum i vrijeme.
 */
const dateElement = document.querySelector("#date");
const today = new Date();
dateElement.innerHTML = today.toLocaleString();
console.log("Hello world!");