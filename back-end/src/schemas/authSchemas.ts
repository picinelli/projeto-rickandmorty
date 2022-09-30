import joi from "joi";

export const signupSchema = joi.object({
  name: joi.string().min(5).required(),
  password: joi.string().min(5).required(),
  passwordConfirmation: joi.ref("password"),
});

export const signinSchema = joi.object({
  name: joi.string().min(5).required(),
  password: joi.string().min(5).required(),
});
