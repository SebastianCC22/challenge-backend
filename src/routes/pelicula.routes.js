import { Router } from "express";
import {
  getPeliculasSeries,
  createPeliculasSeries,
  getPeliculaSerieById,
  updatePeliculasSeries,
  deletePeliculaSerie
} from "../controllers/pelicula.controller.js";
const router = Router();

router.get("/movies", getPeliculasSeries);
router.post("/movies", createPeliculasSeries);
router.put("/movies/:id", updatePeliculasSeries);
router.delete("/movies/:id", deletePeliculaSerie);
router.get("/movies/:id", getPeliculaSerieById);

export default router;
