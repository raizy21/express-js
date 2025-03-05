import { DataTypes } from "sequelize";
import sequelize from "../db/index.js";

const Note = sequelize.define("Note", {
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Note.sync({
  logging: false,
});

export default Note;
