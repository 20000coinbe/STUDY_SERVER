const express = require('express');

// router 불러오기
const admin = require('./routes/admin');
const contacts = require('./routes/contacts');

const app = express(); // express() : express생성을 위한 top-level function

const port = 3000; // 포트번호

app.get('/', (req, res) => { // get() = URL추가
    res.send("Hello express first page");
});

app.get('/second', (req, res) => {
    res.send("Second page");
});

app.use('/admin', admin); // admin부터는 해당 라우터 모듈이 처리한다
app.use('/contacts', contacts);

app.listen(port, () => { // TCP의 listen()과 동일 
    console.log(`Open PORT : ${port}`);
});