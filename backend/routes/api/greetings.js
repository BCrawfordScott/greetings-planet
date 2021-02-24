const express = require('express');
const { check } = require('express-validator');
const asyncHandler = require('express-async-handler');

const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Greeting } = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const greetings = await Greeting.findAll();
    res.json({greetings});
}));

router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
    const greeting = await Greeting.findByPk(req.params.id);
    res.json({greeting});
}));

module.exports = router;
