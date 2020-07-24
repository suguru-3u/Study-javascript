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

// 分割代入(配列)
let date1 = [55,56,48,89,90];
let [x0,x1,x2,x3,x4] = date1;
console.log(x0);
console.log(x2);

// 分割代入(オブジェクト)
let book = {title: 'java',pricee:500,publish:'技術評論社' };
let {pricee,title,memo = 'なし'} = book;
console.log(pricee);
console.log(title);
console.log(memo);
let book2 = {title: 'java',pricee:500,publish:'技術評論社' };
let {publish:name2} = book2;
console.log(name2);

// 条件演算子
let v = 80;
console.log((v > 70 ) ? '合格':'不合格');

// delete演算子
let d = [55,80,90];
console.log(delete d[0]);
console.log(d);
let d2 = 1;
console.log(delete d2);
console.log(d2);

// typeof演算子
let t = 1;
console.log(typeof t);
