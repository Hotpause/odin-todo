import './style.css';
import project from './project';
import todo from './todo';

console.log("Hello Worlddd");

const projectdiv = document.querySelector(".projects");
const inputfield = document.querySelector(".projectinput");
const submitbutton = document.querySelector(".submitbutton");
const todoButton = document.querySelector(".todo_buttons");
const todosContainer = document.querySelector(".todos");

function createNewProject() {
    submitbutton.addEventListener("click", () => {

        const projectname = inputfield.value.trim();
        if (projectname) {
            const newproject = new project(projectname);
            console.log(newproject);

            const projectnametab = document.createElement("h2");
            projectnametab.classList.add("projectclick");
            projectnametab.textContent = projectname;
            projectdiv.appendChild(projectnametab);
        }
    });
}

function createtodoform() {
    console.log("Function createtodoform is called.");
    const existingform = document.querySelector(".todo-form")
    if (!existingform) {
        console.log("Function entes the if barrier");
        const form1 = document.createElement("form");
        form1.classList.add("todo-form");
        todosContainer.appendChild(form1);

        form1.style.border = "2px solid red"; // Add a red border to the form
        form1.style.margin = "20px"; // Add some margin to the form

        const titleinput = document.createElement("input");
        titleinput.type = "text";
        titleinput.placeholder = "todo title"
        form1.appendChild(titleinput);

        const descriptioninput = document.createElement("input");
        descriptioninput.type = "text";
        descriptioninput.placeholder = "todo desc"
        form1.appendChild(descriptioninput);

        const dateinput = document.createElement("input");
        dateinput.type = "date";
        form1.appendChild(dateinput);

        const priorityinput = document.createElement("input");
        priorityinput.type = "number";
        priorityinput.placeholder = "todo priority"
        form1.appendChild(priorityinput);

        const submitbuttonform = document.createElement("button");
        submitbuttonform.type = "submit"
        submitbuttonform.textContent = "SUBMIT todo";
        form1.appendChild(submitbuttonform);

        form1.addEventListener("submit", (event) => {
            event.preventDefault(); // Prevent the default form submission behavior

            const title = titleinput.value.trim();
            const desc = descriptioninput.value.trim();
            const date = dateinput.value.trim();
            const priority = priorityinput.value.trim();

            if (title && desc && date && priority) {
                const newtodo = new todo(title, desc, date, priority);
                createtodoelement(newtodo);
                form1.remove();
            } else {
                alert("Please fill all fields");
            }
        });




    }
}

function createtodoelement(todo) {
    const todotab = document.createElement("div");
    todotab.classList.add("todotab");

    const todoname = document.createElement("div");
    todoname.classList.add("name");
    todoname.textContent = todo.title;
    todotab.appendChild(todoname);

    const tododesc = document.createElement("div");
    tododesc.classList.add("description");
    tododesc.textContent = todo.description;
    todotab.appendChild(tododesc);

    const tododate = document.createElement("div");
    tododate.classList.add("date");
    tododate.textContent = todo.duedate;
    todotab.appendChild(tododate);

    const todopriority = document.createElement("div");
    todopriority.classList.add("priority");
    todopriority.textContent = todo.priority;
    todotab.appendChild(todopriority);

    todosContainer.appendChild(todotab);
};

todoButton.addEventListener("click", createtodoform);
console.log(todoButton);





createNewProject();










// const project1 = new project('ashu');
// const todo1 = new todo('milk', 'get milk', '', '1');
// project1.addtodo(todo1);

// console.log(project1);




