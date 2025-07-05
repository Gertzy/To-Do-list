const button = document.querySelector("#button");
const centered = document.querySelector("#centered");

button.addEventListener("click", () => {
  const type = document.createElement("h3");
  const text = document.createTextNode("Task");
  type.appendChild(text);
  centered.appendChild(type);
});
