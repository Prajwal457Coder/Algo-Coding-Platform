const Problem = require("../models/problem");
const Submission = require("../models/submission");
const {getLanguageById,submitBatch,submitToken} = require("../utils/ProblemUtility");

const submitCode = async (req,res)=>{
   
    // 
    try{
       const userId = req.result._id;  // from userMiddleware
       const problemId = req.params.id; // /submit/:id   in postman

       let {code,language} = req.body;  // frontend me se send karunga

      if(!userId||!code||!problemId||!language)
        return res.status(400).send("Some field missing");

      if(language==='cpp')
        language='c++'
       //console.log(language)
    //    Fetch the problem from database
       const problem =  await Problem.findById(problemId);
    //    testcases(Hidden)

    //   Kya apne submission store kar du pehle....
    // store in db after click submit button
    const submittedResult = await Submission.create({
          userId,
          problemId,
          code,
          language,
          status:'pending',
          testCasesTotal:problem.hiddenTestCases.length
        })

    //    Judge0 code ko submit karna hai

    const languageId = getLanguageById(language);
   // code from userProblem.js
    const submissions = problem.hiddenTestCases.map((testcase)=>({
        source_code:code,
        language_id: languageId,
        stdin: testcase.input,
        expected_output: testcase.output
    }));


    const submitResult = await submitBatch(submissions);
    
    const resultToken = submitResult.map((value)=> value.token);

    const testResult = await submitToken(resultToken);
    
    // submittedResult ko update karo
    let testCasesPassed = 0;
    let runtime = 0;
    let memory = 0;
    let status = 'accepted';
    let errorMessage = null;


    for(const test of testResult){
        if(test.status_id==3){
           testCasesPassed++;
           runtime = runtime+parseFloat(test.time)
           memory = Math.max(memory,test.memory);
        }else{
          if(test.status_id==4){
            status = 'error'
            errorMessage = test.stderr
          }
          else{
            status = 'wrong'
            errorMessage = test.stderr
          }
        }
    }


    // Store the result in Database in Submission
    submittedResult.status   = status;
    submittedResult.testCasesPassed = testCasesPassed;
    submittedResult.errorMessage = errorMessage;
    submittedResult.runtime = runtime;
    submittedResult.memory = memory;

    await submittedResult.save();

    // // ProblemId ko insert karenge userSchema ke problemSolved mein if it is not persent there.
    
    // req.result == user Information

    if(!req.result.problemSolved.includes(problemId)){
      req.result.problemSolved.push(problemId);
      await req.result.save();  // db me save karo req.user user ko point out kar raha hai in db 
    }// req.result me user ki sari information hai
   // problemSolved ke under problem id aa gayi
    //res.status(201).send(submittedResult);
     // change on Day17
     const accepted =(status=='accepted')
     res.status(201).json({
      accepted,
      totalTestCases:submittedResult.testCasesTotal,
      passedTestCases:testCasesPassed,
      runtime,
      memory
     })  
    }
    catch(err){
      res.status(500).send("Internal Server Error "+ err);
    }

}
// console.log(testResult)

const runCode = async(req,res)=>{
    
     // 
     try{
      const userId = req.result._id;
      const problemId = req.params.id;
      // console.log(`this is user id ${userId}`)
      // console.log(`this is problem id ${problemId}`)
      let {code,language} = req.body;
      // console.log(code)
      // console.log(language)
     if(!userId||!code||!problemId||!language)
       return res.status(400).send("Some field missing");

   //    Fetch the problem from database
      const problem =  await Problem.findById(problemId);
   //    testcases(Hidden)
      
   if(language==='cpp')
        language='c++'


   //    Judge0 code ko submit karna hai

   const languageId = getLanguageById(language);

   const submissions = problem.visibleTestCases.map((testcase)=>({
       source_code:code,
       language_id: languageId,
       stdin: testcase.input,
       expected_output: testcase.output
   }));


   const submitResult = await submitBatch(submissions);
   
   const resultToken = submitResult.map((value)=> value.token);

   const testResult = await submitToken(resultToken);
 
   
  
   //res.status(201).send(testResult);
  // code Day17
   let testCasesPassed = 0;
    let runtime = 0;
    let memory = 0;
    let status = true;
    let errorMessage = null;

    for(const test of testResult){
        if(test.status_id==3){
           testCasesPassed++;
           runtime = runtime+parseFloat(test.time)
           memory = Math.max(memory,test.memory);
        }else{
          if(test.status_id==4){
            status = false
            errorMessage = test.stderr
          }
          else{
            status = false
            errorMessage = test.stderr
          }
        }
    }


   res.status(201).json({
    success:status,
    testCases:testResult,
    runtime,
    memory
   }); 
   }
   catch(err){
     res.status(500).send("Internal Server Error "+ err);
   }
}

module.exports = {submitCode,runCode};

// console.log(testResult)  in postman login and create problem
//     source_code: "#include  __"
//     language_id: 54,
//     stdin: '2 3',
//     expected_output: '5',
//     stdout: '5',
//     status_id: 3,
//     created_at: '2025-05-12T16:47:37.239Z',
//     finished_at: '2025-05-12T16:47:37.695Z',
//     time: '0.002',
//     memory: 904,
//     stderr: null,
//     token: '611405fa-4f31-44a6-99c8-6f407bc14e73',
/*
       number_of_runs: 1,
       cpu_time_limit: '5.0',
       cpu_extra_limit: '1.0',
       wall_time_limit: '10.0',
       memory_limit:256000,
       stack_limit: 64000,
*/

// chatgpt
// https://chatgpt.com/c/69984b95-168c-8323-9c78-d2f7e19ebb3b






