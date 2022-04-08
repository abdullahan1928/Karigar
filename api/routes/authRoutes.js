const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/auth/authControllers');
// For validating data
const Joi = require("joi");
const myCustomJoi = Joi.extend(require('joi-phone-number'));
const validator = require('express-joi-validation').createValidator({});
// Calling the middleware 
const auth = require('../middleware/auth');

  
const registerSchema = Joi.object({
   username:Joi.string().min(3).max(12).required(),
   name:Joi.string().min(3).max(30).required(),
   phone:myCustomJoi.string().phoneNumber({ defaultCountry: 'PK', format: 'e164' }).required(),
   password:Joi.string().min(6).max(12).required(),
   mail : Joi.string().email().required(),
})

const loginSchema = Joi.object({
  password:Joi.string().min(6).max(12).required(),
   mail : Joi.string().email().required(),
})


router.post('/register',validator.body(registerSchema),authControllers.controllers.postRegister)
router.post('/login',validator.body(loginSchema),authControllers.controllers.postLogin);


// testing route to verify for the token JWT token (Bearer)
router.get('/test',auth,(req,res)=>{
   res.status(201).send('Request Passed')
});

module.exports = router;