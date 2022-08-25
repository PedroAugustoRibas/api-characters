import express from 'express'

const routes = express.Router()

routes.get('/characters', (req, res)=>{
    console.log("characters")
})


export default routes