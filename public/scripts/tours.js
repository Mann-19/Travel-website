// Get the cardId from the URL parameters
const urlParams = new URLSearchParams(window.location.search);
const cardId = urlParams.get('cardId');

console.log(cardId);
