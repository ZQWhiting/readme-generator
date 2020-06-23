const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title? (Required)',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter a value!');
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'sections',
        message: 'What sections do you wish to include? (check all to be included)',
        choices: ['Description', 'Table of Contents', 'Installation', 'Usage', 'License', 'Contributing', 'Tests', 'Questions']
    },
    {
        type: 'input',
        name: 'description',
        message: `
        ================================================================================
        Input allows Markdown formatting.
        Formatting exceptions: use <br> for linebreak and <br><br> for paragraph breaks.
        ================================================================================
        ` + '\nWhat is your project description?\n\n',
        when: ({ sections }) => sections.includes('Description')
    },
    {
        type: 'input',
        name: 'installation',
        message: `
        ================================================================================
        Input allows Markdown formatting.
        Formatting exceptions: use <br> for linebreak and <br><br> for paragraph breaks.
        ================================================================================
        ` + '\nHow would one install your project?\n\n',
        when: ({ sections }) => sections.includes('Installation')
    },
    {
        type: 'input',
        name: 'usage',
        message: `
        ================================================================================
        Input allows Markdown formatting.
        Formatting exceptions: use <br> for linebreak and <br><br> for paragraph breaks.
        ================================================================================
        ` + '\nHow would one use your project?\n\n',
        when: ({ sections }) => sections.includes('Usage')
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license does your project use?',
        choices: ['No license', 'AFL v3.0', 'GNU AGPLv3', 'Apache 2.0', 'Artistic 2.0', 'BSD 0-Clause', 'BSD 2-Clause', 'BSD 3-Clause Clear', 'BSD 3-Clause', 'BSD 4-Clause', 'BSL v1.0', 'CC-BY-4.0', 'CC-BY-SA-4.0', 'CC0-1.0', 'CeCILL v2.1', 'ECL v2.0', 'EPL v1.0', 'EPL v2.0', 'EUPL v1.1', 'EUPL v1.2', 'GNU GPLv2', 'GNU GPLv3', 'ISC', 'GNU LGPLv2.1', 'GNU LGPLv3', 'LPPL v1.3c', 'MIT', 'MPL v2', 'Ms-PL', 'Ms-RL', 'UIUC/NCSA', 'ODbL', 'OFL v1.1', 'OSL v3.0', 'PostgreSQL', 'Unlicense', 'UPL v1.0', 'Vim', 'Zlib'],
        when: ({ sections }) => sections.includes('License')
    },
    {
        type: 'list',
        name: 'contributingSelect',
        message: 'Do you wish to use the Contributor Covenant or create your own contributing section?',
        choices: ['Contributor Covenant', 'Create your own'],
        when: ({ sections }) => sections.includes('Contributing')
    },
    {
        type: 'input',
        name: 'contributing',
        message: `
        ================================================================================
        Input allows Markdown formatting.
        Formatting exceptions: use <br> for linebreak and <br><br> for paragraph breaks.
        ================================================================================
        ` + '\nWhat guidelines would other developers need to follow when contributing to your project?\n\n',
        when: ({ contributingSelect }) => {
            if (contributingSelect)
                contributingSelect.includes('Create your own')
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: `
        ================================================================================
        Input allows Markdown formatting.
        Formatting exceptions: use <br> for linebreak and <br><br> for paragraph breaks.
        ================================================================================
        ` + '\nWhat tests would you like to add?\n\n',
        when: ({ sections }) => sections.includes('Tests')
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
        when: ({ sections }) => sections.includes('questions')
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        when: ({ sections }) => sections.includes('questions')
    },
    {
        type: 'input',
        name: 'questions',
        message: `
        ================================================================================
        Input allows Markdown formatting.
        Formatting exceptions: use <br> for linebreak and <br><br> for paragraph breaks.
        ================================================================================
        ` + '\nHow should others reach you if they have questions?\n\n',
        when: ({ sections }) => sections.includes('questions')
    },
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    return inquirer
        .prompt(questions)
        .then(answers => console.log(answers))
}

// function call to initialize program
init();