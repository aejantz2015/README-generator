// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
// const questions = [
    function init() {
        inquirer.prompt ([
    {
        name: 'title',
        type: 'input',
        message: 'What is the title of your application?',
    },
    {
        name: 'description',
        type: 'input',
        message: 'Please describe the purpose of your application and how to use it.'
    },
    {
        name: 'GitHub',
        type: 'input',
        message: 'Please enter your GitHub username.'
    }, 
    {
        name: 'email',
        type: 'input',
        message: 'Please enter your email address.'
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
        choices: ['ISC, GPL v3, MIT, No License']
    },
    {
        name: 'test',
        type: 'input',
        message: 'Please descirbe how this application was tested.'
    }
]);

}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
