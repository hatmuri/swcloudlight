//const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors = require('cors');
const { path } = require('animejs');
const PORT = process.env.port || 9000;

const db = mysql.createPool({
    host : "cloudlight-db.cpuo2wkealkd.ap-northeast-2.rds.amazonaws.com",
    user : "master",
    password : "20190995",
    database : "guestbook_db"
});

app.use(cors());
app.use(express.json());
//app.use(bodyParser.urlencoded({ extended: true}));

app.use(express.static(path.join(__dirname,'swcloudlight/build')));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'swclodlight/build/index.html'));
    console.log("서버 테스트");
  });
  

app.get("/api/get/all", (req, res)=>{
    const sqlQuery = "SELECT * FROM guestbook ORDER BY created_at DESC;";
    db.query(sqlQuery, (err, result)=>{
        res.send(result);
    })
    console.log("get/all");
})

app.get("/api/get", (req, res)=>{
    const sqlQuery = "SELECT * FROM guestbook ORDER BY created_at DESC LIMIT 7;";
    db.query(sqlQuery, (err, result)=>{
        res.send(result);
    })
    console.log("get");
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
    console.log("insert");
})
  
// 정적 이미지를 gbimages 디렉토리에서 제공하는 미들웨어
app.use('/gbimages', express.static('gbimages'));

app.get('/api/images/:imageId', (req, res) => {
    const imageId = req.params.imageId;
    const imagePath = `gbimages/${imageId}.jpg`;

    // 이미지 파일을 전송합니다
    res.sendFile(imagePath, { root: __dirname });
    console.log("이미지 전송");
});

app.listen(PORT, ()=>{
    console.log('running on port', PORT);
})