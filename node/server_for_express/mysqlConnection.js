// 导入mysql模块
const mysql = require("mysql");
const {host}=require("./http")
// 默认配置
const defaultOptions = {
    host,
    port: '3306',
    user: 'root',
    password: '123',
    database: 'hero'
}
// 获取connection对象
function getConnection(options = defaultOptions) {
    return mysql.createConnection(options);
}
// 导出getConnection
module.exports = getConnection;
