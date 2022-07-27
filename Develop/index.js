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


inquirer.prompt([
    {
        type: "input",
        name: "project title",
        message: "What is your project title?",
    },
    {
        type: "list",
        message: "License?",
        name: "License Type",
        choices: ["MIT", "IBM", "Apache 2.0", "Boost", "WTFPL"],
    },
    {
        type: "input",
        message: "Description?",
        name: "Description",
    },
    {
        type: "input",
        message: "Installation instructions?",
        name: "Installation",
    },
    {
        type: "input",
        message: "Usage?",
        name: "Usage",
    },
    {
        type: "input",
        message: "Contributors?",
        name: "Contributing",
    },
    {
        type: "input",
        message: "Tests?",
        name: "Tests",
    }
    
])

.then((answers) => {
    console.log(answers);
    
    const dataCollect = `
        #Title
        ${answers.title}
        ##Description
        ${answers.description}
        ##Installation Instructions
        ${answers.installation}
        ##Usage
        ${answers.usage}
        ##Contributing
        ${answers.contributing}
        ##Tests
        ${answers.tests}
    `

       fs.writeFile(README.md, dataCollect(answers, null, '\t'), err => 
       err ? console.log(err) : console.log("Success!"));
});