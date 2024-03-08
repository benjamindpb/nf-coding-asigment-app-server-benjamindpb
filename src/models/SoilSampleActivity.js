import { DataTypes } from 'sequelize';
import sequelize from "../database/database.js";

export const SoilSampleActivity  = sequelize.define('soil', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  coords: {
    type: DataTypes.GEOMETRY('POINT', 4326),
    allowNull: false,
  },
  carbonMeasurement: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  activityDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});
