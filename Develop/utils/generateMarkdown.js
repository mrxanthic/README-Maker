// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license==='MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if (license==='Mozilla Public License') {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  } else if (license==='Apache') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else if (license==='GNU GPLv3') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  } else {
    return ""
  }  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license==='MIT') {
    return '[here.](https://opensource.org/licenses/MIT)'
  } else if (license==='Mozilla Public License') {
    return '[here.](https://opensource.org/licenses/MPL-2.0)'
  } else if (license==='Apache') {
    return '[here.](https://opensource.org/licenses/Apache-2.0)'
  } else if (license==='GNU GPLv3') {
    return '[here.](https://www.gnu.org/licenses/gpl-3.0)'
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license==='MIT') {
    return 'This application is covered under the MIT license. Learn more about MIT '
  } else if (license==='Mozilla Public License') {
    return 'This application is covered under the Mozilla Public License. Learn more about Mozilla Public License '
  } else if (license==='Apache') {
    return 'This application is covered under the Apache license. Learn more about Apache '
  } else if (license==='GNU GPLv3') {
    return 'This application is covered under the GNU GPLv3 license. Learn more about GNU GPLv3 '
  } else {
    return ""
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.instructions}

  ## Usage 
  ${data.usage}

  ## License
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}

  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.test}

  ## Questions
  You can find my GitHub profile at www.github.com/${data.username}
  \nIf you have any additional questions, you can reach me at ${data.email}
`;
}

module.exports = generateMarkdown;
