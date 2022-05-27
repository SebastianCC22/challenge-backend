import { Router } from "express";
import {
  createPersonajes,
  getPersonajes,
  getPersonajeById,
  editPersonaje,
  deletePersonaje
} from "../controllers/personaje.controller.js";
const router = Router();

router.get("/characters", getPersonajes);
router.post("/characters", createPersonajes);
router.put("/characters/:id", editPersonaje);
router.delete("/characters/:id", deletePersonaje);
router.get("/characters/:id", getPersonajeById);

export default router;
