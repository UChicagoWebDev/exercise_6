/* For index.html */

// TODO: If a user clicks to create a chat, create an auth key for them
// and save it. Redirect the user to /chat/<chat_id>
function createChat() {

}

function goToChat() {
  document.querySelector(".hero").style.display = "none";
  document.querySelector(".auth").style.display = "none";
  document.querySelector(".chat").style.display = "block";
}

function goToIndex() {
  document.querySelector(".auth").style.display = "none";
  document.querySelector(".chat").style.display = "none";
  document.querySelector(".hero").style.display = "block";
}

function goToAuth() {
  document.querySelector(".chat").style.display = "none";
  document.querySelector(".hero").style.display = "none";
  document.querySelector(".auth").style.display = "block";
}

/* For chat.html */

// TODO: Fetch the list of existing chat messages.
// POST to the API when the user posts a new message.
// Automatically poll for new messages on a regular interval.
function postMessage() {
  return;
}

function getMessages() {
  return;
}

function startMessagePolling() {
  return;
}
