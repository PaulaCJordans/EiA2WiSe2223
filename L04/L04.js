var shoppingList;
(function (shoppingList) {
    window.addEventListener("load", function () {
        //Aufgabe: L03 Einkaufsliste
        //Name: Paula Charlotte Jordans
        //Matrikel: 271121
        //Datum: 27.10.22
        //Quellen: Pia Giovannelli, Aanya Khetarpal, Julia Befus, Havva Killic,
        const input = document.getElementById("toDo");
        const wrapper = document.getElementById("toDoWrapper");
        let todoCount = 0;
        input.addEventListener("keydown", function (event) {
            if (event.key == "Enter") {
                createToDo();
                clearInput();
            }
        });
        function updateCounter() {
            document.querySelector("#counterToDo").innerHTML = String(todoCount);
        }
        function clearInput() {
            input.value = "";
        }
        function createToDo() {
            todoCount++;
            updateCounter();
            const todoItem = document.createElement("div");
            const checkbox = document.createElement("input");
            const label = document.createElement("label");
            const trashButton = document.createElement("i");
            todoItem.className = "todoItem";
            checkbox.type = "checkbox";
            checkbox.className = "checkbox";
            label.innerHTML = input.value;
            label.className = "divLabel";
            trashButton.className = "fas fa-trash-alt";
            wrapper.appendChild(todoItem);
            todoItem.appendChild(checkbox);
            todoItem.appendChild(label);
            todoItem.appendChild(trashButton);
            trashButton.addEventListener("click", function () {
                deleteItem(todoItem);
            });
        }
        function deleteItem(item) {
            wrapper.removeChild(item);
            todoCount--;
            updateCounter();
        }
    });
})(shoppingList || (shoppingList = {}));
//# sourceMappingURL=L04.js.map