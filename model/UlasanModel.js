import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
import Pelanggan from "./PelangganModel.js";

const Ulasan = db.define(
  "Ulasan",
  {
    id_ulasan: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    komentar: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tanggal_ulasan: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "ulasan"
  }
);

Ulasan.hasMany(Pelanggan, {foreignKey: "ulasan_id"});
Pelanggan.belongsTo(Ulasan, {foreignKey: "ulasan_id"});

export default Ulasan;