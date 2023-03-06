// Team profiles
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Modules
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// variables used in the fs file function to create html
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html"); 
const generateHTML = require("./src/page-template");
const { default: Prompt } = require("inquirer/lib/prompts/base");

// Empty array

let staffData = [];

// TODO: Write Code to gather information about the development team members, and render the HTML file.

// 1. Array for answers to questions
    const prompt = new Form([
        {
        name: 'Employee',
        message: 'Please provide the following information:',
        choices: [
            { name: 'firstname', message: 'first name', initial: '' },
                { name: 'id', message: '123', initial: ''},
            {   type: "list", message: "what is your role?", 
                choices:["Engineer", "intern", "Manager"]},
                ]
        },
    {
        name: 'Manager',
        message: 'Please provide the following information:',
        choices: [
            { name: 'firstname', message: 'first name', initial: '' },
                { name: 'id', message: '123', initial: ''},
            {   type: "list", message: "what is your role?", 
                choices:["Engineer", "intern", "Manager"]},
        ]
    },
    

]);
    

inquirer
.prompt.run()
.then(value => console.log('Answer:', value))
.catch(console.error);
console.log('\x1b[36m%s\x1b[0m',prompt)

function writeToFile(fileName, prompt) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), prompt);
}
/* // 2. if Manager ..
const prompt = new Form({
    name: 'Employee',
    message: 'Please provide the following information:',
    choices: [
        { name: 'firstname', message: 'first name', initial: '' },
            { name: 'id', message: '123', initial: ''},
        {   type: "list", message: "what is your role?", 
            choices:["Engineer", "intern", "Manager"]},
    ]
});

prompt.run()
.then(value => console.log('Answer:', value))
.catch(console.error);
console.log('\x1b[36m%s\x1b[0m',prompt)

// 3. else if Engineer ..

const prompt = new Form({
    name: 'Employee',
    message: 'Please provide the following information:',
    choices: [
        { name: 'firstname', message: 'first name', initial: '' },
            { name: 'id', message: '123', initial: ''},
        {   type: "list", message: "what is your role?", 
            choices:["Engineer", "intern", "Manager"]},
    ]
});

prompt.run()
.then(value => console.log('Answer:', value))
.catch(console.error);
console.log('\x1b[36m%s\x1b[0m',prompt)

// 4. else if Intern ...

const prompt = new Form({
    name: 'Employee',
    message: 'Please provide the following information:',
    choices: [
        { name: 'firstname', message: 'first name', initial: '' },
            { name: 'id', message: '123', initial: ''},
        {   type: "list", message: "what is your role?", 
            choices:["Engineer", "intern", "Manager"]},
    ]
}); */

// 2. Create a function calling team members 

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
