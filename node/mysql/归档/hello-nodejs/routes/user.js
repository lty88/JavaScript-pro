// html   => 想要使用一个脚本 => <script src=""></script>
// nodeJS => 模块化导入 require();
//        => 模块化导出 module.exports 

// 1. 创建路由实例
const router = require("express").Router();
// 2. 配置路由
router.post("/login", (req, res) => {
    // 获取客户端发送过来的数据
    let {username, password} = req.body;
    if(username == "admin" && password == "123") {
        // 登录成功
        res.send({code: 200, msg: "登录成功"});
    }else {
        // 登录失败
        res.send({code: 201, msg: "登录失败"});
    }

    console.log("「登录接口」被调用");
}); 
router.post("/register", (req, res) => {
    console.log("「注册接口」被调用");
});
// 3. 导出路由
module.exports = router;