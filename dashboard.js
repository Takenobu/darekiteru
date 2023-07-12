// ダッシュボード要素の取得
const presentList = document.getElementById('presentList');
const absentList = document.getElementById('absentList');
const temporarilyAbsentList = document.getElementById('temporarilyAbsentList');
const announcement = document.getElementById('announcement');
const updateStatusBtn = document.getElementById('updateStatusBtn');
const statusSelect = document.getElementById('status');
const chatForm = document.getElementById('chatForm');
const chatContainer = document.getElementById('chatContainer');

// サーバーから取得した在室状況データの仮想的なサンプル
const sampleData = {
  present: ['Alice', 'Bob'],
  absent: ['Charlie', 'David'],
  temporarilyAbsent: ['Eve']
};

// 在室状況データを表示する関数
function showPresenceStatus(data) {
  presentList.innerHTML = '';
  absentList.innerHTML = '';
  temporarilyAbsentList.innerHTML = '';

  for (const status in data) {
    const list = getListElement(status);
    data[status].forEach(name => {
      const listItem = document.createElement('li');
      listItem.textContent = name;
      list.appendChild(listItem);
    });
  }
}

// 状態の更新ボタンのクリックイベントハンドラ
updateStatusBtn.addEventListener('click', function() {
  const selectedStatus = statusSelect.value;
  // TODO: サーバーに選択された状態を送信し、更新処理を行う

  // 更新後の在室状況データを再表示する（ダミーデータを使用）
  showPresenceStatus(sampleData);
});

// 初期表示時に在室状況データを表示する（ダミーデータを使用）
showPresenceStatus(sampleData);

// ステータスに応じたリスト要素を取得する関数
function getListElement(status) {
  switch (status) {
    case 'present':
      return presentList;
    case 'absent':
      return absentList;
    case 'temporarilyAbsent':
      return temporarilyAbsentList;
    default:
      throw new Error(`Invalid status: ${status}`);
  }
}

// 在室中のリストの要素を作成
function createPresentListItem(name) {
  const listItem = document.createElement('li');
  listItem.className = 'list-group-item present';
  listItem.textContent = name;
  return listItem;
}

// 不在のリストの要素を作成
function createAbsentListItem(name) {
  const listItem = document.createElement('li');
  listItem.className = 'list-group-item absent';
  listItem.textContent = name;
  return listItem;
}

// 一時不在のリストの要素を作成
function createTemporarilyAbsentListItem(name) {
  const listItem = document.createElement('li');
  listItem.className = 'list-group-item temporarily-absent';
  listItem.textContent = name;
  return listItem;
}

// ダミーデータ（在室中、不在、一時不在の人のリスト）
const presentData = ['John Doe', 'Jane Smith'];
const absentData = ['Mike Johnson'];
const temporarilyAbsentData = ['Emily Williams'];

// 在室中リストを更新
function updatePresentList() {
  presentList.innerHTML = ''; // リストを初期化

  presentData.forEach((name) => {
    const listItem = createPresentListItem(name);
    presentList.appendChild(listItem);
  });
}

// 不在リストを更新
function updateAbsentList() {
  absentList.innerHTML = ''; // リストを初期化

  absentData.forEach((name) => {
    const listItem = createAbsentListItem(name);
    absentList.appendChild(listItem);
  });
}

// 一時不在リストを更新
function updateTemporarilyAbsentList() {
  temporarilyAbsentList.innerHTML = ''; // リストを初期化

  temporarilyAbsentData.forEach((name) => {
    const listItem = createTemporarilyAbsentListItem(name);
    temporarilyAbsentList.appendChild(listItem);
  });
}

// ページが読み込まれた時にリストを更新
window.addEventListener('load', () => {
  updatePresentList();
  updateAbsentList();
  updateTemporarilyAbsentList();
});

// ページが読み込まれた時にユーザー名を表示
window.addEventListener('load', () => {
  const username = localStorage.getItem('username');
  const usernameElement = document.getElementById('username');
  usernameElement.textContent = username;
});

// ユーザー名を取得して表示する
function showLoggedInUser() {
  const loggedInUserElement = document.getElementById('loggedInUser');
  const username = localStorage.getItem('username');
  if (username) {
    loggedInUserElement.textContent = `ユーザー名: ${username}`;
  }
}

// ページロード時に実行
document.addEventListener('DOMContentLoaded', function() {
  showLoggedInUser();
});

// チャットメッセージの送信
chatForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const usernameInput = document.getElementById('usernameInput');
  const messageInput = document.getElementById('messageInput');

  const username = usernameInput.value;
  const message = messageInput.value;

  if (username && message) {
    const timestamp = getCurrentTimestamp();
    const chatMessage = formatChatMessage(username, timestamp, message);
    chatContainer.insertAdjacentHTML('beforeend', chatMessage);
    usernameInput.value = '';
    messageInput.value = '';
  }
});

// チャットメッセージの削除
chatContainer.addEventListener('click', function(e) {
  if (e.target.classList.contains('delete-message')) {
    const messageContainer = e.target.closest('.message-container');
    messageContainer.remove();
  }
});

// 現在のタイムスタンプを取得する関数
function getCurrentTimestamp() {
  const now = new Date();
  const timestamp = now.toLocaleString('ja-JP');
  return timestamp;
}

// チャットメッセージのフォーマット
function formatChatMessage(username, timestamp, message) {
  return `
    <div class="message-container">
      <div class="message-header">
        <span class="message-username">${username}</span>
        <span class="message-timestamp">${timestamp}</span>
        <button class="delete-message btn btn-link btn-sm">削除</button>
      </div>
      <div class="message-content">${message}</div>
    </div>
  `;
}

