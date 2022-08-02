//renders badge links
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
      break;
    case "Apache 2.0":
      return "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
      break;
    case "Boost":
      return "![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)";
      break;
    case "IBM":
      return "![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)";
      break;
    case "WTFPL":
      return "![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)";
      break;
    default:
      return "No License selected";
      break;
  }
}

// If there is no license, return an empty string
function renderLicenseLink(license) {
  return "";
}

// If there is no license, return an empty string
function renderLicenseSection(license) {
  var badge = renderLicenseBadge(license);
  var link = renderLicenseLink(license);
  return `${badge} ${link}`;
}
// function to generate markdown for README
function generateMarkdown(answers) {
  return `
  ${renderLicenseSection(answers.license)}
  # ${answers.title}
  ## Table of Contents
  * Description
  * Installation Instructions
  * Usage
  * Contributing
  * Tests
  ## Description
  ${answers.description}
  ## Installation Instructions
  ${answers.installation}
  ## Usage
  ${answers.usage}
  ## Contributing
  ${answers.contributing}
  ## Tests
  ${answers.tests}
  


`;
}

module.exports = generateMarkdown;
