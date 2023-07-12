document.getElementById('createRoomForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const roomName = document.getElementById('roomName').value;
    const roomPassword = document.getElementById('roomPassword').value;
  
    // TODO: ルーム作成処理を実装
    // 部屋の名前とパスワードをサーバーに送信し、新しいルームの作成処理を行う
    // 作成が成功した場合は適切なフィードバックを表示する
    
    // ダミーのリダイレクト処理（作成成功時にdashboard.htmlに移動）
    window.location.href = 'dashboard.html';
  });
  