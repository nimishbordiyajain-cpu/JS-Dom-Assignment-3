const emojis = document.querySelectorAll(".emoji");
const result = document.getElementById("result");

emojis.forEach(emoji => {
  emoji.addEventListener("click", () => {
    result.textContent = `You are feeling ${emoji.textContent}`;
  });
});
