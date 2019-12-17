// 1. 创建路由实例
const router = require("express").Router();
const getConnection = require("../dbconfig");
// 2. 配置路由
router.get("/", (req, res) => {
    // 读取参数
    console.log(req.query);
    console.log("「查询订单接口」被调用");
    // 数据库操作
    // 1. 获取连接对象
    const db = getConnection();
    // 2. 启动连接
    db.connect();
    // 3. 执行指令
    // let sql = "INSERT INTO heros VALUES (32, '韩信','韩信.svg', '刺客','打野' ,'qwe' ,1510)";
    // db.query(sql,  (err, sqlRes) => {
    //     if(err) {
    //         console.log(err.message);
    //     }else {
    //         console.log("插入成功！");
    //     }

    // })
    
    let sql = "SELECT * FROM heros ";
    db.query(sql,  (err, sqlRes) => {
        if(err) {
            console.log(err.message);
        }else {
            res.send(sqlRes);
            // 4.关闭连接
            db.end();
        }
    });
});
router.post("/add", (req, res) => {
    console.log("「添加订单接口」被调用");
});
router.post("/delete", (req, res) => {
    console.log("「删除订单接口」被调用");
});
router.post("/modify", (req, res) => {
    console.log("「修改订单接口」被调用");
});
// 3. 导出路由
module.exports = router;