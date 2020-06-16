// function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.Title}

## Description 

${answers.Description}

## Table of Contents
* [Installation]
* [Usage]
* [License]
* [Credits]
* [Tests]
* [Questions]

## Installation

${answers.Install}

## Usage 

${answers.Usage}

## License

The license is ${answers.License}. 

## Credits

${answers.Contributors}

## Tests

${answers.Tests}

## Questions

If you have any questions please contact me at ${answers.Email}.
`;
}

module.exports = generateMarkdown;
