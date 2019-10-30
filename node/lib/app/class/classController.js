"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = require("../../common/mysql");
class classController {
    constructor() {
        this.getClass = (req, res) => {
            let type = req.body.type;
            let sql;
            switch (type) {
                case 'A':
                    sql = `select distinct A_id,A_name,A_des from A_class`;
                    break;
                case 'B':
                    sql = `select distinct B_id,B_name,B_des from A_class where A_id='${req.body.refA}'`;
                    break;
                case 'C':
                    sql = `select distinct C_id,C_name,C_des from A_class where A_id='${req.body.refA}' and B_id='${req.body.refB}'`;
                    break;
                case 'D':
                    sql = `select  Title_id,title from A_class where A_id='${req.body.refA}' and B_id='${req.body.refB}' and C_id='${req.body.refC}'`;
                    break;
                default:
                    break;
            }
            mysql_1.query(sql, (err, val, fied) => {
                if (err) {
                    res.json({ error: err });
                }
                else {
                    res.json({ error: '', data: val });
                }
            });
        };
        this.setClass = (req, res) => {
            let obj = req.body.content;
            console.log(obj);
            let sql = ` insert into content(KeyId,finshTime,modifyTime,content, tag) values('A00B00C00T0000',null,null,'${obj}',null);`;
            mysql_1.query(sql, function (err, val, fied) {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(val);
                    res.json({ error: '' });
                }
            });
        };
    }
}
exports.classController = classController;
//# sourceMappingURL=classController.js.map