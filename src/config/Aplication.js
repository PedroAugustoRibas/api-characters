import express from "express";
import routes from '../routes/index.js'
import cors from 'cors'


export default class Aplication{
    constructor(){
        this.aplication = express()
    }
    startAplication(callback=()=>{}) {
        this.aplication.use(cors())
        this.aplication.use(routes)
        this.aplication.listen(8081)
        callback()
    } 

}
