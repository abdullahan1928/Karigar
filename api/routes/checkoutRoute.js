const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const postOrder = require('../controllers/Orders/postOrder');
const auth = require('../middleware/auth');



//ROUTE 2: creating a new note of the USER WHO IS LOGGED IN    localhost/api/notes/new-note,    AUTHENTICATION/LOGIN REQUIRED
router.post('/checkout', auth, [
    // body('subserviceId').not().isEmpty().withMessage('Subservice is required'),    
    body('instructions').not().isEmpty().withMessage('Instructions is required, MIN: 5').isLength({ min: 5 }),
    // body('totalPrice').not().isEmpty().withMessage('Total price is required'),
    body('address').not().isEmpty().withMessage('Address is required').isLength({ min: 5 }), 

], postOrder.orderNow);


module.exports = router;