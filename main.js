const addButton = document.querySelector("#addItem");
const inputField = document.querySelector("#inputField");
const deleteAllButton = document.querySelector('#removeAll');
const deleteSelectedButton = document.querySelector('#removeSelected');

addButton.addEventListener("click", () => {

  document.querySelector("ol").innerHTML = "";
  let taskList;
  let localItems = JSON.parse(localStorage.getItem("localItems"));
  if (localItems === null) {
    taskList = [];
  } else {
    taskList = localItems;
  }

  const LIOBJ = {
    id:
      localItems && localItems.length
        ? localItems[localItems.length - 1].id + 1
        : 0,
    value: inputField.value,
    checked: false,
  };
  taskList.push(LIOBJ);
  localStorage.setItem("localItems", JSON.stringify(taskList));
  inputField.value = "";
  showList();
});

function showList() {

  document.querySelector("ol").innerHTML = "";
  let list = document.querySelector("ol");
  let localItems = JSON.parse(localStorage.getItem("localItems"));
  let taskList;
  if (localItems === null) {
    taskList = [];
  } else {
    taskList = localItems;
  }

  taskList.forEach((listItem) => {
    list.append(createLiElement(listItem));
  });
}

showList();

function createLiElement({ value, checked }) {

  const li = document.createElement("li");
  li.className = "flex justify-between bg-green-200 rounded-md p-3";

  const checkbox = document.createElement("input");
  checkbox.checked = checked;
  checkbox.type = "checkbox";
  checkbox.onclick = (event)=>{
    
    let localItems = JSON.parse(localStorage.getItem('localItems'));
    let listItems = localItems.map(item => item.value === event.currentTarget.parentNode.children[1].innerText ? {checked:! item.checked, id: item.id , value:item.value}:item);
    console.log(listItems);
    localStorage.setItem('localItems', JSON.stringify(listItems));
  }
  checkbox.className = `
  w-[1.5em]
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
  deleteButton.onclick = (event) => {
    let localItems = JSON.parse(localStorage.getItem('localItems'));
    let newList = localItems.filter(item => item.value != event.currentTarget.parentNode.children[1].innerText);
    localStorage.setItem('localItems', JSON.stringify(newList));
    event.currentTarget.parentNode.remove();
  };

  li.append(checkbox, strong, deleteButton);
  return li;
}

deleteAllButton.addEventListener('click', ()=>{

  localStorage.removeItem('localItems');
  document.querySelector('ol').innerHTML = '';
})

deleteSelectedButton.addEventListener('click', ()=>{

  let localItems = JSON.parse(localStorage.getItem('localItems'));
  let listItems = localItems.filter(item => !item.checked);
  localStorage.setItem('localItems', JSON.stringify(listItems));
  showList();

})