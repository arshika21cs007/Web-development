import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

//connecting to the database. We are creating variable to hide the password from others.
// To check whether it is connected or not, use this. If any errror we get means it will be caught 
mongoose.connect(process.env.MONGO).then(() => {
    console.log('Connected to MongoDB!');
}).catch((err) => {
    console.log(err);
})


//create an application
const app=express();
//To listen a Port Number 3000--port number can be anything
app.listen(3000,() => {
    console.log('Server is running on port 3000');
}
);
//We get an error while compiling it. So add type in package.json file.