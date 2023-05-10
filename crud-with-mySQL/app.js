const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');

app.use(bodyParser.json());

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'auth_demo'
});

conn.connect();

app.get('/api/students', (req, res) => {
    let sqlQuery = "SELECT * FROM students";
    

    let query = conn.query(sqlQuery, (err, results) => {
        res.send(apiResponse(results));
    });

});

app.post('/api/students', (req, res) => {
    

    let sqlQuery = "INSERT INTO students (name) VALUES ('"+req.body.name+"')";

    let query = conn.query(sqlQuery, (err, results) => {
        res.send(apiResponse(results));
    });
    
});

app.put('/api/students/:id', (req, res) => {
    let sqlQuery = "UPDATE students SET name='" + req.body.name + "'WHERE id=" + req.params.id + "";

    let query = conn.query(sqlQuery, (err, results) => {
        res.send(apiResponse(results));
    });
});


app.delete('/api/students/:id', (req, res) => {
    let sqlQuery = "DELETE FROM students WHERE id=" + req.params.id + "";

    let query = conn.query(sqlQuery, (err, results) => {
        res.send(apiResponse(results));
    });
});

function apiResponse(results) {
    return JSON.stringify({ "status": 200, "error": null, "response": results });
}

app.listen(3000, () => {
    console.log('Server started on port 3000...');
}); 