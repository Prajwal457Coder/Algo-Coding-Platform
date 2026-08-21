const express = require('express');
const submitRouter = express.Router();
const userMiddleware = require("../middleware/usermiddleware")
const {submitCode,runCode} = require("../controllers/userSubmission")


submitRouter.post("/submit/:id", userMiddleware, submitCode); //problem id in db
 // leetcode me language and refrerencecode ka code send 
submitRouter.post("/run/:id", userMiddleware, runCode)
module.exports=submitRouter;