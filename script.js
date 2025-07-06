const button = document.querySelector("#button");
const centered = document.querySelector("#centered");

button.addEventListener("click", () => {
  let box = document.getElementById("input").value;
  if (box.trim() !== "") {
    const type = document.createElement("h3");
    const text = document.createTextNode(box);
    type.appendChild(text);
    centered.appendChild(type);
    document.getElementById("input").value = "";
  } else {
    console.log("invalid");
  }
});
