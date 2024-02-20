require('dotenv').config();
const { Deta } = require('deta');

const deta = Deta(process.env.DETA_KEY);

// This how to connect to or create a database.
const db = deta.Base('test_db');

// добавляем случайную строку
const randomString = Math.random().toString(36).substring(7);
db.put({ key: randomString }).then((res) => {
    console.log(res);
});

// fetch data from the database
db.fetch().then(data => {
    console.log(data);
});

