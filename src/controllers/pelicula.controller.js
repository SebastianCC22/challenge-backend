import { PeliculaSerie } from "../models/Pelicula.Serie.js";

export const getPeliculasSeries = async (req, res) => {
  const { title, order } = req.query;

  try {
    const peliculasSeries = await PeliculaSerie.findAll();

    if (title) {
      const peliculasByName = peliculasSeries.filter((e) =>
        e.title.toLowerCase().includes(title.toLowerCase())
      );
      peliculasByName.length
        ? res.status(200).json(peliculasByName)
        : res.status(404).send("No se encontraron peliculas");
    } else if (order){
        if(order == 'asc'){
            const peliculasOrdenadas = peliculasSeries.sort((a, b) => a.title.localeCompare(b.title));
            res.status(200).json(peliculasOrdenadas);
        }else if(order == 'desc'){
            const peliculasOrdenadas = peliculasSeries.sort((a, b) => b.title.localeCompare(a.title));
            res.status(200).json(peliculasOrdenadas);
        }else{
            res.status(400).send("El orden debe ser asc o desc");
        }
    } else {
      const allPeliculasSeries = peliculasSeries.map((e) => {
        return {
          title: e.title,
          dateOfLaunch: e.dateOfLaunch,
        };
      });
      res.status(200).json(allPeliculasSeries);
    }
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

export const createPeliculasSeries = async (req, res) => {
  const { title, dateOfLaunch, rating, personajeAsociado, generoAsociado } =
    req.body;
  try {
    const newPeliculaSerie = await PeliculaSerie.create({
      title: title,
      dateOfLaunch: dateOfLaunch,
      rating: rating,
      personajeAsociado: personajeAsociado,
      generoAsociado: generoAsociado,
    });
    res.status(201).json(newPeliculaSerie);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

export const getPeliculaSerieById = async (req, res) => {
  const { id } = req.params;
  try {
    if (id) {
      const peliculaSerie = await PeliculaSerie.findByPk(id);
      return res.status(200).json(peliculaSerie);
    }
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

export const updatePeliculasSeries = async (req, res) => {
  const { title, dateOfLaunch, rating } = req.body;
  const { id } = req.params;
  try {
    const peliculaSerie = await PeliculaSerie.findByPk(id);
    if (!peliculaSerie) {
      return res.status(404).json({ message: "Pelicula no encontrada" });
    }
    await peliculaSerie.update({
      title: title,
      dateOfLaunch: dateOfLaunch,
      rating: rating,
    });
    res.status(200).json(peliculaSerie);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

export const deletePeliculaSerie = async (req, res) => {
  const { id } = req.params;
  try {
    const peliculaSerie = await PeliculaSerie.findByPk(id);
    if (!peliculaSerie) {
      return res.status(404).json({ message: "Pelicula no encontrada" });
    }
    await peliculaSerie.destroy();
    res.status(200).json({ message: "Pelicula eliminada" });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
