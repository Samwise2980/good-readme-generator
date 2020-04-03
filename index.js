const fs = require("fs");
const inquirer = require("inquirer");


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
    message: "What is your projects title? This will also help us generate a badge based on the repository name."
  },
  {
    type: "input",
    name: "description",
    message: "Describe your project?"
  },
  {
    type: "input",
    name: "installation",
    message: "Describe how other users would get this installed to develop this project?"
  },
  {
    type: "input",
    name: "usage",
    message: "Provide instructions and examples for use"
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
];


// TODO: Write function to synchronously write data in the
// current working directory to file named for the fileName parameter.
// The data parameter is the text to write to the file.
function writeToFile(fileName, data) {

  return fs.writeFile(fileName, data, function(error) {

    if (error) {

      console.log('error'

    );}

  });
}

// TODO: Use inquirer to prompt the user for each question in the
// questions array. Then call api.getUser to fetch the user profile
// data from GitHub. Finally generate the markdown and use writeToFile
// to create the README.md file.

let holder = [];

function init() {

  inquirer.prompt(questions)
  .then(answers => {

    holder.push(answers);
    const { username } = answers;
    return api.getUser(username);

  })
  .then((response) => {

    holder.push(response.data);
    return generateMarkdown(holder)

  })
  .then((data) => {

    return writeToFile("./output/README.md", data);

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
