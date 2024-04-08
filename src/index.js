import './style.css';
import project from './project';
import todo from './todo';

console.log("Hello Worlddd");


const project1 = new project('ashu');
const todo1 = new todo('milk', 'get milk', '', '1');
project1.addtodo(todo1);

console.log(project1);

