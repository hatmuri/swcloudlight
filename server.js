const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors = require('cors');
const PORT = process.env.port || 8000;

const db = mysql.createPool({
    host : "localhost",
    user : "root",
    password : "1111",
    database : "guestbook_db"
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get("/api/get/all", (req, res)=>{
    const sqlQuery = "SELECT * FROM guestbook ORDER BY created_at DESC;";
    db.query(sqlQuery, (err, result)=>{
        res.send(result);
    })
})

app.get("/api/get", (req, res)=>{
    const sqlQuery = "SELECT * FROM guestbook ORDER BY created_at DESC LIMIT 7;";
    db.query(sqlQuery, (err, result)=>{
        res.send(result);
    })
})

app.post("/api/insert", (req, res)=>{
    const nickname = req.body.nickname;
    const message = req.body.message;
    const name = req.body.name;
    const phone = req.body.phone;
    const sqlQuery = "INSERT INTO guestbook (name, phone_number, nickname, message) VALUES (?,?,?,?)";
    db.query(sqlQuery, [name, phone, nickname, message], (err, result)=>{
        res.send('success');
    })
})

app.listen(PORT, ()=>{
    console.log('running on port', PORT);
})