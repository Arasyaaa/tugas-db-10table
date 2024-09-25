import { DataTypes } from "sequelize";
import db from "../utils/connection.js";

const Kategori = db.define(
  "Kategori",
  {
    id_kategori: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nama_kategori: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "kategori"
  }
);

export default Kategori;