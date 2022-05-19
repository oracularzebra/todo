const addButton = document.querySelector("#addItem");
const inputField = document.querySelector("#inputField");
const list = document.querySelector("ol");

addButton.addEventListener("click", () => {
  
  list.append(createLiElement(inputField.value, false));

});

function createLiElement(value, checked) {

  const li = document.createElement("li");
  li.className = "flex justify-between bg-green-200 rounded-md p-3";

  const checkbox = document.createElement("input");
  checkbox.checked = checked;
  checkbox.className = `w-[1.5em]
  h-[1.5em]
  border-4
  border-green-500
  rounded-[50%]
  appearance-none
  cursor-pointer
  checked:bg-green-700`;
  checkbox.id = "checkbox";

  const strong = document.createElement("strong");
  strong.id = "taskText";
  strong.innerText = value;

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "&cross;";
  deleteButton.id = "deleteButton";

  li.append(checkbox, strong, deleteButton);
  return li;

}

