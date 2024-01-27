const inputBox = document.getElementById("input-box");
const litsContaner = document.getElementById("list-container");

console.log(inputBox);

function addTask() {
  if (inputBox.value === "") {
    alert(" you have to write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    litsContaner.appendChild(li);
    let span = document.createElement("span");

    span.innerHTML = "\u00d7";

    li.appendChild(span);
  }

  inputBox.value = "";
  savedata();
}

litsContaner.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      savedata();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      savedata();
    }
  },
  false
);

function savedata() {
  localStorage.setItem("data", litsContaner.innerHTML);
}

function showTask() {
  litsContaner.innerHTML = localStorage.getItem("data");
}
showTask();
