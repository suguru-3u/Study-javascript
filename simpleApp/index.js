// DOM
const btn = document.getElementById("addBtn");
const lists = document.getElementById("lists");


// 関数
function addList(user){
    const list = document.createElement("li");
    list.innerText = user.name;
    lists.appendChild(list);
}

async function getUsers(){
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    return users;
}

async function listusers(){
    const users = await getUsers();
    users.forEach(addList); 
}

// イベント
window.addEventListener("load",listusers);
btn.addEventListener("click",listusers);

