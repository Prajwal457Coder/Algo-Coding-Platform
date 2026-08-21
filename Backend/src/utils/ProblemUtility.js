const axios = require('axios');

const getLanguageById = (lang)=>{

    const language = {
        "c++":54,
        "java":62,
        "javascript":63
    }

    return language[lang.toLowerCase()]; // return 62 for java
}


const submitBatch = async (submissions)=>{


// code from judge0 create submission batch
//link =https://rapidapi.com/judge0-official/api/judge0-ce/playground/apiendpoint_2553301e-31a9-47e9-b8e9-82148465c885

const options = {
  method: 'POST',
  url: 'https://judge0-ce.p.rapidapi.com/submissions/batch',
    
  params: {
     base64_encoded: 'false',
  },
  headers: {
    'x-rapidapi-key': process.env.JUDGE0_KEY,
    'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
    'Content-Type': 'application/json'
  },
  data: {
    submissions
  }
};

async function fetchData() {
	try {
		const response = await axios.request(options); // give token in array
		//console.log(response.data);
        return response.data // return token
	} catch (error) {
		console.error(error);
	}
}

return await fetchData();

}

// const waiting=async(timer)=>{
//   setTimeout(()=>{
//   return 1;
//   },timer);
// }



const waiting = (timer)=>{
  return new Promise(resolve => setTimeout(resolve, timer));
}
// code of how to submit token
// copy from link = https://rapidapi.com/judge0-official/api/judge0-ce/playground/apiendpoint_2553301e-31a9-47e9-b8e9-82148465c885
const submitToken=async(resultToken)=>{
const options = {
  method: 'GET',
  url: 'https://judge0-ce.p.rapidapi.com/submissions/batch',
  params: {
    tokens: resultToken.join(","),// token ko string me dala and , se separate kiya
    base64_encoded: 'false',
    fields: '*'
  },
  headers: {
    'x-rapidapi-key': process.env.JUDGE0_KEY,
    'x-rapidapi-host': 'judge0-ce.p.rapidapi.com'
  }
};

async function fetchData() {
	try {
		const response = await axios.request(options);
    
		// console.log(response.data);
    return response.data;
	} catch (error) {
		console.error(error);
	}
}

while(true)
{
  
const result = await fetchData(); // show in redme.md
// agar statusId 3 nahi hai to firse token send karne padege 
// means function call karna padega

const IsResultObtained = result.submissions.every((r)=>r.status_id>2);

if(IsResultObtained)
  return result.submissions;
// nahi to firse function call karna hai hence while


// befor function call 1 second wait karna hai
  await waiting(1000);
}

}


module.exports = {getLanguageById,submitBatch,submitToken};


// old code in submitbatch
// const options = {
//   method: 'POST',
//   url: 'https://judge0-ce.p.rapidapi.com/submissions/batch',
//   params: {
//     base64_encoded: 'true'
//   },
//   headers: {
//     'x-rapidapi-key': 'ab99c6ec42mshfd636ec7c6687efp1b9043jsna684835b0591',
//     'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
//     'Content-Type': 'application/json'
//   },
//   data: {
//     submissions
//   }
// };

// async function fetchData() {
// 	try {
// 		const response = await axios.request(options);
// 		return response.data;
// 	} catch (error) {
// 		console.error(error);
// 	}
// }

//  return await fetchData();

// chatgpt.link
//https://chatgpt.com/c/6997ec8c-8f94-8324-9d8b-b58e54cf8cb1







