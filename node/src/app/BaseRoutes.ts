 
import express = require("express");
 
import { InitRoutes} from './Init/InitRoutes';
var app = express.Router();

 
app.use('/test',new  InitRoutes().routes)



export { app as BaseRoutes }