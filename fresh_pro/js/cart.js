// 给购物车清单动态生成数据
let totNum = document.querySelector(".tot-num")
let totPrice = document.querySelector(".item-tot-price")
let goodsNname = document.querySelector(".goods-name")
let itemPrice = document.querySelector(".item-price")
let goodsNums = document.querySelector(".goods-nums")
let goodsUrl = document.querySelector(".item-img")
let payPrice = document.querySelector(".pay-price")
let cartList = document.querySelector(".cart-list")




fetch(`${BASE_URL}/goods/selects`, {
    method: "get",
    headers: {
        "Content-Type": "application/json"
    }
}).then(res => {
    return res.json();
}).then(data => {
    console.log(data.data);
    let html = ""
    let heji = 0;
    let jian = 0;
    data.data.forEach(el => {
        heji += el.goods_price;
        jian++;
        // console.log(data.data[index]);
        html += `
        <ul class="cart-content middle fl">
        <li class="ct">
           
            <img class="item-img " src="${el.good_imgurl}" alt="">
            <span class="goods-name">${el.goods_name}</span>
        </li>

        <li class="item-g">500g</li>
        <li class="item-price">${el.goods_price}</li>
        <li class="goods-nums">${el.goods_count}</li>
        <li class="item-tot-price">${el.goods_price}</li>
        <li class="del" data-id="${el.id}">删除</li>
    </ul>
    `

        // goodsUrl.src = `${data.data[index].goods_image}`;
        // totPrice.innerHTML=`${data.data[index].goods_price}`;
        // goodsNname.innerHTML=`${data.data[index].goods_name}`;
        // itemPrice.innerHTML=`${data.data[index].goods_price}`;
        // goodsNums.innerHTML=`${data.data[index].goods_count}`;
        // payPrice.innerHTML=`${data.data[index].total_price}`;
    });
    cartList.insertAdjacentHTML('afterend', html);
    payPrice.innerHTML = heji;
    totNum.innerHTML = jian;
    let dels = document.querySelectorAll(".del");
    dels.forEach(el => {
        el.onclick = function () {
            let delid = el.dataset.id;
            console.log(delid);

        }
    })
})