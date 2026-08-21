const express = require('express')
const app = express();
require('dotenv').config();
const main =  require('./config/db')
const cookieParser =  require('cookie-parser');
const authRouter=require("./routes/userAuth");
const redisClient = require('./config/redis');
const problemRouter=require("./routes/problemCreator")
const submitRouter= require("./routes/submit")
const aiRouter=require("./routes/aiChatting")
const videoRouter=require("./routes/videoCreator")
const cors= require('cors')

const corsOrigin = 'http://localhost:5173';

//Use CORS package
// app.use(cors({
//     origin: [corsOrigin],
//     methods: ['GET', 'POST'],
//     credentials: true
// }));

// app.use(cors({
//     origin:process.env.CLIENT_URL || 'http://localhost:5173',
//     methods: ['GET', 'POST'],
//     credentials:true
// }))

app.use(cors({
    origin: 'http://localhost:5173', // jo bhi data dunga iswale ip ke liye valid hoga
                                     // integrate frontend with backend
    credentials:true        
}))
// agar koi bhi use mere backend ne access deni chahiye to * in origin
app.use(express.json());
app.use(cookieParser());

app.use('/user',authRouter)
app.use('/problem',problemRouter)
app.use('/submission', submitRouter)
app.use('/ai', aiRouter)
app.use('/video',videoRouter)
const InitalizeConnection = async ()=>{

    try{
        await Promise.all([main(),redisClient.connect()])
        console.log("DB Connected")

         app.listen(process.env.PORT, ()=>{
         console.log("Server listening at port number: "+ process.env.PORT);
     })

    }
    catch(err){
        console.log("Error: "+err)

    }


}
InitalizeConnection()


