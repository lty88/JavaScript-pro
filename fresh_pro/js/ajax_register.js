//============== 注册=================
let usernameELEs = document.querySelector("#username")
let telEle = document.querySelector("#tel")
let passwordEle = document.querySelector("#password1")
let submitEle = document.querySelector("#submit")
let remindEle = document.querySelector("#remind")
submitEle.onclick = function(e) {
    let tel = telIpt.value;
    let telPass = /^1[34578]\d{9}$/.test(tel)
    let username = usernameELEs.value;
    let usernamePass = /^[a-zA-Z0-9_-]{4,16}$/.test(username)
    let passW = passwordEle.value;
    let passWord1Pass = /^[a-zA-Z0-9_]{6,16}$/.test(passW)
    pass = telPass && usernamePass && passWord1Pass
    console.log(username);
    console.log(passW);
    console.log(telPass);


    if (!pass) {
        console.log("pass=" + pass);

        return false
    }



    let usernameValue = usernameELEs.value
    let telEleValue = telEle.value
    let passwordValue = passwordEle.value

    fetch(`${BASE_URL}/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: usernameValue,
            password: passwordValue,
            tel: telEleValue

        })
    }).then(res => {
        return res.json();
    }).then(data => {
        console.log(data);
        if (data.code == 200) {
            if (data.code == 200) {
                remindEle.innerHTML = "恭喜你,注册成功!，3秒后将自动跳转去主页"
                setTimeout(function() {
                    location.href = "../index.html"
                }, 3000)
            }
        }
        // else{
        //     infoEle.innerHTML="账号或密码不正确,请重新输入！"}
    })
}