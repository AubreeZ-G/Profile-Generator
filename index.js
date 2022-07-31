const inquirer = require('inquirer');
const fs = require('fs');

// Use writeFileSync method to use promises instead of a callback function

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the team managers name?',
    },
    {
      type: 'input',
      name: 'employeeId',
      message: 'What is the employee id?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
    {
      type: 'input',
      name: 'office',
      message: 'What is the office number?',
    },
    {
        type: "list",
        message: "Would you like to",
        name: "position",
        choices: ["add engineer", "add intern", "finish building your team"],
    },
   
  ]);
};
//if add engineer => (




const generateHTML = ({ name, employeeId, email, office, position }) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>${name}</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">${position}</h1>
    <p class="lead">Employee ID number # ${employeeId}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">${email}</li>
      <li class="list-group-item">Office # ${office}</li>
      </ul>
  </div>
</div>
</body>
</html>`;

// Bonus using writeFileSync as a promise
// const init = () => {
//     initialPrompt().then((
//     {choice})=> 

//     if (choice === "add engineer");
//     .then promptUser;

// //    if (choice === "add intern");
// //     .then promptUser;

// //   if (choice === "finish building your team")
// //    .then
//     promptUser()
// //  Use writeFileSync method to use promises instead of a callback function
//  .then((answers) => fs.writeFileSync('index.html', generateHTML(answers)))
//  .then(() => console.log('Successfully wrote to index.html'))
//  .catch((err) => console.error(err));
// // };

// init();

function writeToFile(fileName, data) {
  fs.writeFile("./dist/index.html", generateHTML(data), function (err) {
    if (err) {
      return console.log(err);
    }
    console.log('Success!');
  });
}

function init() {
  promptUser()
    .then( (answer) => {
      const fileName =
        answer.title
          // .split(' ')
          // .join('') + '.md';

      writeToFile(fileName, answer);
    });
};

init()