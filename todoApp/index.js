const addTask = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

window.addEventListener("onload",getNowDate());

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
    taskNumber();
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
function getNowDate(){
    const nowDate = new Date();
    const year = nowDate.getFullYear();
    const month = nowDate.getMonth()+1;
    const date = nowDate.getDate();
    const yymmdd = year + ":" + month + ":" + date;
    const currentTime = window.document.getElementById("currentTime");
    currentTime.innerHTML += yymmdd
}

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
        taskNumber();
    }
});

// 削除機能
list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        if(confirm("削除してよろしいでしょうか?")){
            e.target.parentElement.remove();
            // ローカルストレージ上のデータを削除する
            const task = e.target.parentElement.textContent.trim()
            deleteTaskFromLocalStorage(task);
            taskNumber();
        } 
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

// 登録しているタスクの量を数える
function taskNumber(){
    const taskCounts = list.children;
    const taskCount = document.getElementById("taskCount");
    taskCount.innerHTML = taskCounts.length;

}


async function getWeather(){
    const res = await fetch("https://api.openweathermap.org/data/2.5/onecall?lat=35.681236&lon=139.767125&units=metric&lang=ja&appid={b963564bc05b57fcf66d2cd362542dfe}");
    const users = await res.json();
    console.log(users);
    return users;
}

getWeather();