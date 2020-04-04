function generateMarkdown(data) {
  return `
# ${data[0].title}

![${data[0].title}](https://img.shields.io/github/languages/top/${data[1].login}/${data[0].title})

## Description 

${data[0].description}


## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)
* [Tests](#tests)
* [Questions](#questions)
* [Contact](#contact)



## Installation

${data[0].installation}

## Usage 

${data[0].usage}


## Contributing

${data[0].contributing}


## License

${data[0].license}


## Tests

${data[0].tests}


## Questions

If you have any questions please contact me at:

Email: ${data[1].email}

![${data[1].login} avatar](${data[1].avatar_url})

`;
}

module.exports = generateMarkdown;
