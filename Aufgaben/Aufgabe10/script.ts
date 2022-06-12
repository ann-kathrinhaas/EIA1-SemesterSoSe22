namespace Aufgabe10 {

    window.addEventListener("load", function(): void {
        
        var todos: string[] = ["Lernen" , "Oma anrufen" , "Urlaub buchen", "Spazieren"]; // Beispiel To Dos
        var todosCheck: boolean[] = [false , true , false, true]; // Beispiel To Dos abgehakt (true) oder nicht abgehakt (false)
    

        var counterDOMElement: HTMLElement = document.querySelector("#counter");
        var todosDOMElement: HTMLElement = document.querySelector("#todos");
        var inputDOMElement: HTMLInputElement = document.querySelector("#inputTodo");
        var addButtonDOMElement: HTMLElement = document.querySelector("#addButton");


        // To Do abhaken oder Haken wieder entferen
        function checkTodo(i: number): void {
            todosCheck[i] = !todosCheck[i]; // Haken -> kein Haken | kein Haken -> Haken
            // zentrale Funktion wird aktualisiert
            todoList();
        }

        // To Do hinzufügen
        function addTodo(): void {
            if (inputDOMElement.value != "") {
                todos.push(inputDOMElement.value);
                todosCheck.push(false); // nur Kreis, ohne Haken
                inputDOMElement.value = "";
                // zentrale Funktion wird aktualisiert
                todoList();
            }
        }
        addButtonDOMElement.addEventListener("click", addTodo);

        // To Do löschen
        function deleteTodo(i: number): void {
            todos.splice(i, 1); // Text des To Dos wird gelöscht
            todosCheck.splice(i, 1); // Haken des To Dos wird gelöscht
            // zentrale Funktion wird aktualisiert
            todoList();
        }

        // Task Counter
        function taskCounter(): void {
            counterDOMElement.innerHTML = "Tasks: " + todos.length;
        }



        // zentrale Funktion
        function todoList(): void {
            todosDOMElement.innerHTML = "";
            for (let i: number = 0; i < todos.length; i++) {
                let todo: HTMLElement = document.createElement("div");
                todo.classList.add("todo");
                todo.innerHTML =  "<span class='check " + todosCheck[i] + "'><i class='fas fa-check'></i></span>" + todos[i] + "<span class='trash fas fa-trash-alt'></span>";
                // Klick auf Kreis -> To Do abhaken oder Haken entfernen
                todo.querySelector(".check").addEventListener("click", function(): void {
                    checkTodo(i);
                });
                // Klick auf Mülleimer -> To Do wird gelöscht
                todo.querySelector(".trash").addEventListener("click", function(): void {
                    deleteTodo(i);
                });
                todosDOMElement.appendChild(todo);
            }
            taskCounter(); // Anzahl der To Dos
        }
        todoList(); // Beispiel To Dos werden aufgelistet

    });
}




