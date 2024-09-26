const express = require('express');
const router = express.Router();
const {validateSignUpRequest, validateSignInRequest, isRequestValidated} = require('../validators/auth')
const {signUp, signIn} = require('../controller/auth');
router.route('/signin').post(validateSignInRequest,isRequestValidated,signIn);
router.route('/signup').post(validateSignUpRequest,isRequestValidated,signUp);  
module.exports = router;
