
/*(function () {
    // 记录窗口滚动的距离
    let _offset = 0;
    // 监听窗口滚动
    window.onscroll = function () {
        // 获取窗口滚动的距离
        _offset = document.body.scrollTop ||
            document.documentElement.scrollTop;
    }
    // 点击按钮
    let btn = document.querySelector(".go-back")
    btn.onclick = function () {
        // 帧动画原理 - 精讲
        // => 回顾 - 胶片的电影
        // duration 持续时间 完成一次动画的持续时间
        // interval 每一帧持续的时间
        // frames = durtaion / interval 帧数
        // _offset 位移的距离
        // speed = _offset / frames 每一帧位移的距离
        let duration = 500;
        let interval = 15;
        let frames = duration / interval;
        let speed = Math.ceil(_offset / frames);
        let t = setInterval(() => {
            document.body.scrollTop =
                document.documentElement.scrollTop = _offset - speed;
            // 在现有基础上减去speed
            if (_offset <= 0) {
                clearInterval(t);
                // 矫正误差
                document.body.scrollTop =
                document.documentElement.scrollTop = 0;
            }
        }, interval);
    }

})();*/

scrollToTop({
    el: document.querySelector(".go-back"),
    duration: 500
})

let level = document.querySelector(".level");
let m = 1000;
let n = 450;
let percent = (n / m) * 100;
level.style.background = `linear-gradient(to right, orange ${percent}%, lightgray ${percent}% )`;