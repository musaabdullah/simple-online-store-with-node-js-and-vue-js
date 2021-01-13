const { Router } = require('express');
const router = Router();
const Card = require('../models/card');

router.get('/card', async (req, res) => {
 
    try {
        
    const values = await Card.create(cards);
    res.json(values);
    } catch (error) {
        res.json(error);
    }

});

router.get('/index', (req, res) => {
  res.render('index.html');
});

module.exports = router;
