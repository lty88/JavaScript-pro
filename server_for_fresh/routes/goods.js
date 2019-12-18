// 1. 获取router实例
const router = require("express").Router();
const getConnection = require("../mysqlConnection");
const querystring = require("querystring");
// 2. 处理路由
// => 查询商品
router.get("/select", (req, res) => {
    console.log("「查询商品接口」被调用...");
    let {
        id
    } = req.query;
    const db = getConnection();
    let sql = "";
    if (id) {
        sql = `SELECT * FROM res_goods WHERE goods_id = ${id }`;
    } else {
        sql = `SELECT * FROM res_goods`;
    }
    console.log(sql);
    db.connect();
    db.query(sql, (err, sqlRes) => {
        if (err) {
            console.log("GET_goods_ERROR=>", err.message);
            res.send({
                code: 500,
                data: "服务器异常"
            })
            // console.log("没查到");

        } else {
            let data = id ? sqlRes[0] : sqlRes;

            res.send({
                code: 200,
                data
            });
        }
    });
    // console.log("查询到了");

    db.end();

});
//购物车取数据
router.get("/selects", (req, res) => {
    console.log("「查询商品接口」被调用...");
    let {
        id
    } = req.query;
    const db = getConnection();
    let sql = "";
    if (id) {
        sql = `SELECT * FROM log_shopping WHERE goods_id = ${id }`;
    } else {
        sql = `SELECT * FROM log_shopping`;
    }
    console.log(sql);
    db.connect();
    db.query(sql, (err, sqlRes) => {
        if (err) {
            console.log("GET_log_shopping_ERROR=>", err.message);
            res.send({
                code: 500,
                data: "服务器异常"
            })
            // console.log("没查到");

        } else {
            let data = id ? sqlRes[0] : sqlRes;

            res.send({
                code: 200,
                data
            });
        }
    });
    // console.log("查询到了");

    db.end();

});
// => 添加商品
router.post("/add", (req, res) => {
    let {
        id,
        goodsname,
        goods_counts,
        unitPrice,
        totprice,
        goodsurl,
    } = req.body;
    console.log(req.body);
    console.log("「添加商品接口」被调用...");
    if (!id||!goods_counts||!totprice||!unitPrice||!goodsname||!goodsurl) {
        res.send({
            code: 204,
            data: "请求参数有误"
        });
        return false;
    }
    // 数据库操作
    const db = getConnection();
    const sql = `INSERT INTO log_shopping (goods_id,goods_name,goods_price,goods_count,total_price,good_imgurl)VALUES(${ id },"${ goodsname }",${ Number(unitPrice) },${goods_counts }, ${ Number(totprice)},"${goodsurl}");`
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
                }
                break;
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
                data: "添加商品成功"
            })
        }
    });
    db.end();


});
// => 修改商品
router.post("/modify", (req, res) => {
    console.log("「修改商品接口」被调用...");
    let params = req.body;
    let {
        id
    } = params;
    delete params.id;
    let obj = {};
    for (let key in params) {
        let value = params[key];
        if (typeof params[key] == "string") {
            obj[key] = `'${value}'`
        } else {
            obj[key] = value
        }
    };
    const text = decodeURI(querystring.stringify(obj).replace(/&/g, ","));
    const db = getConnection();
    const sql = `UPDATE base_user SET ${text} WHERE id = ${id}`;
    db.connect();
    db.query(sql, (err, sqlRes) => {
        if (err) {
            console.log("DELETE_HERO_ERROR=>", err.message);
            res.send({
                code: 500,
                data: "服务器异常"
            });
        } else {
            res.send({
                code: 200,
                data: "修改成功"
            });
        }
    })
    db.end();

});
// => 删除商品
router.post("/delete", (req, res) => {
    console.log("「删除商品接口」被调用...");
    let {
        id
    } = req.body;
    if (!id) {
        res.send({
            code: 204,
            data: "请求参数有误"
        });
        return false;
    };
    const db = getConnection();
    const sql = `DELETE FROM base_user WHERE id = ${id}`;
    db.connect();
    db.query(sql, (err, sqlRes) => {
        if (err) {
            console.log("DELETE_HERO_ERROR=>", err.message);
            res.send({
                code: 500,
                data: "服务器异常"
            })
        } else {
            res.send({
                code: 200,
                data: "删除成功"
            });
        }
    });
    db.end();
});


// 3. 导出路由
module.exports = router;