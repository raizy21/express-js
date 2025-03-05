import User from "../models/User.js";
import Note from "../models/Note.js";

User.hasMany(Note, {
  foreignKey: "userId",
  as: "notes",
  onDelete: "CASCADE",
});

Note.belongsTo(User, {
  foreignKey: "userId",
  as: "user",
});
