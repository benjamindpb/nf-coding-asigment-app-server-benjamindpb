import { DataTypes } from 'sequelize';
import sequelize from "../database/database.js";

export const FertilizationAreaActivity  = sequelize.define('fertilization', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  polygonPoints: {
    type: DataTypes.GEOMETRY('POLYGON'),
    allowNull: false,
  },
  fertilizerApplied: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  activityDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});
