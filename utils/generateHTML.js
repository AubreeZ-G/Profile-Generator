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