const Joi = require("joi");

const login = Joi.object({
    email: Joi.string().min(4).required().email(),
})


module.exports = {
    login
}