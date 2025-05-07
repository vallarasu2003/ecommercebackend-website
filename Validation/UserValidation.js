const joi  = require('joi');
const registervalidation =joi.object({
    email:joi.string().email().required().messages({
        "email.string":"email must be valid "
    }),
    password:joi.string().min(4).required(),
    role:joi.string().valid('Admin', 'company', 'user').optional()

})
const Loginvalidation =joi.object({
    email:joi.string().email().required().messages({
        "email.string":"email must be valid "
    }),
    password:joi.string().min(4).required()
})
const userupdatevalidation =joi.object({
    email:joi.string().email().required().messages({
        "email.string":"email must be valid "
    }),
    password:joi.string().min(4).required(),
    role:joi.string().valid('Admin', 'company', 'user').required()

})
module.exports ={Loginvalidation,registervalidation ,userupdatevalidation}