//import { createClient } from 'redis';
const {createClient} = require('redis')
require("dotenv").config();


const redisClient = createClient({
    username: 'default',
    password: process.env.REDIS_PASS,
    socket: {
        host: 'redis-11419.c305.ap-south-1-1.ec2.cloud.redislabs.com',
        port: 11419
    }
});

module.exports=redisClient



// Link to connect redis
// https://cloud.redis.io/#/databases/13961499/subscription/3101362/view-bdb/configuration


