const BASE_URL = "http://10.2.0.150"
// # 原生实现 GET
/*
// 1. 创建请求对象
let xhr = new XMLHttpRequest();
// 2. 配置请求
// -> xhr.open(method, url, sync)
xhr.open("GET", `${BASE_URL}/heros?id=1`, true);
// -> 设置响应类型
xhr.responseType = "json";
// -> 设置请求超时时间
xhr.timeout = 10000;
// 3. 发送请求
xhr.send();
// 4. 事件监听
// -> 请求完成
xhr.onload = function() {
    // readyState 请求状态
    // status 状态码
    if(xhr.status == 200) {
        // 打印结果
        console.log(xhr.response);
    }else {
        console.log(`XMLHttpRequest_ERROR_STATUS：${xhr.status}`);
    }
}*/



// ----------------------------------------------------
// ----------------------------------------------------

// # 原生实现 POST
/*
// 1. 创建请求对象
let xhr = new XMLHttpRequest();
// 2. 配置请求
// -> xhr.open(method, url, sync)
xhr.open("POST", `${BASE_URL}/login`, true);
// -> 设置响应类型
xhr.responseType = "json";
// -> 设置请求超时时间
xhr.timeout = 10000;
// -> 设置请求头
xhr.setRequestHeader("Content-Type", "application/json");
// 3. 发送请求
xhr.send(JSON.stringify({
    username: "admin",
    password: "1234"
}));
// 4. 事件监听
// -> 请求完成
xhr.onload = function() {
    // readyState 请求状态
    // status 状态码
    if(xhr.status == 200) {
        // 打印结果
        console.log(xhr.response);
    }else {
        console.log(`XMLHttpRequest_ERROR_STATUS：${xhr.status}`);
    }
}*/

// ----------------------------------------------------
// ----------------------------------------------------


// # ES6 fetch  
/*
fetch(`${BASE_URL}/heros`).then(res => {
    return res.json();
}).then(data => {
    console.log(data);
});

fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: {
        "Content-Type":"application/json"
    },
    body: JSON.stringify({
        username: "zangai",
        password: "123",
        tel: "17398888669",
        email: "lihy_online@163.com"
    })
}).then(res => {
    return res.json();
}).then(data => {
    console.log(data);
});*/


// ----------------------------------------------------
// ----------------------------------------------------
$(".list li").click(function () {
    $(this).addClass("sel").siblings().removeClass("sel");
}).first().trigger("click");

// 数据是存在数据库中的
// 前端通过ajax和后台交换数据
// 前端拿到数据之后需要展示在页面中=> 局部刷新

$.ajax({
    url: `${BASE_URL}/heros`,
    // 数据格式
    dataType: "json"
}).done(res => {
    console.log(res);
    let heros = document.querySelector(".heros");
    let htmlStr = "";
    res.data.forEach(item => {
        htmlStr += `<li>
            <img src="${item.avatar}">
            <p>${item.name}</p>
            <p>${item.location}</p>
            <p>${item.position}</p>
        </li>`;
    })
    heros.innerHTML = htmlStr;
}).fail(err => {
    console.log(err);
});


$.ajax({
    url: `${BASE_URL}/login`,
    type: "POST",
    dataType: "json",
    data: {
        username: "zangai",
        password: "123"
    }
}).done(res => {
    console.log(res);
    let info = document.querySelector(".info");
    info.innerHTML = `<p>账号：${res.data.username}</p>
                      <p>邮箱：${res.data.email}</p>
                      <p>电话：${res.data.tel}</p>`
}).fail(err => {
    console.log(err);
});




// => jsonp 跨域 => 动态创建script标签
// let script = document.createElement("script");
// script.src = `${BASE_URL}/cros/jsonp?callback=onBack`;
// document.body.appendChild(script);

// function onBack(data) {
//     console.log("=====", data);
// }


$.ajax({
    url: `${BASE_URL}/cros/jsonp`,
    type: "GET",
    dataType: "jsonp",  // 请求方式为jsonp
    jsonpCallback: "callback",    // 自定义回调函数名
    data: {name: "木子李"},
    success(res) {
        console.log("*****", res);
    }
});


// => 跨域
// 1. CROS => 后台设置字段
// 2. JSONP => 脚本跨域 动态创建script标签
// mysql + nodeJS + ajax
