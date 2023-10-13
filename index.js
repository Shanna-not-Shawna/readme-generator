// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input

const questions = [
    {
        type: 'input',
        name: 'githubUn',
        message: 'GitHub username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email address:',
    },
    {
        type: 'input',
        name: 'title',
        message: 'Project title:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Instructions for use:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'License:',
        choices: ['MIT License', 'Apache License 2.0', 'GNU General Public License v3.0', 'Creative Commons Zero v1.0', 'No License'],
    },
    {
        type: 'input',
        name: 'install',
        message: 'What command should be run to install dependencies?',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Credits:',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How can the user contribute?',
    },
    {
        type: 'input',
        name: 'install',
        message: 'What command should be run to install dependencies?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command should be run to run tests?',
    },
]

 // TODO: Create a function to write README file
function writeREADME(answers){
    const mdContent = generateMarkdown(answers);
    fs.writeFile('./output/README.md', mdContent, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
           writeREADME(answers);
        });

}

// Function call to initialize app
init();

// const testAnswers = { 
//     githubUn:"kjsfjsd", 
//     email:"test@email.com", 
//     title: "Awesome Title",
//     license: "No License",
//     description: "This is a README Generator",
//     install: "Test",
//     contribution: "Test Again",
//     usage: "test more",
//     credits: "credits",
//     test: "testy test" }

    // writeREADME(testAnswers)