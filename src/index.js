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
