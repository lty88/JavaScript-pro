// 购物车计算
let addEle = document.querySelector(".add")
let minusEle = document.querySelector(".minus")
let totalEle = document.querySelector("#total").value
let i = document.querySelector("#text").value

addEle.onclick = function() {
    i++;
    document.querySelector("#text").value = i;
    document.querySelector("#total").value = i * totalEle;
}
minusEle.onclick = function() {
    if (i > 0) {
        i--;
        document.querySelector("#text").value = i;
        document.querySelector("#total").value = i * totalEle;
    } else {
        i = 0;
        document.querySelector("#text").value = i;
        document.querySelector("#total").value = i * totalEle;
    }
}

// 加入购物车
let chartNum = document.querySelector("#chart-num")
let intoChartNum = document.querySelector("#into-Chart")

intoChartNum.onclick = function() {
    let textNum = document.querySelector("#text").value
    chartNum.innerHTML = `${textNum}`

}