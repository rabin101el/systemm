const chatBox = document.getElementById("chat-box");
const userMessageInput = document.getElementById("user-message");
const sendButton = document.getElementById("send-button");

sendButton.addEventListener("click", sendMessage);

function sendMessage() {
  const userMessage = userMessageInput.value.trim();
  if (userMessage == "ZZzOeg5") {
    addUserMessage(userMessage);
    // Replace the bot's response with an actual response from your chatbot service or logic
    addBotMessage("id: prophet_muhammad_is_pedophile@mail.ru  \n \n pass: EliteIdss@12445"
    
    );
    userMessageInput.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
  }
  else{
       addBotMessage("Incorrect");
 
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




