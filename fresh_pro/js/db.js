// const BASE_URL = "http://192.168.50.33:8082"
fetch(`${BASE_URL}/goods/select`).then(res => {
    return res.json();
}).then(data => {
    // console.log(data.data)
    let ctone = document.querySelector("#frist-list")
    let s = ""
    for (let i = 0; i < 4; i++) {
        // console.log(data.data[i].price)
        s += `
        <li>
        <h4>${data.data[i].goods_name}</h4>
        <a href="../pages/details.html?id=${data.data[i].goods_id}"><img src="${data.data[i].goods_image}" alt="${data.data[i].goods_name}" /></a>
        <p>￥ ${data.data[i].price}</p>
    </li>
`
    }
    ctone.innerHTML = s
    //  console.log(data.data)

})


// =============second—list海鲜水产===============

fetch(`${BASE_URL}/goods/select`).then(res => {
    return res.json();
}).then(data => {
    // console.log(data.data)
    let ctone2 = document.querySelector("#second—list")
    let s2 = ""
    for (let i = 4; i < 8; i++) {
        // console.log(data.data[i].price)
        s2 += `
        <li>
        <h4>${data.data[i].goods_name}</h4>
        <a href=""><img src="${data.data[i].goods_image}" alt="${data.data[i].goods_name}" /></a>
        <p>￥ ${data.data[i].price}</p>
    </li>
`
    }

    ctone2.innerHTML = s2

})

// =============rd-list海鲜水产===============

fetch(`${BASE_URL}/goods/select`).then(res => {
    return res.json();
}).then(data => {
    // console.log(data.data)
    let ctone3 = document.querySelector("#rd-list")
    let s3 = ""
    for (let i = 8; i < 12; i++) {
        // console.log(data.data[i].price)
        s3 += `
        <li>
        <h4>${data.data[i].goods_name}</h4>
        <a href=""><img src="${data.data[i].goods_image}" alt="${data.data[i].goods_name}" /></a>
        <p>￥ ${data.data[i].price}</p>
    </li>
`
    }

    ctone3.innerHTML = s3

})

// =============fourth-list海鲜水产===============

fetch(`${BASE_URL}/goods/select`).then(res => {
    return res.json();
}).then(data => {
    // console.log(data.data)
    let ctone4 = document.querySelector("#fourth-list")
    let s4 = ""
    for (let i = 12; i < 16; i++) {
        // console.log(data.data[i].price)
        s4 += `
        <li>
        <h4>${data.data[i].goods_name}</h4>
        <a href=""><img src="${data.data[i].goods_image}" alt="${data.data[i].goods_name}" /></a>
        <p>￥ ${data.data[i].price}</p>
    </li>
`
    }
    ctone4.innerHTML = s4

})

// =============fifth-list海鲜水产===============

fetch(`${BASE_URL}/goods/select`).then(res => {
    return res.json();
}).then(data => {
    // console.log(data.data)
    let ctone5 = document.querySelector("#fifth-list")
    let s5 = ""
    for (let i = 16; i < 20; i++) {
        // console.log(data.data[i].price)
        s5 += `
        <li>
        <h4>${data.data[i].goods_name}</h4>
        <a href=""><img src="${data.data[i].goods_image}" alt="${data.data[i].goods_name}" /></a>
        <p>￥ ${data.data[i].price}</p>
    </li>
`
    }

    ctone5.innerHTML = s5

})

// =============sixth-list海鲜水产===============

fetch(`${BASE_URL}/goods/select`).then(res => {
    return res.json();
}).then(data => {
    // console.log(data.data)
    let ctone6 = document.querySelector("#sixth-list")
    let s6 = ""
    for (let i = 1; i < 5; i++) {
        // console.log(data.data[i].price)
        s6 += `
        <li>
        <h4>${data.data[i].goods_name}</h4>
        <a href=""><img src="${data.data[i].goods_image}" alt="${data.data[i].goods_name}" /></a>
        <p>￥ ${data.data[i].price}</p>
    </li>
`
    }

    ctone6.innerHTML = s6

})