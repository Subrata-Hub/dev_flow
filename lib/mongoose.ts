import mongoose from "mongoose";

let isConnected:boolean = false


export const connectToDatabase = async () => {
    mongoose.set('strictQuery', true)

    if (!process.env.MONGODB_URL){
        return 
    }

    if (isConnected){
        return 
    }

    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            dbName: 'Devflow'
        })

        isConnected = true
        
        
    } catch (error) {
        console.log('Mongodb connection failed', error)
        
    }
}