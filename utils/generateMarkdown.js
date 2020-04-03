// TODO: Return markdown string for README file given a data object.
function generateMarkdown(data) {
  return `
# ${data.title}

![${data.title}](https://img.shields.io/github/languages/top/${data.login}/${data.title})

## Description 

${data.description}


## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)
* [Tests](#tests)
* [Questions](#questions)
* [Contact](#contact)



## Installation

${data.installation}

## Usage 

${data.usage}


## Contributing

${data.contributing}


## License

${data.license}


## Tests

${data.test}

## Questions

${data.questions}

## Contact

${data.email}

![${data.login} avatar](${data.avatar_url})

`;
}

module.exports = generateMarkdown;
