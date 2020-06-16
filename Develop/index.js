const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const util = require("util");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "ProjectTitle",
    message: "What would you like your Project Title to be named?",
  },

  {
    type: "input",
    name: "ProjectDescription",
    message: "Please write a short description of your project.",
  },

  {
    type: "input",
    name: "Install",
    message: "What are the steps required to install your project?",
  },

  {
    type: "input",
    name: "Usage",
    message: "Please provide examples of how your project could be used.",
  },

  {
    type: "list",
    name: "License",
    message: "Choose what license you would like to use for your project.",
    choices: [
      {
        name: "GNU General Public License v3.0",
      },
      {
        name: "MIT License",
      },
      {
        name: "Apache License 2.0",
      },
    ],
  },

  {
    type: "input",
    name: "Contributors",
    message: "How many contributors will there be on your project?",
  },

  {
    type: "input",
    name: "Tests",
    message: "Are there any test instructions for this project?",
  },

  {
    type: "input",
    name: "Email",
    message: "What is your email address?",
  },
];

function promptUser() {
  return inquirer.prompt(questions);
}

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      console.error(err);
    }
  });
}

// function to initialize program
async function init() {
  console.log("Welcome to the README Generator!");
  try {
    const answers = await promptUser();
    const readMe = generateMarkdown(answers, user);
    writeToFile("GeneratedREADME.md", readMe);
    console.log("**README file successfully created!**");
  } catch (err) {
    console.log(err);
  }
}

// function call to initialize program
init();
