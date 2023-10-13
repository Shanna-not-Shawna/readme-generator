// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')

// TODO: Create an array of questions for user input
const generateREADME = ({githubUn, email, title, license, description, install, usage, contribution, test}) =>
  `# ${title}

  ## Description
  ${description}
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation
  ${install}
  ## Usage
  ${usage}
  ## Credits
  
  ## License
  ${license}
  ## Badges
 
  ## Features
    
  ## How to Contribute
  ${contribution}
  ## Tests
    ${test}
  ## Questions
  Please visit [my GitHub](http://www.github.com/${githubUn}) or [email me](mailto:${email}) me with any questions.`

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
      choices: ['MIT License', 'Apache License 2.0', 'GNU General Public License v3.0', 'Creative Commons Zero v1.0'],
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
  // TODO: Create a function to write README file
    fs.writeFile('./output/README.md', mdContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();