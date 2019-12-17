(function(){
    // # 定时器
    let _count=5;
    let _t=setInterval(function(){
        //清除定时器
      if(_count==0 ){
        clearInterval(t);
      }
        console.log(_count--);
    },1000);

    // # 延时函数
   setTimeout(function(){
    console.log("延时函数");
    
   },3000)//第三秒插入
})()