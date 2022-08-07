const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

//questions
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
        choices: ["MIT", "IBM", "Apache 2.0", "Boost", "WTFPL", "No License"],
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
        message: "Github?",
        name: "github",
    },
    {
        type: "input",
        message: "email?",
        name: "email",
        validate: function(email)
        {
            return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
        }
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
//writes or overwrites inquirer answers to new readme file. 
.then((answers) => {
       fs.writeFile('README.md', generateMarkdown(answers), err => 
       err ? console.log(err) : console.log("Success!"));
});