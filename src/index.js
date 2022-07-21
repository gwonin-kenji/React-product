// var
var v1 = "変数";
console.log(v1);

v1 = "上書き";
console.log(v1);

var v1 = "再宣言";
console.log(v1);

// let: 上書きは可能だが、再宣言は不可能
let v2 = "let変数";
console.log(v2);

v2 = "let上書き";
console.log(v2);

// let v2 = "let再宣言";
// console.log(v2);

// const: 上書き、再宣言できない
const v3 = "const変数";
console.log(v3);

// constで定義したオブジェクトはプロパティの変更が可能
// objectの定義はほとんど constでされる
const v4 = {
  name: "ken",
  age: 25
};
v4.name = "s, k";
v4.address = "fukuoka";
console.log(v4);

// constで定義した配列はプロパティの変更が可能
const v5 = ["dog", "cat"];
v5[0] = "bird";
v5.push("monkey");
console.log(v5);

/**
 * テンプレート文字列
 */
// 文字列の中に javascriptの変数を便利に埋め込む
// pythonでいう print(f'{num}です')ってことや。
const name = "ken";
const age = 25;

// 従来の方法
const msg1 = "my name is " + name + ". " + "I am " + age + "years old.";
console.log(msg1);

// テンプレート文字列
const msg2 = `my name is ${name}. I am ${age}years old.`;
console.log(msg2);

/**
 * 従来の関数
 */
function func1(msg) {
  return msg;
}
console.log(func1("こんにちは"));

const v6 = function (msg) {
  return msg;
};
console.log(v6("こんばんは"));

/**
 *  arrow関数
 */
const func2 = (msg) => {
  return msg;
};
console.log(func2("arrow関数"));

// 一行で returnできるときは {}を省略できる
const func3 = (num1, num2) => num1 + num2;
console.log(func3(10, 20));

/**
 * 分割代入
 * pythonでいう unpacking
 * name, age = ['ken', 25]
 */
const myProfile = {
  name1: "ken",
  age1: "25"
};
const msg3 = `名前は ${myProfile.name1}です。年齢は ${myProfile.age1}歳です。`;
console.log(msg3);

const { name1, age1 } = myProfile;
const msg4 = `名前は ${name1}です。年齢は ${age1}歳です。`;
console.log(msg4);

// 配列
const myProfile1 = ["kenta", 28];
const msg5 = `名前は ${myProfile1[0]}です。年齢は ${myProfile1[1]}歳です。`;
console.log(msg5);

const [name2, age2] = myProfile1;
const msg6 = `名前は ${name2}です。年齢は ${age2}歳です。`;
console.log(msg6);

/**
 * デフォルト値、引数など
 */
const sayHello = (name = "guest") => console.log(`hello ${name}!`);
sayHello("Ken");

/**
 * スプレッド構文 ...
 */
// 配列の展開
const arr1 = [1, 2];
console.log(arr1);
console.log(...arr1);

const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(arr1[0], arr1[1]);
sumFunc(...arr1);

// まとめる
const arr2 = [1, 2, 3, 4, 5];
const [n1, n2, ...arr3] = arr2;
console.log(n1);
console.log(n2);
console.log(arr3);

// 配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4]; //コピー
console.log(arr6);

const arr7 = [...arr4, ...arr5]; //結合
console.log(arr7);

// =でコピーを作らない。参照渡しになってしまう。
const arr8 = arr4;
arr8[0] = 100;
console.log(arr4); //arr4の中身まで書き換えられてしまう
