//学校IP
// const BASE_URL = "http://10.2.0.139:8081"
//家里ip
const BASE_URL = "http://192.168.50.33:8082"


//============== 登录=================
let userEle = document.querySelector("#users")
let btn = document.querySelector("#btn")
let usernameEle = document.querySelector("#username")
let passwordEles = document.querySelector("#password")
let infoEle = document.querySelector(".infop")
    // console.log(btn);


btn.onclick = function() {
    let usernameValue = usernameEle.value;
    let passwordValue = passwordEles.value;
    console.log(usernameEle);
    console.log(passwordEles);
    console.log(usernameEle.value);
    console.log(passwordEles.value);
    fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: usernameValue,
            password: passwordValue

        })
    }).then(res => {
        return res.json();
    }).then(data => {
        console.log(data);
        // console.log(data.code);
        if (data.code == 200) {
            sessionStorage.username = usernameEle.value;
            location.href = "../index.html"
        } else {
            infoEle.innerHTML = "账号或密码不正确,请重新输入！"
        }


    });
}