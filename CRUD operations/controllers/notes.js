import Note from "../models/Note.js";

export const getNotes = async (req, res) => {
  try {
    const notes = await Note.findAll({ include: "user" });
    res.json(notes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createNote = async (req, res) => {
  try {
    const {
      body: { userId, content },
    } = req;

    if ((!userId, !content)) {
      return res
        .status(400)
        .json({ error: "Some required fields are missing" });
    }

    const note = await Note.create({ userId, content });
    res.status(201).json(note);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getNoteById = async (req, res) => {
  try {
    const { id } = req.params;

    const note = await Note.findByPk(id, {
      include: "user",
    });
    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const updateNote = async (req, res) => {
  try {
    const {
      body: { userId, content },
      params: { id },
    } = req;
    if (!content) return res.status(400).json({ error: "Content is required" });
    const note = await Note.findByPk(id);
    if (!note) return res.status(404).json({ error: "Note not found" });
    await note.update({ userId, content });
    res.json(note);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteNote = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const note = await Note.findByPk(id);
    if (!note) return res.status(404).json({ error: "Note not found" });
    await note.destroy();
    res.json({ message: "Note deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
