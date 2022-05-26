import { DataTypes } from 'sequelize';
import { sequelize } from '../database/db.js';

 export const PeliculaSerie = sequelize.define('peliculaSerie' , {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dateOfLaunch: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

// PeliculaSerie.hasMany(Genero, {
//     foreignKey: 'peliculaAsociada',
//     sourceKey: 'id'
// })

// Genero.belongsTo(PeliculaSerie, {
//     foreignKey: 'peliculaAsociada',
//     targetId: 'id'
// })

// PeliculaSerie.hasMany(Personaje, {
//     foreignKey: 'peliculaAsociada',
//     sourceKey: 'id'
// })

// Personaje.belongsTo(PeliculaSerie, {
//     sourceKey: 'peliculaAsociada',
//     targetId: 'id'
// })