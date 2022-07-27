// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

const inquirer = require("inquirer");
const fs = require("fs");
var badgeKey = 


inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "What is your name?",
    },
    {
        type: "checkbox",
        message: "What languages?",
        name: "stack",
        choices: ["HTML", "CSS", "JavaScript"],
    },
    {
        type: "list",
        message: "How do you want to be contacted?",
        name: "contact",
        choices: ["Phone", "Email", "Text"],
    }
])

.then((answers) => {
    console.log(answers);
    const fileName = `${answers.name.toLowerCase().split(' ').join('')}.json`;
    
    // const A = `#Purpose ${answers.purpose} ##Description ${answers.description}`;
    // const D = `
    //     #Purpose
    //     ${answers.purpose}
    //     ##Description
    //     ${answers.description}
    // `

       // fs.writeFile(README.md, D);
       fs.writeFile(fileName, JSON.stringify(answers, null, '\t'), err => 
       err ? console.log(err) : console.log("Success!")
   );
});