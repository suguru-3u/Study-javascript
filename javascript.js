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

// // ３章スタート
// let a = new Date();
// console.log(a.getFullYear());
//
// let b = new Date(2020,4,5);
// let c = new Date(2019,4,5);
// let d = (b.getTime() - c.getTime());
// console.log(d);
//
// // 4章スタート
// function getTriangle(base,height){
//   return base * height / 2 ;
// }
//
// console.log(`三角形の面積は${getTriangle(5,2)}です。`);

// let getTriangle = Function('base','height','return base * height / 2 ;');
// console.log(`三角形の面積は${getTriangle(5,2)}です。`);

// 関数リテラル
// let getTriangle = function(base,height){
//   return base * height / 2 ;
// }
//
// console.log(`三角形の面積は${getTriangle(5,2)}です。`);

// アロー関数
// let getTriangle = (base,height) => {
//   return base * height / 2 ;
// };
//
// console.log(`三角形の面積は${getTriangle(5,2)}です。`);
// let getTriangle = (base,height) =>  base * height / 2 ;
//
// console.log(`三角形の面積は${getTriangle(5,2)}です。`);
//
// let getCircle = radius => radius * radius * Math.PI;
// console.log(getCircle(3));
//
// let show = () => console.log('こんにちわ');

// function showmessage(a){
//   if(arguments.length !== 1){
//     throw new Error('引数の数が間違っています:' + arguments.length);
//   }
//   console.log(a)
// }
//
// try{
//   showmessage('山田','鈴木');
// }catch(e){
//   window.alert(e.message);
// }
// function sum(){
//   let result = 0;
//   for(let i = 0, len = arguments.length; i < len; i++){
//     let tmp = arguments[i];
//     if(typeof tmp !== 'number'){
//       throw new Error('引数が数値ではありません:' + tmp);
//     }
//     result += tmp;
//   }
//   return result;
// }
//
// try{
//   console.log(sum(1,2,3,4,'1'));
// }catch(e){
//   console.log(e.message);
// }
// function getMaxMin(...nums){
//   return [Math.max(...nums),Math.min(...nums)];
// }
// let [max,min] = getMaxMin(10,20,30,50);
// console.log(max);
// console.log(min);
// function a(date,f){
//   for(let key in date){
//     f(date[key],key);
//   }
// }
// let sum = 0;
// function b(value,key){
//   sum += value;
// }
// let c = [1,2,3,4];
// a(c,b);
// console.log(sum);
// function a(date,f){
//   for(let key in date){
//     f(date[key],key);
//   }
// }
// let c = [1,2,3,4];
// a(
//   c,
//   function(value,key){
//     console.log(key + ':' + value);
//   }
// );
// ５章
// let Menber = function(firstName,lastName){
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.getName = function(){
//     return this.firstName + '' + lastName;
//   }
// };
//
// let Name = new Menber('田中','翔');
// console.log(Name.getName());
// let Animal = function(){};
//
// Animal.p rototype = {
//   walk : function(){
//     console.log('トコトコ');
//   }
// };
//
// let Dog = function(){
//   Animal.call(this);
// };
// Dog.prototype = new Animal();
// Dog.prototype.bark = function(){
//   console.log('ワンワン');
// };
// let a = new Dog();
// a.walk();
// a.bark();
// function Triangle(){
//   var _base;
//   var _height;
//
//   Object.defineProperty(
//     this,
//     'base',
//     {
//       get:function(){
//         return _base;
//       },
//       set:function(base){
//         if(typeof base === 'number' && base > 0){
//           _base = base;
//         }
//       }
//     }
//   );
//   Object.defineProperty(
//     this,
//     'height',
//     {
//       get:function(){
//         return _height;
//       },
//       set:function(height){
//         if(typeof height === 'number' && height > 0){
//           _height = height ;
//         }
//       }
//     }
//   );
// };
//
// Triangle.prototype.getArea = function(){
//   return this.base * this.height /2 ;
// };
//
// var t = new Triangle();
// t.base = 10;
// t.height = 2;
// console.log(t.base)
// console.log(t.getArea(10,2));
// let current = new Date;
// let result = document.getElementById('result');
// result.textContent = current.toLocaleString();
//
// アロー関数
// let getTriangle = (base,height) => {
//   return base * height / 2 ;
// };
//
// console.log(`三角形の面積は${getTriangle(5,2)}です。`);
// let getTriangle = (base,height) =>  base * height / 2 ;
//
// console.log(`三角形の面積は${getTriangle(5,2)}です。`);
//
// let getCircle = radius => radius * radius * Math.PI;
// console.log(getCircle(3));
//
// let show = () => console.log('こんにちわ');
//
// function showmessage(a){
//   if(arguments.length !== 1){
//     throw new Error('引数の数が間違っています:' + arguments.length);
//   }
//   console.log(a)
// }
//
// try{
//   showmessage('山田','鈴木');
// }catch(e){
//   window.alert(e.message);
// }
// function sum(){
//   let result = 0;
//   for(let i = 0, len = arguments.length; i < len; i++){
//     let tmp = arguments[i];
//     if(typeof tmp !== 'number'){
//       throw new Error('引数が数値ではありません:' + tmp);
//     }
//     result += tmp;
//   }
//   return result;
// }
//
// try{
//   console.log(sum(1,2,3,4,'1'));
// }catch(e){
//   console.log(e.message);
// }
// function getMaxMin(...nums){
//   return [Math.max(...nums),Math.min(...nums)];
// }
// let [max,min] = getMaxMin(10,20,30,50);
// console.log(max);
// console.log(min);
// function a(date,f){
//   for(let key in date){
//     f(date[key],key);
//   }
// }
// function btn_click(){
//   window.alert('ボタンがクリックされました!');
// }
// document.getElementById('btn').onclick = function(){
//   window.alert('ボタンがクリックされました!');
// };
// document.addEventListener('DOMContentLoaded',function(){
//   document.getElementById('btn').addEventListener('click',function(){
//     window.alert('ボタンがクリックされました!');
//   },false);
// }, false);
// document.addEventListener('DOMContentLoaded',function(){
//   let getfavoritefood = function(name){
//   let rusult = '';
//   let foods = document.getElementsByName(name);
//     for(i = 0, len = foods.length; i < len; i++){
//       let food = foods.item(i);
//       if(food.checked){
//         rusult = food.value;
//         break;
//       }
//     }
//     return rusult;
//   };
//
//   document.getElementById('btn').addEventListener('click',function(){
//     window.alert(getfavoritefood('food'));
//   },false);
// },false);
// window.addEventListener('DOMContentLoaded',function(){
//   document.getElementById('file').addEventListener('change',function(e){
//     let inputs = document.getElementById('file').files;
//     for(let i = 0,len = inputs.length; i < len; i++){
//       let value = inputs[i];
//       console.log(value.name);
//       console.log(value.type);
//       console.log(value.lastModifiedDate);
//     }
//   },true);
// });
// window.addEventListener('DOMContentLoaded',function(){
//   document.getElementById('file').addEventListener('change',function(e){
//     let inputs = document.getElementById('file').files[0];
//       let value = new FileReader;
//       value.addEventListener('load',function(){
//         document.getElementById('result').textContent = value.result
//       },true);
//       value.readAsText(inputs,'UTF-8');
//   },true);
// });
// document.addEventListener('DOMContentLoaded',function(){
//   document.getElementById('btn').addEventListener('click',function(){
//
//     let name = document.getElementById('name');
//     let url = document.getElementById('url');
//
//     let anchor = document.createElement('a');
//     anchor.href = url.value;
//     console.log(anchor.href);
//
//     let text = document.createTextNode(name.value);
//     anchor.appendChild(text);
//     console.log(anchor);
//
//     let br = document.createElement('br');
//     let list = document.getElementById('list');
//
//     list.appendChild(anchor);
//     list.appendChild(br);
//   },false);
// },false);
// document.addEventListener('DOMContentLoaded',function(){
//   let elem = document.getElementById('elem');
//   elem.addEventListener('mouseover',function(){
//     this.style.backgroundColor = 'Yellow';
//   },false);
//   elem.addEventListener('mouseout',function(){
//     this.style.backgroundColor = 'red';
//   },false);
// });
// function Triangle(){
//   var _base;
//   var _height;
//
//   Object.defineProperty(
//     this,
//     'base',
//     {
//       get:function(){
//         return _base;
//       },
//       set:function(base){
//         if(typeof base === 'number' && base > 0){
//           _base = base;
//         }
//       }
//     }
//   );
//   Object.defineProperty(
//     this,
//     'height',
//     {
//       get:function(){
//         return _height;
//       },
//       set:function(height){
//         if(typeof height === 'number' && height > 0){
//           _height = height ;
//         }
//       }
//     }
//   );
// };
//
// Triangle.prototype.getArea = function(){
//   return this.base * this.height /2 ;
// };
//
// var t = new Triangle();
// t.base = 10;
// t.height = 2;
// console.log(t.base)
// console.log(t.getArea(10,2));
// let current = new Date;
// let result = document.getElementById('result');
// result.textContent = current.toLocaleString();
//
// function showmessage(a){
//   if(arguments.length !== 1){
//     throw new Error('引数の数が間違っています:' + arguments.length);
//   }
//   console.log(a)
// }
//
// try{
//   showmessage('山田','鈴木');
// }catch(e){
//   window.alert(e.message);
// }
// function sum(){
//   let result = 0;
//   for(let i = 0, len = arguments.length; i < len; i++){
//     let tmp = arguments[i];
//     if(typeof tmp !== 'number'){
//       throw new Error('引数が数値ではありません:' + tmp);
//     }
//     result += tmp;
//   }
//   return result;
// }
// アロー関数
// let getTriangle = (base,height) => {
//   return base * height / 2 ;
// };
//
// console.log(`三角形の面積は${getTriangle(5,2)}です。`);
// let getTriangle = (base,height) =>  base * height / 2 ;
//
// console.log(`三角形の面積は${getTriangle(5,2)}です。`);
//
// let getCircle = radius => radius * radius * Math.PI;
// console.log(getCircle(3));
//
// let show = () => console.log('こんにちわ');
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
