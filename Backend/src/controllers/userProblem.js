 const {getLanguageById,submitBatch,submitToken} = require("../utils/ProblemUtility");
const Problem=require("../models/problem")
const User = require("../models/user");
const Submission = require("../models/submission");
const SolutionVideo = require("../models/solutionVideo")

const createProblem = async (req,res)=>{
    const {title,description,difficulty,tags,
        visibleTestCases,hiddenTestCases,startCode,
        referenceSolution, problemCreator
    } = req.body;
//console.log(req.body)

    try{
       //referenceSolution = [
//    { language: "java", completeCode: "java full solution" },
//    { language: "c++", completeCode: "cpp full solution" }
// ]
      for(const {language,completeCode} of referenceSolution){


        // source_code:
        // language_id:
        // stdin: 
        // expectedOutput:

        const languageId = getLanguageById(language);
       
        // I am creating Batch submission

//         visibleTestCases = [
//    { input: "2 3", output: "5" },
//    { input: "4 6", output: "10" }
// testcase = { input: "2 3", output: "5" }
// ]
        const submissions = visibleTestCases.map((testcase)=>({
            source_code:completeCode,
            language_id: languageId,
            stdin: testcase.input,
            expected_output: testcase.output
        }));


        const submitResult = await submitBatch(submissions);
        
// submitResult in the form of array of token see in readme.md
// us token ko ek ek karke bahar nikal raha hu below
      // console.log(submitResult);
       
        const resultToken = submitResult.map((value)=> value.token);

        // ["db54881d-bcf5-4c7b-a2e3-d33fe7e25de7","ecc52a9b-ea80-4a00-ad50-4ab6cc3bb2a1","1b35ec3b-5776-48ef-b646-d5522bdeb2cc"]
        
       const testResult = await submitToken(resultToken);
       // get final answer after submitting the token from submitToken function
      //  console.log(testResult);

       for(const test of testResult){
        if(test.status_id!=3){
         return res.status(400).send("Error Occured");
        }
       } 

      

      }
      // we can store it in our DB after for loop this
     const userProblem =  await Problem.create({
        ...req.body,
        problemCreator: req.result._id // adminmiddleware for getting admin id
      });

      res.status(201).send("Problem Saved Successfully");


    }
    catch(err){
        res.status(400).send("Error: "+err);
    }
}
// jo code change karke aaya wo check karna hai ki sahi hai ye nahi
// pura code update karna hai

const updateProblem = async (req,res)=>{
    
  const {id} = req.params;
  const {title,description,difficulty,tags,
    visibleTestCases,hiddenTestCases,startCode,
    referenceSolution, problemCreator
   } = req.body;

  try{

     if(!id){
      return res.status(400).send("Missing ID Field");
     }

    const DsaProblem =  await Problem.findById(id);
    if(!DsaProblem)
    {
      return res.status(404).send("ID is not persent in server");
    }
      
    for(const {language,completeCode} of referenceSolution){
         

      // source_code:
      // language_id:
      // stdin: 
      // expectedOutput:

      const languageId = getLanguageById(language);
        
      // I am creating Batch submission
      const submissions = visibleTestCases.map((testcase)=>({
          source_code:completeCode,
          language_id: languageId,
          stdin: testcase.input,
          expected_output: testcase.output
      }));


      const submitResult = await submitBatch(submissions);
      // console.log(submitResult);

      const resultToken = submitResult.map((value)=> value.token);

      // ["db54881d-bcf5-4c7b-a2e3-d33fe7e25de7","ecc52a9b-ea80-4a00-ad50-4ab6cc3bb2a1","1b35ec3b-5776-48ef-b646-d5522bdeb2cc"]
      
     const testResult = await submitToken(resultToken);

    //  console.log(testResult);

     for(const test of testResult){
      if(test.status_id!=3){
       return res.status(400).send("Error Occured");
      }
     }

    }


  const newProblem = await Problem.findByIdAndUpdate(id , {...req.body}, {runValidators:true, new:true});
   // new:true  = update ke bad new problem return kar dena
  res.status(200).send(newProblem);
  }
  catch(err){
      res.status(500).send("Error: "+err);
  }
}

const deleteProblem= async (req,res)=>{
      const {pid} = req.params;
      console.log(pid)
  try{
     
    if(!pid)
      return res.status(400).send("ID is Missing");

   const deletedProblem = await Problem.findByIdAndDelete(pid);

   if(!deletedProblem)
    return res.status(404).send("Problem is Missing");


   res.status(200).send("Successfully Deleted");
  }
  catch(err){
     
    res.status(500).send("Error: "+err);
  }
}

// const getProblemById= async (req,res)=>{
//       const {id} = req.params;
//   try{
     
//     if(!id)
//       return res.status(400).send("ID is Missing");

//     const getProblem = await Problem.findById(id).select('_id title description difficulty tags visibleTestCases startCode referenceSolution editorial ');
//                                                         //or -hiddentestcases and baki sab aayege
//    if(!getProblem)
//     return res.status(404).send("Problem is Missing");


//    res.status(200).send(getProblem);
//   }
//   catch(err){
//     res.status(500).send("Error: "+err);
//   }
// }

// const getAllProblem= async (req,res)=>{
//       try{
     
//     const getProblem = await Problem.find({}).select('_id title difficulty tags' );

//    if(getProblem.length==0)
//     return res.status(404).send("Problem is Missing");


//    res.status(200).send(getProblem);
//   }
//   catch(err){
//     res.status(500).send("Error: "+err);
//   }
// }

const getProblemById = async(req,res)=>{

  const {id} = req.params;
  try{
     
    if(!id)
      return res.status(400).send("ID is Missing");

    const getProblem = await Problem.findById(id).select('_id title description difficulty tags visibleTestCases startCode referenceSolution ');
   
    // video ka jo bhi url wagera le aao

   if(!getProblem)
    return res.status(404).send("Problem is Missing");

   const videos = await SolutionVideo.findOne({problemId:id});

   if(videos){    
  //  getProblem.secureUrl = videos.secureUrl;
  // // getProblem.cloudinaryPublicId = videos.cloudinaryPublicId;
  //  getProblem.thumbnailUrl = videos.thumbnailUrl;
  //  getProblem.duration = videos.duration;
   const responseData={
    ...getProblem.toObject(),
    secureUrl:videos.secureUrl,
    thumbnailUrl:videos.thumbnailUrl,
    duration:videos.duration,
   }

   return res.status(200).send(responseData);
   }
    
   res.status(200).send(getProblem);

  }
  catch(err){
    res.status(500).send("Error: "+err);
  }
}

const getAllProblem = async (req,res)=>{
  try{
    const problems = await Problem.find({})
      .select('_id title difficulty tags');

    res.status(200).json(problems);
  }
  catch(err){
    res.status(500).json({ message: "Server Error" });
  }
}

const solvedAllProblembyUser =async (req,res)=>{
    try{
      // const count= req.result.problemSolved.length;
      // res.status(200).send(count)
       
      const userId = req.result._id;

      const user =  await User.findById(userId).populate({
        path:"problemSolved",  // problemSolved is a field inside User collection.
        select:"_id title difficulty tags"
      });
//       {
//    "_id": "user123",
//    "name": "Prajwal",
//    "problemSolved": [
//       "problemId1",
//       "problemId2"
//    ]
// }

// {
//    "_id": "user123",
//    "problemSolved": [
//       {
//          "_id": "problemId1",
//          "title": "Two Sum",
//          "difficulty": "Easy",
//          "tags": ["array"]
//       },
//       {
//          "_id": "problemId2",
//          "title": "Binary Search",
//          "difficulty": "Medium",
//          "tags": ["binary search"]
//       }
//    ]
// }
      res.status(200).send(user.problemSolved);

    }
    catch(err){
      res.status(500).send("Server Error");
    }
}

const submittedProblem = async(req,res)=>{

  try{
     
    const userId = req.result._id;
    const problemId = req.params.id; //id means problem id give by user in head postman
  
  const ans = await Submission.find({userId,problemId});

  if(ans.length==0){
    return res.status(200).json([]);
  }
  
    res.status(200).send(ans);
  }
  catch(err){
     res.status(500).send("Internal Server Error");
  }
}


module.exports = {createProblem,updateProblem,deleteProblem,getProblemById,getAllProblem,solvedAllProblembyUser,submittedProblem};

// const submissions = [
//     {
//       "language_id": 46,
//       "source_code": "echo hello from Bash",
//       stdin:23,
//       expected_output:43,
//     },
//     {
//       "language_id": 123456789,
//       "source_code": "print(\"hello from Python\")"
//     },
//     {
//       "language_id": 72,
//       "source_code": ""
//     }
//   ]

// chatgpt
// https://chatgpt.com/c/6997ec8c-8f94-8324-9d8b-b58e54cf8cb1