// 1. 获取router实例
const router = require("express").Router();
const getConnection = require("../mysqlConnection");


// 2. 处理路由
router.get("/", (req, res) => {
    console.log("...");
})

// => 登陆
router.post("/login", (req, res) => {
    console.log("「登陆接口」被调用...");
    // 解构参数
    let { username, password } = req.body;
    console.log(username, password);
    // 判断是否正确传递参数
    if (!username || !password) {
        res.send({
            code: 204,
            data: "请求参数有误"
        });
        return false;
    }
    // 数据库操作
    const db = getConnection();
    const sql = `SELECT * FROM base_user where username="${username}" `;
    db.connect();
    console.log(sql);
    db.query(sql, (err, sqlRes) => {
        if (err) {
            console.log("LOGIN_ERROR=>: ", err.message);
            res.send({
                code: 500,
                data: "服务器异常"
            })
        } else if (sqlRes.length === 0) {
            res.send({
                code: 201,
                data: "用户不存在"
            });
        } else {
            let user = sqlRes[0];
            if (user.username === username && user.password === password) {
                delete user.password;
                res.send({
                    code: 200,
                    data: user
                });
            } else {
                res.send({
                    code: 201,
                    data: "密码错误"
                });
            }
        }
    });
    db.end();
});
// => 注册
router.post("/register", (req, res) => {
    console.log("「注册接口」被调用...");
    // 解构参数
    let { username, password,  tel } = req.body;
    // 判断是否正确传递参数
    if (!username || !password||!tel) {
        res.send({
            code: 204,
            data: "请求参数有误"
        });
        return false;
    }
    // 数据库操作
    const db = getConnection();
    const sql = `INSERT INTO base_user(username,password,phone_no)  VALUES('${username}', '${password}', '${tel}')`;
    console.log(sql);
    
    db.connect();
    db.query(sql, (err, sqlRes) => {
        console.log(err);
        
        if (err) {
            console.log("REGISTER_ERROR=>: ", err.message);
            switch (err.errno) {
                case 1062: {
                    res.send({
                        code: 202,
                        data: "用户已存在"
                    })
                } break;
                default: {
                    res.send({
                        code: 500,
                        data: "服务器异常"
                    })
                }
            }
        } else {
            res.send({
                code: 200,
                data: "注册成功"
            })
        }
    });
    db.end();
});
router.post("/getUser", (req, res) => {
    let user = req.session.user;
    console.log("getUser");
    console.log(user);
    res.send({
        code: 200,
        data: user
    })
});


// 3. 导出路由
module.exports = router;




