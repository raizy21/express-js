const validateSchema = (schema) => {
  return async (req, res, next) => {
    try {
      await schema[req.method].validateAsync(req.body);
      next();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
};

export default validateSchema;
