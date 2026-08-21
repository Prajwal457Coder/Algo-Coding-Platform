const express=require('express');
const adminMiddleware = require('../middleware/adminMiddleware');
const problemRouter =express.Router();
const {createProblem,updateProblem,deleteProblem,getProblemById,getAllProblem,solvedAllProblembyUser,submittedProblem}=require("../controllers/userProblem");
const userMiddleware = require("../middleware/usermiddleware");

// problem ko 
// create karna ,
problemRouter.post("/create",adminMiddleware, createProblem);
problemRouter.put("/update/:id",adminMiddleware, updateProblem);
problemRouter.delete("/delete/:pid",adminMiddleware, deleteProblem);


problemRouter.get("/problemById/:id",userMiddleware,getProblemById);
problemRouter.get("/getAllProblem", getAllProblem);
problemRouter.get("/problemSolvedByUser",userMiddleware, solvedAllProblembyUser);// submissin schema
problemRouter.get("/submittedProblem/:id",userMiddleware,submittedProblem)
//  fetch karna ,
//  delete karna
//  ,update karna

module.exports=problemRouter;