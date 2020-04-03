const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");

const api = require("./utils/api");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
  {
  type: "input",
  name: "username",
  message: "What is your GitHub username?"
  },
  {
    type: "input",
    name: "title",
    message: "What is your projects title?"
  },
  {
    type: "input",
    name: "description",
    message: "Could you describe your project?"
  },
  {
    type: "input",
    name: "installation",
    message: "Describe how you would get this installed for other users?"
  },
  {
    type: "input",
    name: "usage",
    message: "What are the usages?"
  },
  {
    type: "input",
    name: "license",
    message: "Any licenses?"
  },
  {
    type: "input",
    name: "contributing",
    message: "Any contributors you want to shout out?"
  },
  {
    type: "input",
    name: "tests",
    message: "How do you test it?"
  },
  {
    type: "input",
    name: "questions",
    message: "Any questions that you would probably need to answer?"
  },
];


// TODO: Write function to synchronously write data in the
// current working directory to file named for the fileName parameter.
// The data parameter is the text to write to the file.
function writeToFile(fileName, data) {
  return fs.writeFile(fileName, data, function(err, result) {
    if(err) {console.log('error', err);}
  });
}

// TODO: Use inquirer to prompt the user for each question in the
// questions array. Then call api.getUser to fetch the user profile
// data from GitHub. Finally generate the markdown and use writeToFile
// to create the README.md file.
function init() {
  inquirer.prompt(questions)
  .then(answers => {
    const { username, title, description, installation, usage, license, contributing, tests, questions } = answers;

    return api.getUser(username);
  })
  .then((response) => {
    const { email, login, avatar_url } = response.data
    generateMarkdown
  })
  .then((data) => {
    return writeToFile("./output/README.md" ,data);
  })
  .then(() => {

    console.log("README is finished!")
  })
  .catch(error => {
    console.log(error);
    console.log("Something went wrong! Try again.")
    process.exit(1);
  });
}

init();
