frontend 
htmt, css, js , React.js 
Backend 
Node, express, mongodb , redis

Backend me code run nahi karna hai
kiu ki user frontend se aisa code send kar sakta hai jisses mera backend code ud sakta hai

then solution
# Judge0
Robust, scalable, and open-source online code execution system that can be used to build a wide range of applications that need online code execution features.
code ko backend me run nahi karna hai kiu ki ho sakta hai us code me 
aisa code likha ho ki backend ke pure files delete ho jaye
then we use Judge0 
muze isko file(code) ,input,output and language dena hai c++,java and ans dega kya is code ko run karne ke bad output yahi aa raha hai jo mene diya
ye run karne se pehle pura code sanitize karta hai kya koi gadbad to nahi hai then run
and give result in yes or no
iske pass har language ka compiler present hai
isko locally bhi download kar sakte hai
self hosted free hai Basic 
but jis server pe host kar rahe hai uski to cost lagegi

2 way
locally server 
in that Judge0 and Docker
docker se memory limited de sakte hai

judge0.com/#pricing

we use Basic free plan= 50 submission per day
50 test cases and 50 output ko ek sath send kar sakte hai for saving submission

# Backend system:
1) userAuthentication
2) problems creation: Admin problem create karna initially function likna , test cases likna
3) problem submission : for executing problem
4) DSA problem: Showing DSA problem list

1) register, login,logout,email_verify,reset-password,forgot_password,google-signup
verifyemail= after cliking get request one http req and token is generated and then use
backend me check karenge ki email valid hai ya nahi

email verify= me user ke email me ek token bhejta hu as a link after click wo backend 
me mere pass aayega as a get request and check kya ye token mene hi generate kiya hai

# Schema
user

fistname
lastname
email
role = user or Admin
password
solvedproblem
image

problems

problem id = problem no 
title
testcases
hidden test cases = jo testcases backend me likhe hai hame pure nahi dikte
initial code with language
real solution
run output testcases
hidden output testcases
video solution

submit

user solution
problem Id
solution accept, reject

i can integrate Ai for debugging
# sequence
Day1
.env
src 
index.js  isse src me hi rakna hai 
src/config/db.js        == for database
src/models/user.js        === for schemas

 
# Extension
npm init -y  for package.json
npm i express
npm i dotenv  for env file and get lock 
npm i mongoose   for mongoose
npm i cookie-parser  for cookies

Leetcode is database name



# Day2

# sequence 
src/models/user.js
src/route/userAuth.js   = for routes
src/controllers/userAuthent.js  = for defining routes
src/utils/validator.js  = validate the user

# Extension
npm i validator
npm i bcrypt                     uses in controllers/userAuthent.js
npm i jsonwebtoken

userAuthentication

register
login
logout
Getprofile
email-verify
reset-password
forgot-password
Google-signup

Generate a Random JWT Secret Key
code run in terminal then get following key

3b1452183c7685df11dae83b10ec2c3cc8243a61c0df67b77e71f2822453ca44

400 = Bad request:Invalid request syntax or parameter
401 = Unauthorized: Authentication required
403 = forbidden: Client lacks permission to access the resource.
404 = Not found: Resource not found on the server
429 = To many requests: Rate limit exceeded
500 = internal server error
201 = successfully registered
400 = error in registration
401 = Unauthorized Access

# Day03
# Sequence
index.js
src/routes/userAuth.js
src/middleware/usermiddleware.js  = for logout feature
src/config/redis.js  = for logout feature
index.js
controllers/userAuthent = for koi bhi aaye to wo user hi ho
src/model/problem.js
routes/userAuth.js
middleware/adminMiddleware.js
routes/problemCreator.js


# Extension
npm i redis


agar user postman me role admin dalta hai to wo db me bhi admin ban raha hai 
agar application meri ho to me khud user ko register karke admin banauga

 req.body.role='user' //ab koi bhi aaye as a user hi aayega register path se
                    wo role admin dega phir bhi

authRouter.post(/admin/register" , adminRegister)

new intern ko register karna hai to mai isse as a admin register karunga
but me khud to admin hona chahiye to adminMiddleware.js
to me khud db me admin edit karunga

pehle me as a admin login huwa database me as a admin edit kiya
then new req localhost:3000/user/admin/register
{
    firstName:Ayush
    emailId:
    password:
}
ab ayush bhi admin ban gaya kiu ki mere cookie admin wali thi 




user ka schema ho gaya ab problem ka schema banana hai

# Day04
routes/problemCreator.js
model/problem.js
controllers/userProblem.js
utils/ProblemUtility.js

referenceSolution:  [
        {
            language:c++
            completecode:c++ code
               
        }
        {
             language:java
            completecode:java code

        }
    ],

    se give judge 0 in the formate of
    language:c++
    code:"dfdfdhf"
    input:90
    output;95

   
    go judge0 documentation 
    first link

    Get started
    Free basic plan in new tab

    https://rapidapi.com/judge0-official/api/judge0-ce/discussions

    https://ce.judge0.com/languages/  == for language id

from submission on website

    source_code
    language_id
    stdin
    expected_output

 from staturs and language
 for language id

 https://ce.judge0.com/languages/
  command for get language id

  
{
"id": 45,
"name": "Assembly (NASM 2.14.02)"
},
{
"id": 46,
"name": "Bash (5.0.0)"
},
{
"id": 47,
"name": "Basic (FBC 1.07.1)"
},
{
"id": 104,
"name": "C (Clang 18.1.8)"
},

many more in the array


3 test cases

code 
first testcases

code                  tinoko ek ek karke judge0 ko de raha hu
second testcases

code 
third testcases

tino ka batch bana ke eksath bhi de sakta hu judge0 ko

format of batch create

    [
  "source_code": "#include <stdio.h>\n\nint main(void) {\n  char name[10];\n  scanf(\"%s\", name);\n  printf(\"hello, %s\n\", name);\n  return 0;\n}",
  "language_id": "4",
  "stdin": "Judge0",
  "expected_output": "hello, Judge0"
    ]

      const submissions = visibleTestCases.map((input,output)=>({
            source_code:completeCode,
            language_id: languageId,
            stdin: input,
            expected_output: output
        }));

        submissions name ka array create kiya

# axios        
it is http request
it automatically transform JSON data. so you don't have to do response.json()
like with fetch
with fetch you have to check if the response is ok and throw error yourself.
Axios does this automatically

npm i axios

response me wo token dega 3 submit kiye to 3 token 
[
    {
        "token":"fjidhdsifuere8r
    },
    
    {
        "token":"ffiruefdhsfdsfh
    },
    
    {
        "token":"fhjoyjgosjghfaf
    },

]
two way process


pehle ham result ko submit karte hai aur judge0 hame token return karke deta hai
fir me token ko pakad ke get request marunga and actual result ko fetch karunga

create a submission batch
get a submission batch

# status id 
[
  {
    "id": 1,
    "description": "In Queue"
  },
  {
    "id": 2,
    "description": "Processing"
  },
  {
    "id": 3,
    "description": "Accepted"
  },
  {
    "id": 4,
    "description": "Wrong Answer"
  },
  {
    "id": 5,
    "description": "Time Limit Exceeded"
  },
  {
    "id": 6,
    "description": "Compilation Error"
  },
  {
    "id": 7,
    "description": "Runtime Error (SIGSEGV)"
  },
  {
    "id": 8,
    "description": "Runtime Error (SIGXFSZ)"
  },
  {
    "id": 9,
    "description": "Runtime Error (SIGFPE)"
  },
  {
    "id": 10,
    "description": "Runtime Error (SIGABRT)"
  },
  {
    "id": 11,
    "description": "Runtime Error (NZEC)"
  },
  {
    "id": 12,
    "description": "Runtime Error (Other)"
  },
  {
    "id": 13,
    "description": "Internal Error"
  },
  {
    "id": 14,
    "description": "Exec Format Error"
  }
]

mene batch submission kiya 3 ka to judge0 ne muze 3 token diye then 3 token ko firse
batch me bheja(get submission) then judge0 give output in output status_id is present

means we want two api call to the judge0 for one submission


# Day05
controllerrs/userProblem.js
utils/ProblemUtility.js
Routes/Problemcreator.js
index.js
controllers/userProblem.js
Routes/problemcreator.js


[
    {
        "token":"fjidhdsifuere8r
    },
    
    {
        "token":"ffiruefdhsfdsfh
    },
    
    {
        "token":"fhjoyjgosjghfaf
    },

]


is array me se token nikalna hai ek ek karke and array me dalunga
kiu ki muze tino token ek sath judge0 ko dene hai and token seperated by ,(comma)
get a batch submission in jude0 format see

# creating submission batch link and also get
https://rapidapi.com/judge0-official/api/judge0-ce/playground/apiendpoint_2553301e-31a9-47e9-b8e9-82148465c885



ProblemUtilitys ka response aise aata hai

get a submission batch in judge0
result=
{
  "submissions": [
    {
      "language_id": 46,
      "stdout": "hello from Bash\n",
      "status_id": 3,
      "stderr": null,
      "token": "db54881d-bcf5-4c7b-a2e3-d33fe7e25de7"
    },
    {
      "language_id": 71,
      "stdout": "hello from Python\n",
      "status_id": 3,
      "stderr": null,
      "token": "ecc52a9b-ea80-4a00-ad50-4ab6cc3bb2a1"
    },
    {
      "language_id": 72,
      "stdout": "hello from Ruby\n",
      "status_id": 3,
      "stderr": null,
      "token": "1b35ec3b-5776-48ef-b646-d5522bdeb2cc"
    }
  ]
}

ye upper ka final result testResult ke pass aa jayega


in postman
localhost:3000/problem/create

{
  "title":"Add Two Numbers",
  "description":"Write a program that takes two integers as input and returns their sum.",
  "difficulty":"easy",     
  "tags":"array",
  "visibleTestCases":[
    {
      "input":"2 3",
      "output":"5",
      "explanation":"2 + 3 equals 5"
    },

    {
      "input":"1 5",
      "output":"4",
      "explanation":"-1 + 5 equals 4"
    }
  ],

  "hiddenTestCases": [
    {
      "input":"10  20",
      "output":"30"
    },
    {
      "input":"100  250",
      "output":"350"
    }
  ],

  "startCode": [
    {
    "language":"C++",
    "initialCode":"#include <iostream>\nusing namespace std;\nint main(){\nint a,b;\nreturn 0;\n}"

    },
     {
    "language":"Java",
    "initialCode":"public class Main{\npublic static void main(String[] args){\nint a,b;\n}\n}"

    },
     {
    "language":"JavaScript",
    "initialCode":"const readline= require('readline');\n\n//"
    }
  ],

  "referenceSolution":[
    {
      "language":"C++",
      "completeCode":"#include <iostream>\nusing namespace std;\nint main(){\nint a,b;\ncin>>a>>b;\ncout<<a+b;\nreturn 0;\n}"

    },
    {
      "language":"Java",
      "completeCode":"import java.util.Scanner;\npublic class Main{\npublic static void main(String[] args){\nint a,b;\nScanner sc=new Scanner(System.in);\na=sc.nextInt();\nb=sc.nextInt();\nSystem.out.println(a+b);\n}\n}"

    },
    {
      "language":"JavaScript",
      "completeCode":"const fs=require(\"fs\");\nconst input=fs.readFileSync(0,\"utf8\").trim().split(/\\s+/);\nconst a=Number(input[0]);\nconst b=Number(input[1]);\nconsole.log(a+b);"

    }
  ]       
}


{
  "title":"Add Two Numbers",
  "description":"Write a program that takes two integers as input and returns their sum.",
  "difficulty":"easy",     
  "tags":"array",
  "visibleTestCases":[
    {
      "input":"2 3",
      "output":"5",
      "explanation":"2 + 3 equals 5"
    },

    {
      "input":"1 5",
      "output":"4",
      "explanation":"-1 + 5 equals 4"
    }
  ],

  "hiddenTestCases": [
    {
      "input":"10  20",
      "output":"30"
    },
    {
      "input":"100  250",
      "output":"350"
    }
  ],

  "startCode": [
  {
    "language": "C++",
    "initialCode": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){\nint a,b;\ncin>>a>>b;\n// write your code here\nreturn 0;\n}"
  },
  {
    "language": "Java",
    "initialCode": "import java.util.*;\npublic class Main{\npublic static void main(String[] args){\nScanner sc=new Scanner(System.in);\nint a=sc.nextInt();\nint b=sc.nextInt();\n// write your code here\n}\n}"
  },
  {
    "language": "JavaScript",
    "initialCode": "const fs=require(\"fs\");\nconst input=fs.readFileSync(0,\"utf8\").trim().split(/\\s+/);\nconst a=Number(input[0]);\nconst b=Number(input[1]);\n// write your code here"
  }
],


  "referenceSolution":[
    {
      "language":"C++",
      "completeCode":"#include <iostream>\nusing namespace std;\nint main(){\nint a,b;\ncin>>a>>b;\ncout<<a+b;\nreturn 0;\n}"

    },
    {
      "language":"Java",
      "completeCode":"import java.util.Scanner;\npublic class Main{\npublic static void main(String[] args){\nint a,b;\nScanner sc=new Scanner(System.in);\na=sc.nextInt();\nb=sc.nextInt();\nSystem.out.println(a+b);\n}\n}"

    },
    {
      "language":"JavaScript",
      "completeCode":"const fs=require(\"fs\");\nconst input=fs.readFileSync(0,\"utf8\").trim().split(/\\s+/);\nconst a=Number(input[0]);\nconst b=Number(input[1]);\nconsole.log(a+b);"

    }
  ]       
}





use this 

"startCode": [
  {
    "language": "C++",
    "initialCode": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){\nint a,b;\ncin>>a>>b;\n// write your code here\nreturn 0;\n}"
  },
  {
    "language": "Java",
    "initialCode": "import java.util.*;\npublic class Main{\npublic static void main(String[] args){\nScanner sc=new Scanner(System.in);\nint a=sc.nextInt();\nint b=sc.nextInt();\n// write your code here\n}\n}"
  },
  {
    "language": "JavaScript",
    "initialCode": "const fs=require(\"fs\");\nconst input=fs.readFileSync(0,\"utf8\").trim().split(/\\s+/);\nconst a=Number(input[0]);\nconst b=Number(input[1]);\n// write your code here"
  }
]


# base_64
ham base_64 me data encode nahi kar rahe json me hi ha raha hai hence
false 


# Day06
routes/problemcreator.js
controllers/userProblem.js
models/submission.js

update button click karne ke bad backend se data fill out karke aayega
and hame us data ko update karna hai and click update

# pagination
10 10 karke problem launga jab user button pe click karega tab aur 10 load karunga
for getAllproblem 

localhost:3000/problem/getAllproblem?page=2&limit=10
 second page limit 10

formula
const page=2
const limit=10
const skip=(page-1) * limit;

await Problem.find().skip(10).limit(10)

skip means kitne initial value ko muze hatana hai to pehle 10 ko hatana hai and 
11 to 20 show karna hai

filter
await Problem.find({difficulty:'easy'})

or 

Problem.find({
  votes: {$gte: 100},
  tags: {$in:["array","hashmap"]}
})


soveldAllproblembyuser

submission schema

Problem_id:
user_id:
code:
language:
Time:
Memory:
status: pending accepted compilation error,
Testcases: kitne clear huye total mese

actual i send in postman
{
  "title":"Add Two Numbers",
  "description":"Write a program that takes two integers as input and returns their sum.",
  "difficulty":"easy",     
  "tags":"array",
  "visibleTestCases":[
    {
      "input":"2 3",
      "output":"5",
      "explanation":"2 + 3 equals 5"
    },

    {
      "input":"1 5",
      "output":"6",
      "explanation":"1 + 5 equals 6"
    }
  ],

  "hiddenTestCases": [
    {
      "input":"10  20",
      "output":"30"
    },
    {
      "input":"100  250",
      "output":"350"
    }
  ],

  "startCode": [
    {
    "language":"C++",
    "initialCode":"#include <iostream>\nusing namespace std;\nint main(){\nint a,b;\nreturn 0;\n}"

    },
     {
    "language":"Java",
    "initialCode":"public class Main{\npublic static void main(String[] args){\nint a,b;\n}\n}"

    },
     {
    "language":"JavaScript",
    "initialCode":"const readline= require('readline');\n\n//"
    }
  ],

  "referenceSolution":[
    {
      "language":"C++",
      "completeCode":"#include <iostream>\nusing namespace std;\nint main(){\nint a,b;\ncin>>a>>b;\ncout<<a+b;\nreturn 0;\n}"

    },
    {
      "language":"Java",
      "completeCode":"import java.util.Scanner;\npublic class Main{\npublic static void main(String[] args){\nint a,b;\nScanner sc=new Scanner(System.in);\na=sc.nextInt();\nb=sc.nextInt();\nSystem.out.println(a+b);\n}\n}"

    },
    {
      "language":"JavaScript",
      "completeCode":"const fs=require(\"fs\");\nconst input=fs.readFileSync(0,\"utf8\").trim().split(/\\s+/);\nconst a=Number(input[0]);\nconst b=Number(input[1]);\nconsole.log(a+b);"

    }
  ]       
}

sum and add two No

Write a program that takes two integers as input and returns their sum.

#include <iostream>
using namespace std;
int main(){
int a,b;
return 0;
}


#include <iostream>
using namespace std;
int main(){
int a,b;
cin>>a>>b;
cout<<a+b;
return 0;
}


public class Main{
public static void main(String[] args){
int a,b;
}
}


import java.util.Scanner;
public class Main{
public static void main(String[] args){
int a,b;
Scanner sc=new Scanner(System.in);
a=sc.nextInt();
b=sc.nextInt();
System.out.println(a+b);
}
}



const readline= require('readline');


<!-- const fs=require(\"fs\");
const input=fs.readFileSync(0,\"utf8\").trim().split(/\\s+/);
const a=Number(input[0]);
const b=Number(input[1]);
console.log(a+b); -->

for only js repeat

const input=require('fs').readFileSync(0,"utf8").trim()
const [a,b]= input.split(' ').map(Number);
console.log(a+b);



# Day07
model/submission.js
controllers/userProblem.js
routes/submit.js
./controllers/userSubmission

check all api in postman

//localhost:3000/problem/update/Id in mongodb
send whole code which is above Day07

localhost:3000/problem/problemById/69844912e89af8d5421462ba
is api me sub kuch pura send kar raha hu frontend me like hiddentestcases and etc

so userProblem.js me .select karna hai kya send karna hai to

localhost:3000/problem/getAllProblem
isme bhi sare aa ja rahe hai muze to sirf title ki list chahiye
only 
_id
title
difficulty 
tags


ek bar ham jo solution send karte hai wo db me store karna hai
chahe fir solution wrong ho ya right

Run me sirf result show karna hai
jab me Run ko click karunga to sirf visibletestcases ko run karna hai 
and submit me hiddentestcases ko run karunga

user ne code submit kiya then direct db me store karunga and status pending rakunga
then judge0 ko dunga and status update karunga db me
but why these method
aisa ho sakta hai judge0 error de de or response hi na de and user ko firse submit karna pade

mere pass 300 testcases ke 200 error ho sakte hai to me sirf ek hi errormessage:lunga


# Day08
routes/submit.js
index.js
model/user.js
controllers/userSubmission.js
utils/ProblemUtility.js
env
routes/ProblemCreator.js
controllers/userproblem.js
controllers/userSubmission.js
routes/submit.js

same problem ke alag alag submission id aayegi 
and problemsolved me hame unique problem chahiye hence problemid in model/user.js

submission karne ke bad check karna hai ki wo problemId problemSolved me hai ya nahi
nahi hai to us problemId ko push karunga otherwise no push in userSubmission.js

 type:[{
            type:Schema.Types.ObjectId,
            ref:'problem'
        }],

        ye ref problem schema ka reference store kar raha hai


const userId = req.result._id;

      const user =  await User.findById(userId).populate("problemSolved")

      populate = ye problemSolved jisko refer kar raha usko leke aao        

# Day09

routes/userAuth.js
controllers/userAuthent.js
model/submission.js
routes/problemcreater.js
controllers/userproblem.js

user ko delete marna hai

hame jo user ne problem submit kiye usak code user ko show karvana hai 
hence indexing
_id (object id)  by default indexing 

unique:true  = create indexing
or
index:ture 

20 crore user ho sakte hai
usme hame userid and problem id find karna pad sakta hai hence indexing

# solution
compound index
make compound index with combination of userId and ProblemId

index store karne ke liye bhi memory lagati hai 15 to 20 % out of 100% data

data duplicate hai fir bhi indexing ban sakti hai

jo query ham bar bar chala rahe hai means bhot bar data ko fetch kar rahe hai to 
indexing lagao

submission  userId problemId
             4       10
             6       8
             4       9
             4       10
             5       7

after indexing
submissionSchema.index({userId:1 , problemId:1}); -1 for decsending order
it will create ascending order both first
submission  userId problemId
             4       10
             4       8
             4       9
             5       10
             6       7

total output

4      8
4      9
4      10
5      7
6      10

ab userId me bhi query laga sakte hai for optimization
problemId me nahi laga sakta because not sorted form




# How to send email
1. Transporter

Configuration that connects to the email service (SMTP)
email and password

2. Mail Options

Details like:
• Sender
• Receiver
• Subject
• Message

3. sendMail()

Function that actually sends the email

on 2 step verification on gmail
https://myaccount.google.com/apppasswords