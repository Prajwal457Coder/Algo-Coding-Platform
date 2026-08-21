const mongoose=require('mongoose')
const {Schema} = mongoose;

// problem description leetcode ka ui of problem

const problemSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    difficulty:{
        type:String,
        enum:['easy','medium','hard'],
        required:true,
    },
    tags:{
        type:String,
        enum:['array','linkedList','graph','dp'],
        required:true
    },
    visibleTestCases:[
        {
            input:{
                type:String,
                required:true,
            },
            output:{
                type:String,
                required:true,
            },
            explanation:{
                type:String,
                required:true
            }
        }
    ],

    hiddenTestCases:[
        {
            input:{
                type:String,
                required:true,
            },
            output:{
                type:String,
                required:true,
            }
        }
    ],

    startCode: [
        {
            language:{
                type:String,
                required:true,
            },
            initialCode:{
                type:String,
                required:true
            }
        }
    ],
// Real solution
    referenceSolution:  [
        {
            language:{
                type:String,
                required:true,
            },
            completeCode:{
                type:String,
                required:true
            }
        }
    ],

    problemCreator:{
        type: Schema.Types.ObjectId, //problem konse admin ne create kiya user ki object id user.js me hai mongodb me
        ref:'user',  //user ki object id li hai multiple schema ho sakte hai
                     // kiu ki compass me multiple collection ho sakte hai then user collection
                     // Rohit ne problem create kiya hai to uske id ko refer karega
        required:true
    }
})


const Problem = mongoose.model('problem',problemSchema);

module.exports = Problem;