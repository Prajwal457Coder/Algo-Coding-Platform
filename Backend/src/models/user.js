const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    firstName:{
        type: String,
        required: true,
        minLength:3,
        maxLength:20
    },
    lastName:{
        type:String,
        minLength:3,
        maxLength:20,
    },
    emailId:{
        type:String,
        required:true,
        unique:true,
        trim: true,
        lowercase:true,
        immutable: true,
    },
    age:{
        type:Number,
        min:6,
        max:80,
    },
    role:{
        type:String,
        enum:['user','admin'],
        default: 'user'
    },
    problemSolved:{
       type:[{
            type:Schema.Types.ObjectId,
            ref:'problem'
        }],
        unique:true
    },// jo problem mene solve ki aaj tak unko me yaha store karunga problem unique hi chahiye
    // problem id store karenge
    password:{
        type:String,
        required: true
    },
    resetOtp:String,
    otpExpiry:Date,

},{
    timestamps:true
});

// await User.findByIdAndDelete(userId); is issi command ke sath attach rehta hai
// isid ko delete marne ke bad ye neeche wala chalega
// ye only particular command pe hi chalega findOneAndDelete
// iska conversion mongodb me findOneAndDelete  hai 
// pre pehle chalega bad me instruction execute hoge
userSchema.post('findOneAndDelete', async function (userInfo) {
    if (userInfo) {
      await mongoose.model('submission').deleteMany({ userId: userInfo._id });
    }
});

const User = mongoose.model("user",userSchema); // user used in problem.js

module.exports = User;
