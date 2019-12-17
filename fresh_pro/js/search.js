const SOURCE = [{
        goods: "葡萄",
        price: 6.51
    },
    {
        goods: "草莓",
        price: 15.05
    },
    {
        goods: "柠檬",
        price: 7.63
    },
    {
        goods: "奇异果",
        price: 15.56
    },
    {
        goods: "肥美牛排",
        price: 28.85
    },
    {
        goods: "香辣鸭舌",
        price: 28
    },
    {
        goods: "无机番茄",
        price: 3.50
    },
    {
        goods: "转基因红椒",
        price: 4.5
    }
];
// 1. 获取元素
let _input = document.querySelector(".input-text");
let _list = document.querySelector(".search-list");
// 2. 实时搜索

_input.oninput = function() {
    // 获取搜索关键字
    let keywords = this.value;
    // ajax => 搜索逻辑在后台处理
    let reg = new RegExp(keywords, "i");
    // 获取搜索结果
    let searchRes = SOURCE.filter(obj => {
        return reg.test(JSON.stringify(obj));
    });
    // 显示结果
    let htmlStr = "";
    searchRes.forEach(obj => {
        htmlStr += `<li>${obj.goods} - ${obj.price}</li>`;
    });
    _list.innerHTML = htmlStr;

}