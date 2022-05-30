const Orders = require("../../models/orders");
const { validationResult } = require('express-validator');

exports.orderNow = async (req, res) => {
    try {

        
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }


        const order = await new Orders({
            subserviceId: req.body.subserviceId, 
            // totalPrice: req.body.totalPrice, 
            instructions: req.body.instructions, 
            address: req.body.address,
            user: req.user.userId
        });

        res.send('Order stored successfully');
        await order.save().catch(err => console.log(err));




    } catch (error) {
        return res.status(500).send("Something went wrong Please try again")        
    }
}