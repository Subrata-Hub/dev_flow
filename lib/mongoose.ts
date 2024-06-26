import mongoose from "mongoose";

let isConnected:boolean = false


export const connectToDatabase = async () => {
    mongoose.set('strictQuery', true)

    if (!process.env.MONGODB_URL){
        return console.log('Missing MongoDB URL')
    }

    if (isConnected){
        return console.log('Mongodb is olready connected')
    }

    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            dbName: 'Devflow'
        })

        isConnected = true
        console.log('MongoDB is connected')
        
    } catch (error) {
        console.log('Mongodb connection failed', error)
        
    }
}