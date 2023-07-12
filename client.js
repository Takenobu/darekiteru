// ログインフォームのサブミットイベント
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // TODO: ログイン処理を実装
    // ユーザー名とパスワードをサーバーに送信し、ログインの検証を行う
    // ログインが成功した場合はdashboard.htmlにリダイレクトする
  
    // ダミーのリダイレクト処理（ログイン成功時にdashboard.htmlに移動）
    window.location.href = 'dashboard.html';
  });
  
  // アカウント登録フォームのサブミットイベント
  document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const roomID = document.getElementById('roomID').value;
  
    // TODO: アカウント登録処理を実装
    // ユーザー名、パスワード、ルームIDをサーバーに送信し、アカウントの登録処理を行う
    // 登録が成功した場合はdashboard.htmlにリダイレクトする
  
    // ダミーのリダイレクト処理（登録成功時にdashboard.htmlに移動）
    window.location.href = 'dashboard.html';
  });
  
  // 在室状況を更新するボタンのクリックイベント
  document.getElementById('inButton').addEventListener('click', function() {
    updateStatus('在室');
  });
  
  document.getElementById('outButton').addEventListener('click', function() {
    updateStatus('不在');
  });
  
  document.getElementById('tempOutButton').addEventListener('click', function() {
    updateStatus('一時不在');
  });
  
  // ログアウトボタンのクリックイベント
  document.getElementById('logoutButton').addEventListener('click', function() {
    logoutUser();
  });
  
  // 在室状況を更新する処理
  function updateStatus(status) {
    // TODO: 在室状況の更新処理を実装
    // ユーザー名と選択した状況（status）をサーバーに送信し、データベースを更新するなどの処理を行う
    // 更新が成功した場合は適切なフィードバックを表示する
  }
  
  // ログアウト処理
  function logoutUser() {
    // TODO: ログアウト処理を実装
    // ログアウトの処理をサーバーに送信するなどの操作を行う
  }
  // client.js

// ログアウトボタンのクリックイベント
document.getElementById('logoutButton').addEventListener('click', function() {
    logoutUser();
  });
  
  // ログアウト処理
  function logoutUser() {
    // TODO: ログアウト処理を実装
    // サーバーにログアウトのリクエストを送信するなどの操作を行う
    // ログアウトが成功した場合は適切なフィードバックを表示する
  
    // ダミーのリダイレクト処理（ログアウト成功時にlogin.htmlに移動）
    window.location.href = 'login.html';
  }
  // ログアウトボタンのクリックイベント
document.getElementById('logoutButton').addEventListener('click', function() {
    logoutUser();
  });
  
  // ログアウト処理
  function logoutUser() {
    // TODO: ログアウト処理を実装
    // サーバーにログアウトのリクエストを送信するなどの操作を行う
    // ログアウトが成功した場合は適切なフィードバックを表示する
  
    // ダミーのリダイレクト処理（ログアウト成功時にlogin.htmlに移動）
    window.location.href = 'login.html';
  }
  