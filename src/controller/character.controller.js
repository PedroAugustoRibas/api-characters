import CharacterRepository from "../repository/character.repository.js";


export default class CharacterController {
    constructor(){
        this.repository = new CharacterRepository
    } 

    create(){
        this.repository.create()
    }
}