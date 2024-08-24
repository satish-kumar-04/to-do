var addBtn = document.getElementById("add-btn");
var updateBtn = document.getElementById("update-btn");
var list = document.getElementById("list");
var searchBox = document.getElementById("todo-task");
var removeBtn = document.getElementById("remove-btn");

var currentInputValue = "";
searchBox.addEventListener("input", function (e) {
  currentInputValue = e.target.value;
});

searchBox.addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {
    if (currentInputValue === "") {
      alert("Enter a valid task");
    } else {
      var newList = document.createElement("li");
      var textNode = document.createTextNode(currentInputValue);
      const trashIcon = document.createElement("i");
      trashIcon.width = 30;
      trashIcon.height = 30;
      trashIcon.classList.add("far", "fa-trash-alt");
      trashIcon.style.marginLeft = "300px";
      newList.appendChild(textNode);
      newList.id = "item" + (list.childElementCount + 1);
      newList.classList.add("list-item");
      newList.appendChild(trashIcon);
      list.appendChild(newList);
      taskCount();
    }
    searchBox.value = "";
    currentInputValue = "";
  }
});

function createNewNode() {
  var newList = document.createElement("li");
  var textNode = document.createTextNode(currentInputValue);
  const trashIcon = document.createElement("i");
  trashIcon.width = 30;
  trashIcon.height = 30;
  trashIcon.classList.add("far", "fa-trash-alt");
  trashIcon.style.marginLeft = "300px";
  newList.appendChild(textNode);
  newList.id = "item" + (list.childElementCount + 1);
  newList.classList.add("list-item");
  newList.appendChild(trashIcon);
  list.appendChild(newList);

  return newList;
}

addBtn.addEventListener("click", function () {
  if (currentInputValue === "") {
    alert("Enter a valid task");
  } else {
    var newList = document.createElement("li");
    var textNode = document.createTextNode(currentInputValue);
    const trashIcon = document.createElement("i");
    trashIcon.width = 30;
    trashIcon.height = 30;
    trashIcon.id = "trashicon" + (list.childElementCount + 1);
    trashIcon.style.marginLeft = "300px";
    trashIcon.classList.add("far", "fa-trash-alt");
    newList.appendChild(textNode);
    newList.id = "item" + (list.childElementCount + 1);
    newList.classList.add("list-item");
    newList.appendChild(trashIcon);
    list.appendChild(newList);

    taskCount();
  }
  searchBox.value = "";
  currentInputValue = "";
});

updateBtn.addEventListener("click", function () {
  if (currentInputValue === "") {
    alert("Enter a valid task to update");
  } else {
    var firstElement = list.firstElementChild;
    var newList = createNewNode();

    list.replaceChild(newList, firstElement);
    taskCount();
  }
  searchBox.value = "";
  currentInputValue = "";
});

removeBtn.addEventListener("click", function () {
  var firstElement = list.firstElementChild;

  list.removeChild(firstElement);
  taskCount();
});

function taskCount() {
  var count = document.getElementById("list").childElementCount;
  document.getElementById("total-text").innerHTML = "Total Task: " + count;
}

list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "I") {
      ev.target.classList.toggle("delete");
    }
  },
  false
);
