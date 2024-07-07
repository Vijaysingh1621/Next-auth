import mongoose from 'mongoose'

const connectDB= async ()=>{
    try{
        
        await mongoose.connect('mongodb://127.0.0.1:27017/vijayDB');
        console.log("connected to mongoDB")
        

    }catch(error){
        console.error(`ERROR is:${error.message}`);
        process.exit(1)

    }
};

export default connectDB;