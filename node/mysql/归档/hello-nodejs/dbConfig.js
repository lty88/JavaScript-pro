// 1. 导入数据库
const mysql = require("mysql");
// 2. 创建连接函数
function getConnection() {
    return mysql.createConnection({
        // 主机
        host: '127.0.0.1',
        // 端口号
        port: '3306',
        // 用户名
        user: 'root',
        // 密码
        password: '123',
        // 数据库名称
        database: 'hero'
    });
}
// 3. 导出连接函数
module.exports = getConnection;