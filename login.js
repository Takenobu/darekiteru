// ログインフォームのサブミットイベント
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // TODO: ログイン処理を実装
    // ユーザー名とパスワードをサーバーに送信し、ログインの検証を行う
    // ログインが成功した場合はindex.htmlにリダイレクトする
  
    // ダミーのリダイレクト処理（ログイン成功時にdashboard.htmlに移動）
    window.location.href = 'dashboard.html';
  });
  
  // アカウント登録フォームのサブミットイベント
  document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // TODO: アカウント登録処理を実装
    // ユーザー名とパスワードをサーバーに送信し、アカウントの登録処理を行う
    // 登録が成功した場合はindex.htmlにリダイレクトする
  
    // ダミーのリダイレクト処理（登録成功時にdashboard.htmlに移動）
    window.location.href = 'dashboard.html';
  });
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

  
    // ユーザー名を取得
    const username = document.getElementById('username').value;
  
    // ユーザー名をlocalStorageに保存
    localStorage.setItem('username', username);
    console.log("sample")

  
    // dashboard.htmlにリダイレクト
    // window.location.href = 'dashboard.html';
  });
  