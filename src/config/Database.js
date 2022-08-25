
import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
const { MONOGODB_URI } = process.env;

export default class Database {
    constructor(){
        this.mongoose = mongoose
    }
    startConnection() {
       this.mongoose.connect(MONOGODB_URI)
       .then(() => console.log("Database connected!"))
       .catch(err => console.log(err));
    } 
    closeConnection(){
        this.mongoose.connection.close()
        .then(() => console.log("Closed database!"))
        .catch(err => console.log(err));
    }  

}