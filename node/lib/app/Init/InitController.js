"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Init {
    constructor() {
        this.test = (req, res) => {
            console.log('测试成功');
            res.json({ "error": true });
        };
    }
}
exports.Init = Init;
//# sourceMappingURL=InitController.js.map