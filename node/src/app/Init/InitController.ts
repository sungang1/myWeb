import * as express from 'Express';
export class Init{
 test=(req: express.Request, res: express.Response)=>{
    console.log('测试成功');
    res.json({"error":true})

 }

}