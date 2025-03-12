import Joi from "joi";

const userSchema = {
  POST: Joi.object({
    firstName: Joi.string().min(3).max(20).required(),
    lastName: Joi.string().min(3).max(20).required(),
    email: Joi.string().email().required(),
  }),
  PUT: Joi.object({
    firstName: Joi.string().min(3).max(20).optional(),
    lastName: Joi.string().min(3).max(20).optional(),
    email: Joi.string().email().optional(),
  }),
};

export default userSchema;
