const chatBox = document.getElementById("chatBox");
const input = document.getElementById("userInput");

// ADD MESSAGE FUNCTION
function addMessage(text, type) {
  const msg = document.createElement("div");
  msg.classList.add("message", type);
  msg.innerText = text;

  chatBox.appendChild(msg);

  // AUTO SCROLL
  chatBox.scrollTop = chatBox.scrollHeight;
}

// TYPING EFFECT (BOT LOADING)
function showTyping() {
  const typing = document.createElement("div");
  typing.classList.add("message", "bot");
  typing.id = "typing";
  typing.innerText = "Typing...";
  chatBox.appendChild(typing);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function removeTyping() {
  const typing = document.getElementById("typing");
  if (typing) typing.remove();
}

// BOT LOGIC (SMART)
function getBotReply(message) {
  message = message.toLowerCase();

  if (message.includes("hi") || message.includes("hello")) {
    return "👋 Hello! Ask me about voting, voter ID or elections.";
  }

  if (message.includes("apply") || message.includes("voter id apply")) {
    return "🪪 You can apply for Voter ID online (NVSP portal) or at Election Office.";
  }

  if (message.includes("can i vote")) {
    return "✔ If you are 18+ years old and registered in voter list, you can vote.";
  }

  if (message.includes("why vote")) {
    return "🗳️ Voting is your right and helps choose good leaders for the country.";
  }

  if (message.includes("importance")) {
    return "📌 Voting gives you power to choose leaders and strengthens democracy.";
  }

  if (message.includes("advantage") || message.includes("benefit")) {
    return "✔ Advantages: You choose leaders, support development, and participate in democracy.";
  }

  if (message.includes("disadvantage") || message.includes("not vote")) {
    return "❌ Not voting can lead to wrong leaders and slow development.";
  }

  if (message.includes("steps") || message.includes("voting steps")) {
    return "🗳️ Steps: 1. Go to booth 2. Show ID 3. Verify fingerprint 4. Cast vote.";
  }

  if (message.includes("voter id")) {
    return "🪪 Voter ID is an identity card used for voting in elections.";
  }

  if (message.includes("age")) {
    return "📌 Minimum voting age in India is 18 years.";
  }

  return "❓ I can help you with voting, voter ID, importance, advantages or steps.";
}

// SEND MESSAGE
function sendMessage() {
  const text = input.value.trim();
  if (!text) return;

  addMessage(text, "user");
  input.value = "";

  showTyping();

  setTimeout(() => {
    removeTyping();
    const reply = getBotReply(text);
    addMessage(reply, "bot");
  }, 700);
}

// QUICK BUTTON
function ask(text) {
  addMessage(text, "user");

  showTyping();

  setTimeout(() => {
    removeTyping();
    const reply = getBotReply(text);
    addMessage(reply, "bot");
  }, 700);
}

// ENTER KEY SUPPORT
input.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});