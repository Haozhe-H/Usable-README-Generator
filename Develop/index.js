// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('requirer')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [

        //title
        {
            type: 'input',
            name: 'title',
            message: 'What is the title for the project?',
            validate: titleinput => {
                if(titleinput){
                    return true;
                }else{
                    console.log('Please enter a project title');
                    return false;
                }
            }
        },
        //description
        {
            type: 'input',
            name: 'description',
            message: 'Provide a short description explaining the what, why, and how of your project?',
            validate: descriptioninput => {
                if(descriptioninput){
                    return true;
                }else{
                    console.log('Please enter a project description');
                    return false;
                }
            }
        },
        //installation
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project?',
            validate: instalinput => {
                if(instalinput){
                    return true;
                }else{
                    console.log('Please enter a project installation guide');
                    return false;
                }
            }
        },
        //usage
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use.',
            validate: usageinput => {
                if(usageinput){
                    return true;
                }else{
                    console.log('Please enter a project usage guide');
                    return false;
                }
            }
        },
        //credit
        {
            type: 'input',
            name: 'credit',
            message: 'List your collaborators, if any, with links to their GitHub profiles.',
            
        },
        //license
        {
            type: 'list',
            name: 'license',
            message: 'What license is used in this project?',
            choices: ['MPL', 'GPL', 'BSD', 'MIT', 'Apache'],
            validate: licenseinput => {
                if(licenseinput){
                    return true;
                }else{
                    console.log('Please select one of the options');
                    return false;
                }
            }
        },
        //features
        {
            type: 'input',
            name: 'feature',
            message: 'If your project has a lot of features, list them here.',
            validate: featureinput => {
                if(featureinput){
                    return true;
                }else{
                    console.log('Please enter the project features');
                    return false;
                }
            }
        },
        //contribution
        {
            type: 'input',
            name: 'contribution',
            message: 'If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so.',
        },
        //tests
        {
            type: 'input',
            name: 'test',
            message: 'Please provide test guideline for this project',
            validate: testinput => {
                if(testinput){
                    return true;
                }else{
                    console.log('Please enter the project test guideline');
                    return false;
                }
            }
        },
        //author
        {
            type: 'input',
            name: 'username',
            message: 'Please enter Github username for this project',
            validate: usernameinput => {
                if(usernameinput){
                    return true;
                }else{
                    console.log('Please enter the username');
                    return false;
                }
            }
        },
        //email
        {
            type: 'input',
            name: 'email',
            message: 'Please enter user contect email',
            validate: emailinput => {
                if(emailinput){
                    return true;
                }else{
                    console.log('Please enter the contect email');
                    return false;
                }
            }
        },
       
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('./READMEgenerator.md', data, err => {
        if(err){
            console.log(err);
            return;
        }else{
            console.log('Success!');
        }
    })
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then
}

// Function call to initialize app
init();
