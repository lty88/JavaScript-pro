 //1.获取元素
 //  let imgs = [...document.querySelectorAll("img")];[..转换为数组]
 let imgs = document.querySelectorAll("#img img")
 let prev = finds(".prev");
 let next = finds(".next");
 let idots = [...finds(".idot", true)]
 let _curIndex = 0; //记录当前显示图片的下标
 let _lastIndex = 0;
 let _timer = null; //定时器
 //2.点击下一页
 next.onclick = function() {
         _curIndex = _curIndex == 5 ? 0 : ++_curIndex;

         tab();

     }
     // 3.点击上一页
 prev.onclick = function() {
         _curIndex = _curIndex == 0 ? 5 : --_curIndex;
         tab();
     }
     // 4.点击小圆点
 idots.forEach(function(idot, index) {
         idot.onclick = function() {
             _curIndex = index;
             tab()
         }
     })
     // 5.自动播放
 play();
 //6.用户体验 鼠标移动到图片停止
 let container = finds(".container");
 container.onmouseenter = stop;
 container.onmouseleave = play;

 // ==>封装函数
 //获取元素
 function finds(sel, isAll) {
     if (isAll) {
         return document.querySelectorAll(sel);
     }
     return document.querySelector(sel)
 }
 //切换
 function tab() {
     _lastIndex != undefined && imgs[_lastIndex].classList.remove("show");
     imgs[_curIndex].classList.add("show");
     // console.log(imgs[_curIndex]);
     // console.log(_curIndex);

     // debugger
     //切换小圆点
     _lastIndex != undefined && idots[_lastIndex].classList.remove("sel");
     idots[_curIndex].classList.add("sel");
     _lastIndex = _curIndex
 }
 // 启动定时器
 function play() {
     _timer = setInterval(function() {
         next.onclick();
     }, 2000);
 }
 // 关闭定时器
 function stop() {
     clearInterval(_timer)
 }