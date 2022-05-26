import { DataTypes } from 'sequelize';
import { sequelize } from '../database/db.js';
import { PeliculaSerie } from './Pelicula.Serie.js'
import { Genero } from './Genero.js';

 export const Personaje = sequelize.define('personaje' , {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    weight: {
        type: DataTypes.FLOAT,
        allowNull:false
    },
    history: {
        type: DataTypes.TEXT,
        allowNull: false
    }
})

//Relación entre personaje asociado que tiene una pelicula
Personaje.hasMany(PeliculaSerie, {
    foreignKey: 'personajeAsociado',
    sourceKey: 'id'
})

PeliculaSerie.belongsTo(Personaje, {
    foreignKey: 'personajeAsociado',
    targetId: 'id'
})

//Relación entre pelicula asociada que tiene un genero
PeliculaSerie.hasMany(Genero, {
    foreignKey: 'peliculaAsociada',
    sourceKey: 'id'
})

Genero.belongsTo(PeliculaSerie, {
    foreignKey: 'peliculaAsociada',
    targetId: 'id'
})

//Relación entre pelicula asociada que tiene un personaje
PeliculaSerie.hasMany(Personaje, {
    foreignKey: 'peliculaAsociada',
    sourceKey: 'id'
})

Personaje.belongsTo(PeliculaSerie, {
    sourceKey: 'peliculaAsociada',
    targetId: 'id'
})

//Relación entre genero asociado que tiene una pelicula
Genero.hasMany(PeliculaSerie, {
    foreignKey: 'generoAsociado',
    sourceKey: 'id'
})

PeliculaSerie.belongsTo(Genero, {
    foreignKey: 'generoAsociado',
    targetId: 'id'
})