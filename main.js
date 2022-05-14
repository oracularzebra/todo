const textField = document.querySelector("#inputField");
const form = document.querySelector(".addAndRemoveForm");
let list = document.querySelector("ol");

/*We are making an array of objects where each obect will have three fields
id, value, and checked
*/

var taskArr = JSON.parse(localStorage.getItem("listItems")) || [];

//creating the task object
//Here value is task text.
const makeLiElement = ({ checked, value }) => {
  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = "checkbox";
  checkbox.checked = checked;
  const div = document.createElement("div");
  const strong = document.createElement("strong");
  strong.innerText = value;
  strong.id = "taskText";
  const button = document.createElement("button");
  button.innerText = "Delete";
  button.id = "deleteButton";
  div.append(strong);
  li.appendChild(checkbox);
  li.appendChild(div);
  li.append(button);
  return li;
};

const fetchAndSetItems = () => {
    textField.focus();
  for (let i of taskArr) {
    list.append(makeLiElement(i));
  }
};
fetchAndSetItems();
form.addEventListener("submit", (e) => {
  //We are creating the li
  const li = makeLiElement({ checked: false, value: textField.value.trim() });
  const obj = {
    id: taskArr.length ? taskArr[taskArr.length - 1].id + 1 : 0,
    checked: false,
    value: textField.value.trim(),
  };
  //Here we are pushing task object to taskArr.
  taskArr.push(obj);
  //Here we are appending the li to ol
  list.append(li);
  textField.value = "";
  localStorage.setItem("listItems", JSON.stringify(taskArr));
});

//Adding deleteAll functionality
const deleteAllButton = document.querySelector("#removeAll");

deleteAllButton.addEventListener("click", (e) => {
  taskArr = [];
  list.textContent = "";
  localStorage.setItem("listItems", JSON.stringify(taskArr));
});

// Adding delete single functionality
const deleteButtons = document.querySelectorAll("#deleteButton");
deleteButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const li = e.target.parentNode;
    const taskText = document.querySelector("strong").innerText;
    //matching the task text and value in the taskArr objects
    taskArr = taskArr.filter((item) => item.value !== taskText);
    localStorage.setItem("listItems", JSON.stringify(taskArr));
    list.removeChild(li);
  });
});

//Adding the checkbox functionality
const checkboxes = document.querySelectorAll('#checkbox');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', ()=>{
        console.log('clicked')
    })
})