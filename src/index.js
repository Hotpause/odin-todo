import './style.css';
import project from './project';
import todo from './todo';

console.log("Hello Worlddd");

const projectdiv = document.querySelector(".projects");

function createnewproject() {
    const inputfield = document.createElement("input");
    inputfield.type = "text";
    inputfield.placeholder = "enter project name";

    const submitbutton = document.createElement("button");
    submitbutton.textContent = "SUBMIT"
    submitbutton.type = "submit";

    submitbutton.addEventListener("click", () => {
        const projectname = inputfield.value.trim();
        if (projectname) {
            const newproject = new project(projectname);
            console.log(newproject);

            const projectnametab = document.createElement("h2");
            projectnametab.textContent = projectname;
            projectdiv.appendChild(projectnametab);

        }
    });

    projectdiv.appendChild(inputfield);
    projectdiv.appendChild(submitbutton);



}


const newprojectbutton = document.querySelector(".project_buttons");
newprojectbutton.addEventListener("click", createnewproject);




const project1 = new project('ashu');
const todo1 = new todo('milk', 'get milk', '', '1');
project1.addtodo(todo1);

console.log(project1);

