import CharacterModel from "../models/character.model.js";



export default class CharacterRepository {
    constructor(){
        this.model = CharacterModel
    }

    create(){
        this.model.create({ name: 'Jean-Luc Picard', age:"8"}).then(() => console.log('meow'));
    }
}