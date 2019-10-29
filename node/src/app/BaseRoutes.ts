 
import express = require("express");
 
import { InitRoutes} from './Init/InitRoutes';
var app = express.Router();

 
app.use('/my',new  InitRoutes().routes)



export { app as BaseRoutes }