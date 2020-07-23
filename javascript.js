window.alert('こんにちわ、世界！');
//コメント
// エスケープシーケンス
let x = 'こんにちわ \n よろしく!';
console.log(x);

// 定数は大文字で定義する
const tax = 0.1;
let price = 800;
let sum = tax * price;
console.log(sum);

// テンプレート文字列(バッククォートを使用する)
let name = '田中';
let str = `こんにちわ,${name}さん`;
console.log(str);

// 配列
let date = [0,1,10];
console.log(date[2]);

// オブジェクトリテラル(ハッシュ,連想配列とも言う)
let obj = {x:1, y:2, g:3};
console.log(obj.x);
