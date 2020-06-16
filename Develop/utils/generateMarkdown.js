// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${response.Title}

## Description 
${response.Description}

## Table of Contents
* [Installation]
* [Usage]
* [License]
* [Credits]
* [Tests]
* [Questions]

## Installation
${response.Install}

## Usage 
${response.Usage}

## License
The license is ${response.License}. 


## Credits
${response.Contributors}

## Tests
${response.Tests}

## Questions
If you have any questions please contact me at ${response.Email}.
`;
}

module.exports = generateMarkdown;
