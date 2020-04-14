const Joi = require('joi');

const Property = {
    short_description: Joi.string().required().min(5).max(250),
    long_descrption: Joi.string().required().min(20),
    number_of_bedroom: Joi.number(),
    number_of_bathroom: Joi.number(),
    number_of_garage: Joi.number()
}

function validateProperty(propertyRequest) {
    return Joi.validate(propertyRequest, Property);
}

module.exports.Property = Property;
module.exports.validateProperty = validateProperty;