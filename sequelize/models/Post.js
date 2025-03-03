import { DataTypes } from "sequelize";
import sequelize from "../db/index.js";

const Blog = sequelize.define("Blog", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  body: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
  }
});

Blog.sync();

export default Blog;
