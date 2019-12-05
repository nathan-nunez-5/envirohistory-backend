const express = require('express');
const router = express.Router();

// @route   POST api/search
// @desc    Create a search
// @access  Private
router.post('/', async (req, res) => {
  console.log('Submitting Search...');
});

module.exports = router;
