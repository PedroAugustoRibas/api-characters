import Aplication from './src/config/Aplication.js';
import Database from './src/config/Database.js';


const app = new Aplication()
const database = new Database()


try {
    app.startAplication(database.startConnection())
} catch (error) {
    database.closeConnection()
    console.log(error)
}





