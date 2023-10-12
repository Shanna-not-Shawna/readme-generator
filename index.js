// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


const generateREADME = ({githubUn, email, title, description, install, usage, contribution, test}) =>
  `# <Your-Project-Title>

  ## Description
  
  ## Table of Contents (Optional)
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation
  
  ## Usage
  
  ## Credits
  
  ## License
 
  ## Badges
 
  ## Features
    
  ## How to Contribute
 
  ## Tests
  
  ## Questions`

inquirer
  .prompt([
    {
      type: 'input',
      name: 'githubUn',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
    {
      type: 'input',
      name: 'title',
      message: "What is your project's name?",
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please write a short description of your project:',
    },
    {
      type: 'input',
      name: 'license',
      message: 'What kind of license should your project have?',
      choices: 'MIT', 'Other choice',
    },
    {
      type: 'input',
      name: 'install',
      message: 'What command should be run to install dependencies?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What does the user need to know about using the repo?',
    },
    {
      type: 'input',
      name: 'test',
      message: 'What command should be run to run tests?',
      },
  ])
  .then((answers) => {
    const mdContent = generateREADME(answers);

    fs.writeFile('./output/README.md', mdContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });
