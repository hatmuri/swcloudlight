const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors = require('cors');
const PORT = 80;

const db = mysql.createPool({
    host : "cloudlight-db.c5u46ic6w8qv.us-east-2.rds.amazonaws.com",
    user : "master",
    password : "20190995",
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
  
// 정적 이미지를 gbimages 디렉토리에서 제공하는 미들웨어
app.use('/gbimages', express.static('gbimages'));

app.get('/api/images/:imageId', (req, res) => {
    const imageId = req.params.imageId;
    const imagePath = `gbimages/${imageId}.jpg`;

    // 이미지 파일을 전송합니다
    res.sendFile(imagePath, { root: __dirname });
});

app.listen(PORT, ()=>{
    console.log('running on port', PORT);
})