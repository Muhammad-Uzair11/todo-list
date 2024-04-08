#! bin/usr/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let addtodo = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "What do you want to add in your todo list ? "
        },
        {
            name: "addmore",
            type: "confirm",
            message: "Do you want to add more ? ",
            default: "false"
        }
    ]);
    todos.push(addtodo.todo);
    condition = addtodo.addmore;
    console.log(todos);
}
