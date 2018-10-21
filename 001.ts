let bol: boolean = true;

let num: number = 10;

// 字符串
let str: string = "String";

// 模板字符串
let tem = `${num}`;

// 操作数据元素
// 第一种方法，直接在元素类型后面加上 []
let numList: number[] = [1, 2, 3];
// 第二种方法，使用数组泛型
let numlist: Array<number> = [4, 5, 6]


// 元组
// 元组类型允许表示一个已知 元素数量和类型的数组，各元素的类型不必相等
let numstr: [number, string] = [1, 'string'];
console.log(numstr[1].substr(1));

// numstr[3] = 'str';
// numstr[4] = true

enum Color {Red, Green = 2, Blue};
let colorName: string = Color[2];