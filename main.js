const textField = document.querySelector("#inputField");
const form = document.querySelector(".addAndRemoveForm");
const list = document.querySelector("ol");
const checkbox = document.querySelectorAll('#checkbox');

//take all the task and put them in an array.
var taskArr = Array.from(document.querySelectorAll("#taskText")).map(
  (item) => item.innerText
);

//Here we are adding the task in the taskArr.const listItem = document.querySelector('li');

form.addEventListener("submit", (e) => {
  e.preventDefault();
  taskArr.push(textField.value.trim());
  console.log(taskArr);

  //We are creating the li
  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = "checkbox";
  const div = document.createElement("div");
  const strong = document.createElement("strong");
  strong.innerText = textField.value;
  strong.id = "taskText";
  const button = document.createElement("button");
  button.innerText = "Delete";
  button.id = "deleteButton";
  div.append(strong);
  li.appendChild(checkbox);
  li.appendChild(div);
  li.append(button);

  //Here we are appending the li to ol
  list.append(li);
  textField.value = "";
});

checkbox.addEventListener('click', ()=>{
    console.log('clicked')
})