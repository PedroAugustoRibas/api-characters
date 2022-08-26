import mongoose from "mongoose";
import { Character } from "../domain/character.domain.js";

const character_schema = mongoose.Schema({
    name: String,
    age: String 
});

character_schema.loadClass(Character)
export default mongoose.model('Character',character_schema)

