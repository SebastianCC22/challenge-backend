import { Personaje } from "../models/Personaje.js";

export const getPersonajes = async (req, res) => {
  const { name, age, movies } = req.query;

  try {
    const personajes = await Personaje.findAll(); // esto nos devuelve un arreeglo con todos los personajes de la db

    if (name) {
      const personajeByName = personajes
        .filter((e) => e.name.toLowerCase().includes(name.toLowerCase())); // esto nos devuelve un arreeglo con los personajes que coincidan con el nombre que le pasemos
      personajeByName.length
        ? res.status(200).json(personajeByName)
        : res.status(404).send("No se encontraron personajes");
    } else if (age) {
        const personajeByAge = personajes
            .filter((e) => e.age == age); // esto nos devuelve un arreglo con los personajes que coincidan con la edad que le pasemos
        personajeByAge.length
            ? res.status(200).json(personajeByAge)
            : res.status(404).send("No se encontraron personajes");
    } else if (movies) {
        const personajeByMovies = personajes
            .filter((e) => e.peliculaAsociada == peliculaAsociada); // esto nos devuelve un arreglo con los personajes que coincidan con el nombre que le pasemos
        personajeByMovies.length 
            ? res.status(200).json(personajeByMovies)
            : res.status(404).send("No se encontraron personajes");
    } else {
      const allPersonajes = personajes.map((e) => {
        // mapeamos ese arreglo y mostramos los datos necesarios
        return {
          // id: e.id,
          name: e.name,
          age: e.age,
        };
      });
      res.status(200).json(allPersonajes);
    }
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

export const createPersonajes = async (req, res) => {
  const { name, age, weight, history, peliculaAsociada } = req.body;

  try {
    const newPersonaje = await Personaje.create({
      name: name,
      age: age,
      weight: weight,
      history: history,
      peliculaAsociada: peliculaAsociada,
    });

    res.status(201).json(newPersonaje);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getPersonajeById = async (req, res) => {
  const { id } = req.params;

  try {
    if (id) {
      const personaje = await Personaje.findByPk(id);
      return res.status(200).json(personaje);
    }
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

export const editPersonaje = async (req, res) => {
  const { id } = req.params;
  const { name, age, weight, history } = req.body;

  try {
    if (id) {
      const personaje = await Personaje.findByPk(id);
      if (personaje) {
        await personaje.update({
          name: name,
          age: age,
          weight: weight,
          history: history,
        });
        return res.status(200).json(personaje);
      }
    }
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

export const deletePersonaje = async (req, res) => {
  const { id } = req.params;

  try {
    if (id) {
      const personaje = await Personaje.findByPk(id);
      if (personaje) {
        await personaje.destroy();
        return res.status(200).json({ message: "Personaje eliminado" });
      }
    }
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};
