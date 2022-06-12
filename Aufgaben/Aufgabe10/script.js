var Aufgabe10;
(function (Aufgabe10) {
    window.addEventListener("load", function () {
        var todos = ["Lernen", "Oma anrufen", "Urlaub buchen", "Spazieren"]; // Beispiel To Dos
        var todosCheck = [false, true, false, true]; // Beispiel To Dos abgehakt (true) oder nicht abgehakt (false)
        var counterDOMElement = document.querySelector("#counter");
        var todosDOMElement = document.querySelector("#todos");
        var inputDOMElement = document.querySelector("#inputTodo");
        var addButtonDOMElement = document.querySelector("#addButton");
        // To Do abhaken oder Haken wieder entferen
        function checkTodo(i) {
            todosCheck[i] = !todosCheck[i]; // Haken -> kein Haken | kein Haken -> Haken
            // zentrale Funktion wird aktualisiert
            todoList();
        }
        // To Do hinzufügen
        function addTodo() {
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
        function deleteTodo(i) {
            todos.splice(i, 1); // Text des To Dos wird gelöscht
            todosCheck.splice(i, 1); // Haken des To Dos wird gelöscht
            // zentrale Funktion wird aktualisiert
            todoList();
        }
        // Task Counter
        function taskCounter() {
            counterDOMElement.innerHTML = "Tasks: " + todos.length;
        }
        // zentrale Funktion
        function todoList() {
            todosDOMElement.innerHTML = "";
            for (let i = 0; i < todos.length; i++) {
                let todo = document.createElement("div");
                todo.classList.add("todo");
                todo.innerHTML = "<span class='check " + todosCheck[i] + "'><i class='fas fa-check'></i></span>" + todos[i] + "<span class='trash fas fa-trash-alt'></span>";
                // Klick auf Kreis -> To Do abhaken oder Haken entfernen
                todo.querySelector(".check").addEventListener("click", function () {
                    checkTodo(i);
                });
                // Klick auf Mülleimer -> To Do wird gelöscht
                todo.querySelector(".trash").addEventListener("click", function () {
                    deleteTodo(i);
                });
                todosDOMElement.appendChild(todo);
            }
            taskCounter(); // Anzahl der To Dos
        }
        todoList(); // Beispiel To Dos werden aufgelistet
    });
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=script.js.map