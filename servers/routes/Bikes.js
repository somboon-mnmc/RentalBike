const express = require('express')
const router = express.Router()
const bikes = require('../models/Bikes')

router.get('/', async (req, res) => {
    try {
        const bikesList = await bikes.find()
        res.status(200).json(bikesList)
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' })
    }
})


router.get('/:id', async (req , res) => {
    try {
        const bike = await bikes.findById(req.params.id);
    if(!bike) {
        res.status(404).json({error: 'user not found'})
    }
    res.status(200).json(bike)
    }
    catch (error) {
        res.status(500).json({error: 'Internal Server Error'})
    }
})

// router.get('/:id', async (req, res) => {
//     try {
//         const bike = await bikes.findById(req.params.id);
//         if (!bike) {
//             return res.status(404).json({ error: 'Bike not found' });
//         }
//         res.json(bike);
//     } catch (error) {
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });

module.exports = router
