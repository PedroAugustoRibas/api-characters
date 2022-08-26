import express from 'express'
import CharacterController from '../controller/character.controller.js'

const routes = express.Router()
const controller = new CharacterController
console.log(controller.create())
routes.get('/characters', (req, res)=>{
    console.log("characters")
})


export default routes