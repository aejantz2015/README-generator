// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

// array of questions to prompt the user

    function init() {
        inquirer.
        prompt ([
    {
        name: 'title',
        type: 'input',
        message: 'What is the title of your application?',
    },
    {
        name: 'description',
        type: 'input',
        message: 'Please describe the purpose of your application.'
    },
    {
        name: 'contact',
        type: 'input',
        message: 'Please enter a link to your GitHub profile and your email address.'
    }, 
    {
        name: 'installation',
        type: 'input',
        message: 'What will be required for users to install and use the application locally?'
    },
    {
        name: 'usage',
        type: 'input',
        message: 'How will this application be used?'
    },
    {
        name: 'contributors',
        type: 'input',
        message: 'Please list any contributors as well as their GitHub username.'
    },
    {
        name: 'license',
        type: 'list',
        message: 'Please chooose a license type:',
        choices: ['ISC', 'MPL 2.0', 'MIT', 'No License']
    },
    {
        name: 'test',
        type: 'input',
        message: 'Please descirbe how this application was tested.'
    }
])

.then((repsonses) => {
    const markdown = generateMarkdown(repsonses);

fs.writeFile('./Output/README.md', markdown, (err) =>
 err ? console.log(err) : console.log ('Successfully created the README file'))
})
};

// Function call to initialize app
init();
