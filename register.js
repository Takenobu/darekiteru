document.getElementById('registerForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const roomID = document.getElementById('roomID').value;

  // アカウント登録処理
  registerAccount(username, password, roomID);
});

document.getElementById('createRoomButton').addEventListener('click', function() {
  // ルームを新規作成するボタンがクリックされた場合の処理
  window.location.href = 'newroom.html';
});

// アカウント登録処理
function registerAccount(username, password, roomID) {
  // TODO: サーバーへのアカウント登録リクエストを実装
  // ユーザー名、パスワード、ルームIDをサーバーに送信し、アカウントの登録処理を行う
  // 登録が成功した場合はlogin.htmlにリダイレクトする

  // ダミーのリダイレクト処理（登録成功時にlogin.htmlに移動）

  

  window.location.href = 'login.html';  
}

