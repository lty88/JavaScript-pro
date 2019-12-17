(function () {
    //记录窗口滚动的距离
    let _offset = 0;
    //箭头窗口滚动
    window.onscroll = function () {
        //获取窗口滚动的距离
        _offset =document.body.scrollTop || document.documentElement.scrollTop;
        // console.log(_offset);      
    }
    //点击按钮获取窗口距离
    let btn = document.querySelector(".go-back")
    btn.onclick = function () {
        console.log(_offset);
        //帧动画原理=》精讲
        //duration持续时间  完成一次动画的持续时间
        //interval 每一帧持续的时间
        //frames=duration、interval  帧数
        //_offset位移的距离
        //speed=_offset/frames 每一帧位移的距离
        let duration=500;
        let interval=15;
        let frames=duration/interval
        let speed=Math.ceil(_offset/frames) 
       let t= setInterval(() => {
           if(_offset<=0){
               clearInterval(t);
            // 矫正误差
            document.body.scrollTop = document.documentElement.scrollTop = 0;
           }
            //在现有基础上减去speed
            document.body.scrollTop = document.documentElement.scrollTop = _offset-speed
        }, interval)
    }
})();