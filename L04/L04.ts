namespace shoppingList {
    window.addEventListener("load", function (): void {

        //Aufgabe: L03 Einkaufsliste
        //Name: Paula Charlotte Jordans
        //Matrikel: 271121
        //Datum: 27.10.22
        //Quellen: Pia Giovannelli, Aanya Khetarpal, Julia Befus, Havva Killic,


        const input: HTMLInputElement = (document.getElementById("toDo") as HTMLInputElement);
        const wrapper: HTMLElement = document.getElementById("toDoWrapper");

        let todoCount: number = 0;

        input.addEventListener("keydown", function (event: KeyboardEvent): void {
            if (event.key == "Enter") {
                createToDo();
                clearInput();
            }
        });

        function updateCounter(): void {
            document.querySelector("#counterToDo").innerHTML = String(todoCount);
        }

        function clearInput(): void {
            input.value = "";
        }

        function createToDo(): void {
            todoCount++;
            updateCounter();


            const todoItem: HTMLDivElement = document.createElement("div");
            const checkbox: HTMLInputElement = document.createElement("input");
            const label: HTMLElement = document.createElement("label");
            const trashButton: HTMLElement = document.createElement("i");
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

            trashButton.addEventListener("click", function (): void {
                deleteItem(todoItem);
            });
        }

        function deleteItem(item: HTMLElement): void {
            wrapper.removeChild(item);

            todoCount--;
            updateCounter();
        }




    });
}