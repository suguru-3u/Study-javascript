const input = window.prompt('数字を入力してください');

const num = Number(input);

console.log(typeof num);
console.log(input);

function sum(...values) {
    return values.reduce((total, value) => {
        // 値がNumber型ではない場合に、例外を投げる
        if (typeof value !== "number") {
            throw new Error(`${value}はNumber型ではありません`);
        }
        return total + Number(value);
    }, 0);
}
const x = 1, z = 10;
let y; // `y`はundefined
console.log(x, y, z);
// Number型の値ではない`y`を渡しているため例外が発生する
console.log(sum(x, y, z)); // => Error

function isEmptyString(str){
    return typeof str === 'string' && str.length === 0;
}

console.log(isEmptyString("")); // => true
// falsyな値でも正しく判定できる
console.log(isEmptyString(0)); // => false
console.log(isEmptyString()); // => false

function echo(x = "デフォルト値"){
    return x;
}

console.log(echo());

function fn(...args){
    console.log(args);
}

fn(2,1,2,3,4,);

function p(user){
    console.log(user.id);
}

const user = {
    id: 42
};

p(user)

function a(){
    console.log(1);
}

const myFunc = a;
myFunc();

const v = function(){
    console.log(4);
};

v();

const f = function innerfunction(n){
    if(n===0){
        return 1;
    }

    return n * innerfunction(n -1);
};

f(3);

// 仮引数の数と定義
const fnA = () => { /* 仮引数がないとき */ };
const fnB = (x) => { /* 仮引数が1つのみのとき */ };
const fnC = x => { /* 仮引数が1つのみのときは()を省略可能 */ };
const fnD = (x, y) => { /* 仮引数が複数のとき */ };
// 値の返し方
// 次の２つの定義は同じ意味となる
const mulA = x => { return x * x; }; // ブロックの中でreturn
const mulB = x => x * x;     

const array = [1,2,3];

const doubleArray = array.map(function(value){
    return value * 2;
});

const aaaaa = array.map(value => value * 2);

let yutuber = {
    list:{
        business:{
            yutubers:[
                {name: "しまぶー",age:20,pp(){} }
            ],
            teach(){}
        }
    },
    plan(){}
};

yutuber.list.business.yutubers[0].name;


function isEven(num){
    return num % 2 === 0;
}

function isEvenInculuded(numbers){
    for(let i = 0 ; i < numbers.length ; i ++){
        const num = numbers[i];
        if(isEven(num)){
            return true;
        }
    }
    return false
}

const numbers = [1,5,7,9,10];

console.log(isEvenInculuded(numbers));