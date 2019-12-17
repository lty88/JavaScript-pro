let timeDowns = finds(".section")
let dayEle = finds(".day")
let hoursEle = finds(".hour")
let minutesEle = finds(".minute")
let sds = finds(".seconds")


setInterval(timeDown, 1000)

function timeDown() {
    let nowTime = new Date();
    let fTime = new Date("2020-01-25 00:00:00");
    let times = (fTime - nowTime) / 1000;
    let d = (parseInt(times / 60 / 60 / 24)).toString().padStart(2, '0'); //天
    let h = (parseInt(times / 60 / 60 % 24)).toString().padStart(2, '0'); //小时
    let m = (parseInt(times / 60 % 60)).toString().padStart(2, '0'); //分钟
    let s = parseInt(times % 60); //秒

    dayEle.innerText = `${d}天`
    hoursEle.innerText = `${h}时`
    minutesEle.innerText = `${m}分`
    sds.innerText = `${s}秒`
    console.log(s);
    if (s == 0) {
        minutesEle.classList.add("ro")
        console.log(s);

    } else {
        minutesEle.classList.remove("ro")
    }


    if (s % 2 == 0) {
        sds.classList.add("ro")


    } else {
        sds.classList.remove("ro")

    }




}


function timer() {

}



// 封装函数==》
function finds(sel, isAll) {
    if (isAll) {
        return document.querySelectorAll(sel);
    }
    return document.querySelector(sel)
}