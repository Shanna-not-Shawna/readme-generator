// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT License':
      
      return '![MIT Badge](https://img.shields.io/badge/License-MIT-red)';
    case 'Apache License 2.0':
      
      return '![Apache Badge](https://img.shields.io/badge/License-Apache-red)';
    case 'GNU General Public License v3.0':
      
      return '![GNU Badge](https://img.shields.io/badge/License-GNU-red)';
    case 'Creative Commons Zero v1.0':
      
      return '![Creative Commons Badge](https://img.shields.io/badge/License-Creative_Commons-red)';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "No License") return "";

  return "- [License](#license)";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "No License") return "";

  return `
## License
${license}
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const { githubUn, email, title, license, description, install, contribution, usage, credits, test } = data;
  return `
# ${title}

${renderLicenseBadge(license)}

## Description
${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
${renderLicenseLink(license)}

## Installation
${install}

## Usage
${usage}

## Credits
${credits}

${renderLicenseSection(license)}

## Features

## How to Contribute
${contribution}
## Tests
${test}
## Questions
Please visit [my GitHub](http://www.github.com/${githubUn}) or [email me](mailto:${email}) me with any questions.`
}

module.exports = generateMarkdown;
