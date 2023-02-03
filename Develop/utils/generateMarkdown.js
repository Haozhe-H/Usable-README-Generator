const fs = require('fs')
const inquirer = require('inquirer')

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';
  if(license === 'none'){
    return badge;  
  }else if(license === 'MPL'){
    badge = '![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)'
  }else if(license === 'GPL'){
    badge = '![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0'
  }else if(license === 'BSD'){
    badge = '![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
  }else if(license === 'MIT'){
    badge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }else if(license === 'Apache'){
    badge = '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  }
  return badge;

}//'MPL', 'GPL', 'BSD', 'MIT', 'Apache'

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenselink = '';
  if(license === 'none'){
    return licenselink;  
  }else if(license === 'MPL'){
    licenselink = 'https://choosealicense.com/licenses/mpl-2.0/'
  }else if(license === 'GPL'){
    licenselink = 'https://choosealicense.com/licenses/gpl-3.0/'
  }else if(license === 'BSD'){
    licenselink = 'https://opensource.org/licenses/BSD-3-Clause'
  }else if(license === 'MIT'){
    licenselink = 'https://choosealicense.com/licenses/mit/'
  }else if(license === 'Apache'){
    licenselink = 'https://choosealicense.com/licenses/apache-2.0/'
  }
  return licenselink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licensesection = '';
  if(license === 'none'){
    licensesection = `None`
  }else {
    licensesection = `License: ${license}`
  }
  return licensesection
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## ${renderLicenseSection(data.license)} ${renderLicenseBadge(data.license)}

  ## Description:
  ### ${data.description}

  ## Table of Content
  ### *[Installation](#installation)
  ### *[Usage](#usage)
  ### *[Credits](#credits)
  ### *[License](#license)
  ### *[Features](#features)
  ### *[Contributors](#contributors)
  ### *[Tests](#tests)

  ## Installation:
  ### ${data.installation}

  ## Usage:
  ### ${data.usage}

  ## Credits:
  ### ${data.credit}

  ## ${renderLicenseSection(data.license)} ${renderLicenseBadge(data.license)}
  ### ${renderLicenseLink(data.license)}

  ## Features:
  ### ${data.feature}

  ## Contributors:
  ### ${data.contribution}

  ## Tests:
  ### ${data.test}

  ## Questions:
  ### Github: ${data.username}(https://github.com/${data.username})
  ### Email: ${data.email}
`;
}

module.exports = generateMarkdown;
