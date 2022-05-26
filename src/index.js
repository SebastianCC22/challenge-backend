import colors from 'colors';
import app from "./app.js";
import { sequelize } from "./database/db.js";

import './models/Personaje.js';
import './models/Pelicula.Serie.js';
import './models/Genero.js';

async function main() {
  try {
    await sequelize.sync({force: true})
    app.listen(3000);
    console.log('Server is listening on port 3000'.bgGreen);
  } catch (error) {
      console.log("Conectate a la base de datos".bgRed)
  }
}

main();