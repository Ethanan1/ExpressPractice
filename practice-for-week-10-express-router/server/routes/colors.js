const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    res.json("GET /colors")
})

router.get('/:name', async (req, res) => {
    const { name } = req.params;
    res.json(`GET /colors/:${name}`)
})

module.exports = router;
