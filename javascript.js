// window.alert('こんにちわ、世界！');
// //コメント
// // エスケープシーケンス
// let x = 'こんにちわ \n よろしく!';
// console.log(x);
//
// // 定数は大文字で定義する
// const tax = 0.1;
// let price = 800;
// let sum = tax * price;
// console.log(sum);
//
// // テンプレート文字列(バッククォートを使用する)
// let name = '田中';
// let str = `こんにちわ,${name}さん`;
// console.log(str);
//
// // 配列
// let date = [0,1,10];
// console.log(date[2]);
//
// // オブジェクトリテラル(ハッシュ,連想配列とも言う)
// let obj = {x:1, y:2, g:3};
// console.log(obj.x);
//
// // 分割代入(配列)
// let date1 = [55,56,48,89,90];
// let [x0,x1,x2,x3,x4] = date1;
// console.log(x0);
// console.log(x2);
//
// // 分割代入(オブジェクト)
// let book = {title: 'java',pricee:500,publish:'技術評論社' };
// let {pricee,title,memo = 'なし'} = book;
// console.log(pricee);
// console.log(title);
// console.log(memo);
// let book2 = {title: 'java',pricee:500,publish:'技術評論社' };
// let {publish:name2} = book2;
// console.log(name2);
//
// // 条件演算子
// let v = 80;
// console.log((v > 70 ) ? '合格':'不合格');
//
// // delete演算子
// let d = [55,80,90];
// console.log(delete d[0]);
// console.log(d);
// let d2 = 1;
// console.log(delete d2);
// console.log(d2);
//
// // typeof演算子
// let t = 1;
// console.log(typeof t);
//
// // 2-5制御構文
// // ifはどっち?switchはどちら?
//
// // if
// let ifb = 60;
// if (ifb > 0){
//   console.log('多い');
// }else{
//   console.log('少ない');
// }
//
// // switch
// let c = 'B'
// switch (c) {
//   case 'A':
//     console.log('a');
//     break;
//   case 'B':
//     console.log('Bで〜す');
//     break;
//   case 'C':
//     console.log('C');
//     break;
//   default:
//     console.log('意外で〜す');
//     break;
// }
// let r = 'B'
// switch (r) {
//   case 'A':
//   case 'B':
//   case 'C':
//     console.log('該当で〜す');
//     break;
//   default:
//     console.log('意外で〜す');
//     break;
// }
//
// // while
// let p = 8;
// while(p > 10){
//   console.log(`pの値は${p}です。`);
//   p++;
// }
// let p2 = 8;
// do{
//   console.log(`p2の値は${p2}です。`);
//   p2++;
// }while(p2 > 10);
//
// // for
// for (let q = 80; q <= 85; q++){
//   console.log(`qの値は${q}`);
// }
// // for..in(連想配列で使用)
// let date5 = {apple:150,orange:100};
// for( let key in date5){
//   console.log(`${key} = ${date5[key]}`);
// }
// // for..of(列挙可能はオブジェクト)
// let date6 = [150,100];
// Array.prototype.hoge = function(){}
// for( let value of date6){
//   console.log(value);
// }
//
// // 例外処理(try..catch..finally)
// let i = 1;
// try{
//   i = i * j;
// } catch(e) {
//   console.log(e.message);
// } finally {
//   console.log('処理は完了いたしました。')
// }

// ３章スタート
let a = new Date();
console.log(a.getFullYear());

let b = new Date(2020,4,5);
let c = new Date(2019,4,5);
let d = (b.getTime() - c.getTime());
console.log(d);

// 4章スタート
