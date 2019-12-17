// 实现登录注销功能
if (sessionStorage.username == undefined) {
    document.querySelector("#user").innerHTML = `<a href="./pages/login.html">请登录</a>`;
} else {
    document.querySelector("#user").innerHTML = sessionStorage.username;
    document.querySelector("#logout").innerHTML = `<a href="#">注销</a>`;
}
document.querySelector("#logout").onclick = function () {
    document.querySelector("#user").innerHTML = `<a href="./pages/login.html">请登录</a>`;
    document.querySelector("#logout").innerHTML = `<a href="#"></a>`;
}
