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

// #6. 原型链
// 每一个对象都有一个 __proto__ 属性
// 每一个函数都有一个 prototype（原型对象） 属性
console.log(teacher.__proto__ === Teacher.prototype);  // true
console.log(Teacher.prototype);
// 原型对象包括了 构造器（constructor/__proto__）
console.log(Teacher.prototype.__proto__ === Object.prototype); // true
// Object => 根对象（基类）
Object.prototype.yaogezeishuai = true;
console.log((20).yaogezeishuai);
console.log(Object.prototype.__proto__);
// (20).yaogezeishuai -> Number.prototype.__proto__ -> Object.prototype

// #7. Object.defineProperty => Vue响应式原理（高级）
const h = 10; 
// h = 20; // 常量不能被修改

const obj = {
    name: "木子李"
};
obj.name = "张三";


const stu = {
    name: "木子李"
}
// ES5
// 成员变量 _name;
// typescript => 类型检测 => ES5 => 面试题级别 => 中级工程师
// 能理解者就理解，不能理解者暂时放一边
// vue 数据监听
Object.defineProperty(stu, "age", {
    configurable: true,
    enumerable: true,
    set(val) { // 设置器
        // 异常处理
        if(["string", "number"].indexOf(typeof val) == -1) {
            throw new Error("类型错误:age必须为string或number类型");
        }
        this._age = val;
    },
    get() {
        return this._age;
    }
});
stu.age = 30;
console.log(stu.age);

Object.defineProperty(stu, "major", {
    value: "软件技术",
    writable: false
});

console.log(stu.major);
stu.major = "电子商务";
console.log(stu.major);

// 面向对象：类（抽象）与对象（具体）
// js => 一切事物【抽象】成一个对象
// java  php oc swift
// js => 对象的概念 =》 一脸闷逼
// ECMAScript js标准
// ES5
// ES6 class => 类

// #8. 深浅复制
// => 原始数据类型
// => 引用类型
let a = 10;
function change1(a) { // 值传递 =》 数据拷贝一份出来传递
    a = 20;
    console.log(a); // 20
}
change1(a);
console.log(a); // 10

let m = 10; // 分配内存 => 赋值
// m 内存地址的名称

let obj1 = {name: "admin"};
function change2(o) { // 地址传递
    o.name = "张三";
}
change2(obj1);
console.log(obj1.name); // 张三

let o3 = {
    name: "耀哥",
    age: 20,
    course: ["语文", "数学"]
}
let o2 = {};
for(let key in o3) { // 浅拷贝 => 指针复制 => 地址复制
    o2[key] = o3[key];
}
console.log(o2);
o2.course.push("英语");
console.log(o2.course);
console.log(o3.course);

// 深拷贝
let o4 = Object.assign({}, o3, { // 值拷贝
    course: [...o3.course]
})
o4.course.push("政治");
console.log(o4.course);
console.log(o3.course);

// #9. 代理事件
// => 事件传播机制 捕获 -> 目标 -> 【冒泡】
// 代理？
// 委托？
// let a = document.querySelector("#a");
// let b = document.querySelector("#b");
// let c = document.querySelector("#c");
// a.onclick = function() {};
// b.onclick = function() {};
// c.onclick = function() {};

let _list = document.querySelector(".list");
_list.onclick = function(event) {
    switch(event.target.id) {
        case "a": {console.log("你点击了a哟~")}break;
        case "b": {alert("你点了b哟~")}break;
        case "c": {console.log("您点我咋子呢？")}break;
    }
}


// #10. 递归函数 => 在函数内部调用自身
//  n! 5 x 4 x 3 x 2 x 1
// => goto循环
 

// #11. 表单验证
let input = document.querySelector("input");
let tips = document.querySelector(".tips");
input.oninput = function() {
    let value = input.value;
    // 只能输入字母数字下划线，字符4~8个字符
    tips.className = /^\w{4,8}$/.test(value) ? "tips" : "tips err";
    /*
    let reg = /^\w{4,8}$/;
    if(!reg.test(value)){
        tips.classList.add("err");
    }else {
        tips.classList.remove("err");
    }*/
}




 






















