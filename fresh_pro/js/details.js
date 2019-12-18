let goodsurl = document.querySelector("#goodsurl")
let unitPrice = document.querySelector("#unit-Price")
let goodsname = document.querySelector("#goodsname")
let goodscount = document.querySelector("#goodscount")

let goods_id = location.search.slice(1).split("=")[1];

fetch(`${BASE_URL}/goods/select?id=${goods_id}`, {
    method: "get",
    headers: {
        "Content-Type": "application/json"
    }
}).then(res => {
    return res.json();
}).then(data => {
    console.log(data);
    goodsurl.src = `${data.data.goods_image}`;
    unitPrice.innerHTML=`${data.data.price}`;
    goodsname.innerHTML=`${data.data.goods_name}`;
    goodscount.innerHTML=`${data.data.goods_count}`;
    // console.log(data.code);
})

// 购物车计算
let addEle = document.querySelector(".add")
let minusEle = document.querySelector(".minus")
let totalEle = document.querySelector("#total")
let i = document.querySelector("#text").value

jishuan()
//计算总价
function jishuan() {
    console.log(unitPrice.innerText)
    console.log(i)
    let zongjia = Number(unitPrice.innerText) * Number(i);
    console.log(zongjia)
    totalEle.value = zongjia;
    return zongjia
}


addEle.onclick = function () {
    i++;
    jishuan()
    document.querySelector("#text").value = i;
    // document.querySelector("#total").value = i * totalEle;
}
minusEle.onclick = function () {
    if (i > 0) {
        i--;
        jishuan()
        document.querySelector("#text").value = i;
        // document.querySelector("#total").value = i * totalEle;
    } else {
        i = 0;
        jishuan()
        document.querySelector("#text").value = i;
        // document.querySelector("#total").value = i * totalEle;
    }
}

// 加入购物车
let chartNum = document.querySelector("#chart-num")
let intoChartNum = document.querySelector("#into-Chart")


intoChartNum.onclick = function () {
    let goodsid = intoChartNum.dataset.id
    console.log(goodsname.innerText);
    console.log(unitPrice.innerText);
    fetch(`${BASE_URL}/goods/add`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: goodsid,
            goods_counts: i,
            totprice: totalEle.value,
            unitPrice:unitPrice.innerText,
            goodsurl:goodsurl.src,
            goodsname:goodsname.innerText,
            
        })
    }).then(res => {
        return res.json();
    }).then(data => {
        console.log(data);
        // console.log(data.code);
    })
    let textNum = document.querySelector("#text").value
    chartNum.innerHTML = `${textNum}`

}