const addTask = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

// ローカル外レージ上の機能
(function(){
    // 初期化処理
    // ローカルストレージに格納されている値を取得し、リストを生成する
    for(let key in localStorage){
        let html = localStorage.getItem(key);
        if (html) {
            list.innerHTML += localStorage.getItem(key);
        }
    }
})();

const saveTaskToLocalStorage = (task, html) => {
    // null は、localStorage に保存しない
    if(html){
        // localStorage は、0 から始まる
        localStorage.setItem(task, html);
        return;
    }
    return;
}

const deleteTaskFromLocalStorage = task => {
    localStorage.removeItem(task);
    return;
}

// 現在日時の取得
const nowDate = new Date();
const year = nowDate.getFullYear();
const month = nowDate.getMonth()+1;
const date = nowDate.getDate();
const yymmdd = year + ":" + month + ":" + date;
const currentTime = window.document.getElementById("currentTime");
currentTime.innerHTML += yymmdd


// 登録する際の処理
const createTodoList = task => {
    // HTML テンプレートを生成
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${task}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;

    // index.htmlに要素を追加
    list.innerHTML += html;
    // ローカルストレージ上に保存
    saveTaskToLocalStorage(task, html); 
}

addTask.addEventListener('submit', e => {
    // デフォルトのイベントを無効
    e.preventDefault();

    // タスクに入力した値を空白を除外して格納
    const task = addTask.add.value.trim();
    // 入力した値が空白じゃないかの確認
    if(task.length) {
        // Todo List の HTML を作成
        createTodoList(task);
        // タスクに入力した文字をクリア
        addTask.reset();
    }
});

// 削除機能
list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
        // ローカルストレージ上のデータを削除する
        const task = e.target.parentElement.textContent.trim()
        deleteTaskFromLocalStorage(task);
    }
});

// 検索機能
const filterTasks = (term) => {
    Array.from(list.children)
    // フィルタ条件
        // メソッドチェーン!!!
        .filter((todo) => !todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.add('filtered'));

    Array.from(list.children)
        .filter((todo) =>  todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.remove('filtered'));
};

search.addEventListener('keyup',() => {
    // 空白削除かつ、小文字に変換(大文字・小文字の区別をなくす)
    const term = search.value.trim().toLowerCase();
    filterTasks(term);
});