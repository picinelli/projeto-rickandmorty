import joi from "joi";

export const characterSchema = joi.object({
  id: joi.number().required(),
  name: joi.string().required(),
  status: joi.string().required(),
  species: joi.string().required(),
  gender: joi.string().required(),
  type: joi.string().allow(""),
  origin: joi.object().required(),
  location: joi.object().required(),
  image: joi.string().required(),
  episode: joi.array().required(),
  url: joi.string().required(),
  created: joi.date().required(),
});
