const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        msg: "Show all bootcamps"
    })
})
router.get('/:id', (req, res) => {
    res.status(200).json({
        success: true,
        msg: `Show ${req.params.id} bootcamp `
    })
})

router.post('/', (req, res) => {
    res.status(200).json({
        success: true,
        msg: "Create new bootcamp"
    })
})

router.put('/:id', (req, res) => {
    res.status(200).json({
        success: true,
        msg: `Updated a ${req.params.id} bootcamp`
    })
})

router.delete('/:id', (req, res) => {
    res.status(200).json({
        success: true,
        msg: `Bootcamp ${req.params.id} has been deleted`
    })
})

module.exports = router;