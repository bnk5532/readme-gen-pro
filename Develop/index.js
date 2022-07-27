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
const generateMarkdown = require("./utils/generateMarkdown");


inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "What is your project title?",
    },
    {
        type: "list",
        message: "License?",
        name: "license",
        choices: ["MIT", "IBM", "Apache 2.0", "Boost", "WTFPL"],
    },
    {
        type: "input",
        message: "Description?",
        name: "description",
    },
    {
        type: "input",
        message: "Installation instructions?",
        name: "installation",
    },
    {
        type: "input",
        message: "Usage?",
        name: "usage",
    },
    {
        type: "input",
        message: "Contributors?",
        name: "contributing",
    },
    {
        type: "input",
        message: "Tests?",
        name: "tests",
    }
    
])

.then((answers) => {
       fs.writeFile('README.md', generateMarkdown(answers), err => 
       err ? console.log(err) : console.log("Success!"));
});