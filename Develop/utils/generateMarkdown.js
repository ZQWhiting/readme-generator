const generateDescription = (description) => {
  if (!description) {
    return '';
  }

  return `<a name='description'></a>
## Description
  ${description}`
}

const generateToC = (sections) => {
  let text = `## Table of Contents
`

  sections.filter(item => {
    if (item !== 'Table of Contents') return item;
  })
  .forEach(item => {
    text += `* [${item}](#${item})\n`
  });

  return text
}

const generateInstallation = (installation) => {
  if (!installation) {
    return '';
  }

  return `<a name='installation'></a>
## Installation
  ${installation}`
}

const generateUsage = (usage) => {
  if (!usage) {
    return '';
  }

  return `<a name='usage'></a>
## Usage
  ${usage}`
}

const generateLicense = (license) => {
  if (!license) {
    return '';
  }

  return `<a name='license'></a>
## License
  Licensed under the [${license}](./dist/LICENSE.md) license.`
}

const generateContributing = (contributingSelect, contributing) => {
  if (!contributingSelect) {
    return '';
  }

  let text = `<a name='contributing'></a>
## Contributing
`
  if (contributing) {

    return text += contributing;

  } else {
    return text += '[Contributor Covenant](./dist/contributor-covenant.md)';
  }
}

const generateTests = (tests) => {
  if (!tests) {
    return ''
  }

  return `<a name='tests'></a>
## Tests
  ${tests}`
}

const generateQuestions = (questions) => {
  if (!questions) {
    return ''
  }

  let text = `<a name='questions'></a>
## Questions
`

  if (questions.contact) {
    text += questions.contact + '\n\n'
  }

  if (questions.github) {
    text += `${questions.github}'s [GitHub](https://github.com/${questions.github})\n\n`
  }

  if (questions.email) {
    text += `Email me at <${questions.email}>`
  }

  return text;
}

// function to generate markdown for README
function generateMarkdown(templateData) {
  // deconstruction of data
  const { title, sections, description, installation, usage, license, contributingSelect, contributing, tests, ...questions } = templateData;

  return `# ${title}

${generateDescription(description)}

${generateInstallation(installation)}

${generateToC(sections)}

${generateUsage(usage)}

${generateLicense(license)}

${generateContributing(contributingSelect, contributing)}

${generateTests(tests)}

${generateQuestions(questions)}
`
}

module.exports = generateMarkdown;