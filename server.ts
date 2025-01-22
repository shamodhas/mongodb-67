import express from 'express';
import customerRoutes from "./routes/customer-routes";
import mongoose from 'mongoose';

const app = express();

mongoose.connect("mongodb://localhost:27017/customerCrud")
const db = mongoose.connection

db.on("error",(error)=>{
    console.error("DB connection error : ",error)
})

db.on("open",()=>{
    console.log("DB connected successfully")
})

app.use(express.json());
app.use('/',(req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, content-type');

    next();
})
app.use('/customer',customerRoutes);

app.listen(3000, (err=>{
    console.log("Server running on port 3000");
}));

app.use('/',(req,res,next)=>{
    res.status(200).send('Not Found');
})
