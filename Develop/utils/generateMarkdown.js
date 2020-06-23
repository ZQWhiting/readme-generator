const generateDescription = (description) => {
  if (!description) {
    return '';
  }

  return `<a name='description'></a>
  ## Description
  ${description}`.trim()
}

const generateToC = (sections) => {
  let text = `## Table of Contents
  `

  sections.filter(item => {
    if (item !== 'Table of Contents') return item;
  })
  .forEach(section => {
    text += `* [${section}](#${section})\n`
  });

  return text.trim();
}

const generateInstallation = (installation) => {
  if (!installation) {
    return '';
  }

  return `<a name='installation'></a>
  ## Installation
  ${installation}`.trim()
}

const generateUsage = (usage) => {
  if (!usage) {
    return '';
  }

  return `<a name='usage'></a>
  ## Usage
  ${usage}`.trim()
}

const generateLicense = (license) => {
  if (!license) {
    return '';
  }

  return `<a name='license'></a>
  ## License
  ${license}`.trim()
}

const generateContributing = (contributingSelect, contributing) => {
  if (!contributingSelect) {
    return '';
  }

  if (contributing) {
    return `<a name='contributing'></a>
    ## Contributing
    ${contributing}`.trim()
  } else {
    return '';
  }
}

const generateTests = (tests) => {
  if (!tests) {
    return ''
  }

  return `<a name='tests'></a>
  ## Tests
  ${tests}`.trim()
}

const generateQuestions = (questions) => {
  if (!questions) {
    return ''
  }

  let text = `<a name='questions'></a>
  ## Questions
  `

  if (questions.contact) {
    text = text + questions.contact + '\n\n'
  }

  if (questions.github) {
    text = text + `[GitHub](https://github.com/${questions.github})\n\n`
  }

  if (questions.email) {
    text = text + `<${questions.email}>`
  }

  return text.trim()
}

// function to generate markdown for README
function generateMarkdown(templateData) {
  // deconstruction of data
  const { title, sections, description, installation, usage, license, contributingSelect, contributing, tests, ...questions } = templateData;

  return `
# ${title}

${generateDescription(description)}

${generateInstallation(installation)}

${generateToC(sections)}

${generateUsage(usage)}

${generateLicense(license)}

${generateContributing(contributingSelect, contributing)}

${generateTests(tests)}

${generateQuestions(questions)}
`.trim()
}

module.exports = generateMarkdown;
