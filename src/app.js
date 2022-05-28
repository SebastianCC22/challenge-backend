import express from "express";
import morgan from "morgan";
import personajesRoutes from './routes/personaje.routes.js';
import peliculasRoutes from './routes/pelicula.routes.js';

const app = express();

app.use(morgan("dev"))

//middlewares
app.use(express.json())

app.use(personajesRoutes)
app.use(peliculasRoutes)

export default app;