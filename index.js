//libs
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");

// Modules required
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./src/page-template.js");

// Render
const path = require("path");
const fs = require("fs");

// TODO: Write Code to gather information about the development team members, and render the HTML file.

// *Tittle *//

function init() {
    console.log(
        "\x1b[33m","\n","• ╔════◄░░░░░░►════╗ •","\n",

    "\n", "\x1b[36m", "*Team profile generator*","\n",

        "\x1b[33m", "\n","• ╚════◄░░░░░░►════╝ •", "\n",
    ); 
}
init();

// Manager questions
const manager = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter name of the manager: '
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter id of the manager: '
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter email address of the manager: '
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Enter office number of the manager: '
    },
    {
        type: 'list',
        name: 'role',
        message: 'Select additional role of employee to add, otherwise select Exit to finish: ',
        choices: ['Engineer', 'Intern', 'Exit']
    }
];

// Engineer questions
const engineer = [
        {
            type: 'input',
            name: 'name',
            message: 'Please enter name of engineer: '
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter id of the engineer: '
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter email address of the engineer: '
        },
            {
        type: 'input',
        name: 'github',
        message: 'Enter github username of the engineer: '
    },
    {
        type: 'list',
        name: 'role',
        message: 'Select additional role of employee to add, otherwise select Exit to finish: ',
        choices: ['Engineer', 'Intern', 'Exit']
    }
];

// Intern questions
const intern = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter name of the intern: '
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter id of the intern: '
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter email address of the intern: '
    },
    {
        type: 'input',
        name: 'school',
        message: 'Enter school of the intern: '
    },
    {
        type: 'list',
        name: 'role',
        message: 'Select additional role of employee to add, otherwise select Exit to finish: ',
        choices: ['Engineer', 'Intern', 'Exit']
    }
];

// StaffData array
const StaffData = [];

// Function data collection
function collectData(){
    inquirer.prompt(manager).then((managerResponse) => {
        const manager = new Manager(managerResponse.name, managerResponse.id, managerResponse.email)
        manager.officeNumber = managerResponse.officeNumber;
        StaffData.push(manager)
        if (managerResponse.role === 'Engineer'){
            engineerPrompt();
        } else if (managerResponse.role === 'Intern') {
            internPrompt();
        } else if (managerResponse.role === 'Exit') {
            exitPrompt();
        };
    });
}

// Prompt function engineer data
function engineerPrompt(){
    inquirer.prompt(engineer).then((engineerResponse) => {
        const engineer = new Engineer(engineerResponse.name, engineerResponse.id, engineerResponse.email)
        engineer.github = engineerResponse.github;
        StaffData.push(engineer)
        if (engineerResponse.role === 'Engineer'){
            engineerPrompt();
        } else if (engineerResponse.role === 'Intern') {
            internPrompt();
        } else if (engineerResponse.role === 'Exit') {
            exitPrompt();
        }
    });
}

// Prompt function intern data
function internPrompt(){
    inquirer.prompt(intern).then((internResponse) => {
        const intern = new Intern(internResponse.name, internResponse.id, internResponse.email)
        intern.school = internResponse.school;
        StaffData.push(intern)
        if (internResponse.role === 'Engineer'){
            engineerPrompt();
        } else if (internResponse.role === 'Intern') {
            internPrompt();
        } else if (internResponse.role === 'Exit')  {
            exitPrompt();
        }
    });
}

//HTML file rendering
function exitPrompt(){
    const exit = [
        {
        type: 'input',
        name: 'back-to-menu',
        message: 'Press ENTER to be finish'
        }
    ]; 
    
    writeHTMLfile();
}


//pass result into fs function
function writeHTMLfile(){
    const teamHTML = render(StaffData);
    fs.writeFile(outputPath, teamHTML, (error) => { 
        error ? console.error(error) : "Check output directory for file"
    })
}

// Output folder created (include html & css), use outputPatch to target

collectData(); 