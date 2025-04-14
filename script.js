document.addEventListener("DOMContentLoaded", function () {
  const messageElement = document.querySelector("#message-404 p");
  const originalMessage = messageElement.textContent;

  const objects = originalMessage.split(" ").map((item) => item.trim());

  function shuffleObject(obj) {
    const chars = obj.split("");

    for (let i = chars.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [chars[i], chars[j]] = [chars[j], chars[i]];
    }
    return chars.join("");
  }

  function changeText() {
    const shuffleInterval = setInterval(() => {
      const shuffledObjects = objects.map((obj) => shuffleObject(obj));
      messageElement.textContent = shuffledObjects.join(" ");
    }, 130);

    setTimeout(() => {
      clearInterval(shuffleInterval);
      messageElement.textContent = originalMessage;
    }, 2000);

    setTimeout(changeText, 6000);
  }

  setTimeout(changeText, 4000);
});