// server.js

const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

// MySQLの接続情報
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'darekiteru',
});

// MySQLへの接続
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

// POSTリクエストのボディーパーサー
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 在室状況の更新API
app.post('/updateStatus', (req, res) => {
  const { username, status } = req.body;

  // TODO: MySQLへのデータの追加や更新処理を実装
  // ユーザー名と状況をデータベースに保存するなどの操作を行う

  res.sendStatus(200);
});

// ログアウトAPI
app.post('/logout', (req, res) => {
  const { username } = req.body;

  // TODO: ログアウト処理を実装
  // ユーザー名に紐づくセッション情報の削除などの操作を行う

  res.sendStatus(200);
});

// サーバーの起動
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
