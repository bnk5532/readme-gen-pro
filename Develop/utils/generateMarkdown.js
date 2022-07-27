// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
switch (license) {
  case "MIT" :
    return "MIT BADGE"
    
    break;
  case "Apache 2.0":
    return "ApacheBADGE"
    break;

  default:
    return "No License selected"
    break;
}


}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
 return "" 
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  var badge = renderLicenseBadge(license)
  var link = renderLicenseLink(license)
  return `${badge} ${link}`
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
  #Title
  ${answers.title}
  ##Description
  ${answers.description}
  ##Installation Instructions
  ${answers.installation}
  ##Usage
  ${answers.usage}
  ##Contributing
  ${answers.contributing}
  ##Tests
  ${answers.tests}
  ##License
  ${renderLicenseSection(answers.license)}


`;
}

module.exports = generateMarkdown;
