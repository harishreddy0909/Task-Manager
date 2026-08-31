const bcrypt = require('bcrypt');
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '@Harish123',
  database: 'taskmanager'
});

const email = 'test@example.com';
const password = '123456';

bcrypt.hash(password, 10, (err, hash) => {
  if (err) throw err;
  const sql = 'INSERT INTO users (email, password) VALUES (?, ?)';
  db.query(sql, [email, hash], (err, result) => {
    if (err) throw err;
    console.log('Test user inserted');
    db.end();
  });
});
