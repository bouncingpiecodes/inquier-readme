const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What's your project title",
  },
  {
    type: "input",
    name: "description",
    message: "Whats your project description?",
  },
  {
    type: "input",
    name: "tableOfContents",
    message: "Whats your table of contents?",
  },
  {
    type: "input",
    name: "installation",
    message: "Whats your project installation?",
  },
  {
    type: "input",
    name: "usage",
    message: "Whats your project usage?",
  },
  {
    type: "rawlist",
    name: "license",
    message: "Whats your project license?",
    choices: ["MIT", "Apache", "GNU", "Mozilla"],
  },
  {
    type: "input",
    name: "contributing",
    message: "How do you contribute?",
  },
  {
    type: "input",
    name: "tests",
    message: "Whats your project tests?",
  },
  {
    type: "input",
    name: "questions",
    message: "Whats your project questions?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  console.log(fileName);
  console.log(data);
  try {
    fs.writeFileSync(fileName, data);
    // file written successfully
  } catch (err) {
    console.error(err);
  }
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((data) => {
      const markdown = generateMarkdown(data);
      writeToFile("README.md", markdown);
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}

// Function call to initialize app
init();
