import User from "../models/User.js";

export const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createUser = async (req, res) => {
  try {
    const {
      body: { firstName, lastName, email, age },
    } = req;

    if (!firstName || !lastName || !email || age === undefined) {
      return res
        .status(400)
        .json({ error: "Some required fields are missing" });
    }

    const user = await User.create({ firstName, lastName, email, age });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByPk(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
