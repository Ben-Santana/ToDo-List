const toDoItems = document.getElementsByClassName("to-do-items")[0];
const input = document.getElementById("input");
const trashIcon = document.getElementById("trash");

input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addItem();
    }
})

void function () {
    addItem();
}

function addItem() {
    var divParent = document.createElement("div");
    var divChild = document.createElement("div");
    var checkIcon = document.createElement("i");
    var trashIcon = document.createElement("i");
    var iconCheck = false;

    divParent.className = "item";
    divParent.innerHTML = '<div>' + input.value + '<div/>';

    checkIcon.className = "fas fa-check-square";
    checkIcon.style.color = "lightgray";
    checkIcon.addEventListener("click", function () {
        if (iconCheck === false) {
            checkIcon.style.color = "turquoise";
            iconCheck = true;
        } else if (iconCheck === true) {
            checkIcon.style.color = "lightgray";
            iconCheck = false;
        }
    })



    divChild.appendChild(checkIcon);

    trashIcon.className = "fas fa-trash";
    trashIcon.style.color = "darkgray";
    trashIcon.addEventListener("click", function () {
        divParent.remove();
    })

    divChild.appendChild(trashIcon);

    divParent.appendChild(divChild);

    toDoItems.appendChild(divParent);



    input.value = '';
}

