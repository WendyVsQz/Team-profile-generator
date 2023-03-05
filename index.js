const inquirer = require("inquirer");
const fs = require("fs");
// Team profiles
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");
const path = require("path");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html"); 

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

// 1. create function to write HTML file

const generateHTML = require("./src/page-template");

// 2. Create a function calling team members 

function Thingy(name) {
    this.setName(name);
}

Thingy.prototype.setName = function(name) {
    this.name = name;
};

var obj = new Thingy("Fred");










function init() {
    console.log(
        "\n",
        "• ╔════◄░░░░░░►════╗ •",
        
        "*Team profile generator*",
        
        "• ╚════◄░░░░░░►════╝ •", 
        "\n",
    );
    inquirer.createPrompt(generator).then((answers) => {
        console.log("In process...");
        writeToFile("./src/page-template.js",generateHTML({...answers},
            // 3. Catch errors
        function(err) {
            if (err) {
                return console.log(err);
            }
            console.log("Success!");
            }
        ))
    });
}
init();
