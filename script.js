const button = document.querySelector("#button");
const centered = document.querySelector("#centered");

button.addEventListener("click", () => {
  let box = document.getElementById("input").value;
  if (box.trim() !== "") {
    // Making text for task
    const div = document.createElement("div");
    const type = document.createElement("h3");
    const text = document.createTextNode(box);
    div.setAttribute("id", "taskbox");
    type.appendChild(text);
    div.appendChild(type);
    centered.appendChild(div);
    document.getElementById("input").value = "";
    // Making check button
    const checkButton = document.createElement("input");
    checkButton.setAttribute("type", "checkbox");
    checkButton.setAttribute("id", "checkbox");
    div.appendChild(checkButton);
    // Delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      centered.removeChild(div);
    });
    div.appendChild(deleteButton);
  } else {
    console.log("invalid");
  }
});
