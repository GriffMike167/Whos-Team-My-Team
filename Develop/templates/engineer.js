function generateEngineer(engineer){
    return '
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
    <link rel="stylesheet" href="style.css"></link>
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                {{ team }}
            </div>
        </div>
    </div>
</body>



        <div class="card employee-card">
            <div class="card-header">
                <h2 class="card-title">${engineer.name}</h2>
                <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>{{ role }}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: {{ id }}</li>
                    <li class="list-group-item">Email: <a href="mailto:{{ email }}">{{ email }}</a></li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/{{ github }}" target="_blank" rel="noopener noreferrer">{{ github }}</a></li>
                </ul>
            </div>
        </div>
    </html>
'
};