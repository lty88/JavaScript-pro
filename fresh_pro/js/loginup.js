//判断用户输入的内容格式是否正确
//阻止提交
let submitBtn = document.querySelector('#submit')

let emailIpt = document.querySelector('#email')
let telIpt = document.querySelector('#tel')
let telHelp = document.querySelector('#tel-helpBlock')
let usernameIpt = document.querySelector("#username")
let usernameHhelp = document.querySelector("#username-helpBlock")
let passWord1 = document.querySelector("#password1")
let passWord1Hlep = document.querySelector("#password1-helpBlock")
let passWord2 = document.querySelector("#password2")
let passWord2Hlep = document.querySelector("#password2-helpBlock")

let pass = false

submitBtn.onclick = function(e) {
        console.log("onclick=");
        let tel = telIpt.value;
        let telPass = /^1[34578]\d{9}$/.test(tel)
        let username = this.value;
        let usernamePass = /^[a-zA-Z0-9_-]{4,16}$/.test(username)
        let passW = this.value;
        let passWord1Pass = /^[a-zA-Z0-9_]{6,16}$/.test(passW)
        pass = telPass && usernamePass && passWord1Pass
            // console.log(usernamePass);
            // console.log(passWord1Pass);
            // console.log(telPass);
        console.log("pass=" + pass);

        if (!pass) {

            e.preventDefault()
        }
        console.log("pass=" + pass);
    }
    // emailIpt.onblur = function(){
    //     let email = this.value;
    //     let emailPass = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(email)
    //     if(!emailPass){
    //         //如果验证失败
    //         this.parentElement.classList.remove('has-success')
    //         this.parentElement.classList.add('has-error')
    //         emailHelp.innerHTML = "输入的邮箱格式错误"
    //     }else{
    //         this.parentElement.classList.add('has-success')
    //         this.parentElement.classList.remove('has-error')
    //         emailHelp.innerHTML = ''
    //     }
    // },
telIpt.onblur = function() {
    let tel = this.value;
    let telPass = /^1[34578]\d{9}$/.test(tel)
    if (!telPass) {
        //如果验证失败
        this.parentElement.classList.remove('has-success')
        this.parentElement.classList.add('has-error')
        telHelp.innerHTML = "输入的手机号码格式错误"
    } else {
        this.parentElement.classList.add('has-success')
        this.parentElement.classList.remove('has-error')
        telHelp.innerHTML = ''
    }
}
usernameIpt.onblur = function() {
    let username = this.value;
    let usernamePass = /^[a-zA-Z0-9_-]{4,16}$/.test(username)
    if (!usernamePass) {
        //如果验证失败
        this.parentElement.classList.remove('has-success')
        this.parentElement.classList.add('has-error')
        usernameHhelp.innerHTML = "输入的用户名格式错误"
    } else {
        this.parentElement.classList.add('has-success')
        this.parentElement.classList.remove('has-error')
        usernameHhelp.innerHTML = ''
    }
}
passWord1.onblur = function() {
    let passW = this.value;
    let passWord1Pass = /^[a-zA-Z0-9_]{6,16}$/.test(passW)
    if (!passWord1Pass) {
        //如果验证失败
        this.parentElement.classList.remove('has-success')
        this.parentElement.classList.add('has-error')
        passWord1Hlep.innerHTML = "输入的密码格式错误"
    } else {
        this.parentElement.classList.add('has-success')
        this.parentElement.classList.remove('has-error')
        passWord1Hlep.innerHTML = ''
    }
}
passWord2.onblur = function() {
    let passW2 = this.value;
    // 最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
    let passW = this.value;
    let passWord1Pass = /^[a-zA-Z0-9_]{6,16}$/.test(passW)
    let passWord2Pass = /^[a-zA-Z0-9_]{6,16}$/.test(passW2)
    if (!(passWord2Pass = passWord1Pass)) {
        //如果验证失败
        this.parentElement.classList.remove('has-success')
        this.parentElement.classList.add('has-error')
        passWord2Hlep.innerHTML = "输入的两次密码不匹配，请重新输入"
    } else {
        this.parentElement.classList.add('has-success')
        this.parentElement.classList.remove('has-error')
        passWord2Hlep.innerHTML = ''
    }
}