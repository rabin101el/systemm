const chatBox = document.getElementById("chat-box");
const userMessageInput = document.getElementById("user-message");
const sendButton = document.getElementById("send-button");

sendButton.addEventListener("click", sendMessage);

function sendMessage() {
  const userMessage = userMessageInput.value.trim();
  if (userMessage == "abc123") {
    addUserMessage(userMessage);
    // Replace the bot's response with an actual response from your chatbot service or logic
    addBotMessage("id: elite");
    userMessageInput.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
  }
  else{
       addBotMessage("error");
 
  }
}

function addUserMessage(message) {
  const userDiv = document.createElement("div");
  userDiv.className = "user-message";
  userDiv.textContent = message;
  chatBox.appendChild(userDiv);
}

function addBotMessage(message) {
  const botDiv = document.createElement("div");
  botDiv.className = "bot-message";
  botDiv.textContent = message;
  chatBox.appendChild(botDiv);
}
