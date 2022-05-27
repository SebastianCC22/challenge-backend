import express from "express";
import morgan from "morgan";
import personajesRoutes from './routes/personaje.routes.js';

const app = express();

app.use(morgan("dev"))

//middlewares
app.use(express.json())

app.use(personajesRoutes)

export default app;