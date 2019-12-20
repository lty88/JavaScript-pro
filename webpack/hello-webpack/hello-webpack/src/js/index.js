import '../less/index.less';
import Swiper from "swiper";
import "swiper/css/swiper.css";  
//jQuery events
$('.list li').hover(function(){
    $(this).find('a').css({color:'orange'})
},function() {
   $(this).find('a').css({color:'blue'})
}).click(function(){
   $(this).find('a').css({color:'orange'}).siblings().css({fontSize:'16px'})
   $(this).css({fontSize:'30px'}).siblings().css({fontSize:'16px'})
}).first().trigger('click').find('a').css({color:'red'})

$('.showBtn').on('click',function(){
    $('.swiper-container').slideToggle();
})

let mySwiper = new Swiper('.swiper-container', {
    loop: true, // 循环模式选项
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },
    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // 如果需要滚动条
    scrollbar: {
        el: '.swiper-scrollbar',
    },
})

// 判断是否登录
if (!sessionStorage.LOGIN_USER) {
    // 跳转至登录页面
    location.href = './static/pages/login-register.html';
}


