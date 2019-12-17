function sum(a,b){
    return a+b;
}
let sum=(a,b)=>{
    return a+b
}
let sum=(a,b)=>a+b

 // #1 函数定义与调用
function sayHello() {
    console.log(this); // => this
    console.log("Hello!");
}
window.sayHello();
window.console.log("");

// #2 this指向问题
// - 普通函数，谁调用指向谁
// - 箭头函数，谁定义指向谁
let list = document.querySelector(".list");
list.onclick = function() {
    console.log(this);
}

function Person(name) {
    this.name = name;
    this.sayHi = function(){
        console.log(this);
        console.log("Hi");
    }
}
let per = new Person();
per.sayHi();

// 箭头函数
/*
let hello = (name) => {
    console.log(`Hi, ${name}!`);
};

function sum(a, b) {
    return  a + b;
}
let sum = (a, b) => {
    return a + b;
}
let sum = (a, b) => a + b;*/

// #3. 闭包 
// => - 读取局部变量 
// => - 缓存变量，导致内存泄漏，导致页面卡死，慎用闭包
// => - 处理异步
let x = 10;
function fn() {
    let y = 20;
    return function () {
        console.log(y);
    }
}
fn()();


let name;

getName(function() {
    console.log(`Hello. ${name}!`)
});

function getName(callback) {
    setTimeout(() => {
        name = "木子李";
        callback();
    }, 3000);
}

// #4. 实参与形参
function t1(name) {
    console.log(name);
}
t1("木子李");

// #5. 构造函数 => 创建对象的
// 对象：包括属性和方法
// 对象属性：对象特性，比如人有姓名、年龄、身高、体重
// 对象方法：对象行为、技能，比如耀哥会开车、唱歌
// 函数如果在对象中，就被称为方法。
let o1 = { // => 字面量创建对象
    // 对象属性
    name: "木子李",
    age: 38,
    tel: "17398888669",
    // 对象方法
    teach(course) {
        console.log(`${this.name}是教${course}的！`)
    }
}

// 工厂模式 - 批量生产
function crearePerson(name, age) {
    return {name, age}
}
// 构造函数 => 提供了一个创建对象的模板
function Teacher(name, major, teach) {
    this.name = name;
    this.major = major;
    this.teach = teach;
} 
let teacher = new Teacher("耀哥", "软件工程", "前端");
console.log(teacher);