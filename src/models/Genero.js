import { DataTypes } from 'sequelize';
import { sequelize } from '../database/db.js';

 export const Genero = sequelize.define('genero' , {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

// Genero.hasMany(PeliculaSerie, {
//     foreignKey: 'generoAsociado',
//     sourceKey: 'id'
// })

// PeliculaSerie.belongsTo(Genero, {
//     foreignKey: 'generoAsociado',
//     targetId: 'id'
// })