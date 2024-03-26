#!/usr/bin/env node
//  npm i inquirer
// npm i @types/inquirer -D
// npm i @types/node -D
import inquirer from "inquirer";
inquirer
    .prompt([
    {
        name: "num1",
        message: "Enter first number: ",
        type: "input",
        validate: function (input) {
            if (!isNaN(input)) {
                return true;
            }
            else {
                return "Please enter a valid number";
            }
        },
    },
    {
        name: "num2",
        message: "Enter second number: ",
        type: "input",
        validate: function (input) {
            if (!isNaN(input)) {
                return true;
            }
            else {
                return "Please enter a valid number";
            }
        },
    },
    {
        name: "operator",
        message: "Select arithmetic operation: ",
        type: "list",
        choices: [
            "Addition(+)",
            new inquirer.Separator(),
            "Subtraction(-)",
            new inquirer.Separator(),
            "Multiplication(*)",
            ,
            new inquirer.Separator(),
            "Division(/)",
        ],
    },
])
    .then((answers) => {
    if (answers?.operator == "Addition(+)") {
        console.log("Output :>> ", Number(answers?.num1) + Number(answers?.num2));
    }
    else if (answers?.operator == "Subtraction(-)") {
        console.log("Output :>> ", Number(answers?.num1) - Number(answers?.num2));
    }
    else if (answers?.operator == "Multiplication(*)") {
        console.log("Output :>> ", Number(answers?.num1) * Number(answers?.num2));
    }
    else {
        console.log("Output :>> ", Number(answers?.num1) / Number(answers?.num2));
    }
})
    .catch((error) => {
    if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
    }
    else {
        // Something else went wrong
    }
});
