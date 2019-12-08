const express = require('express');
const router = express.Router();

const GOOGLE_CUSTOM_SEARCH_API_URL = "https://www.googleapis.com/customsearch/v1?";
const GOOGLE_CUSTOM_SEARCH_API_KEY = "AIzaSyB09RX3f33e5qFL0tjjptIXLlI2VOjv_Lc";
const CUSTOM_SEARCH_ENGINE_ID = "012399205167094491174:bylu6wpfbyk";

const searchParams = {
  key: GOOGLE_CUSTOM_SEARCH_API_KEY,
  cx: CUSTOM_SEARCH_ENGINE_ID,
  q: ""
};

// @route   POST api/search
// @desc    Create a search
// @access  Private
router.post('/', async (req, res) => {
  console.log('Submitting Search...');

  searchParams[q] = req.body.q;

  let fetchUrl = new URL(GOOGLE_CUSTOM_SEARCH_API_URL);
  Object.keys(searchParams).forEach(key => fetchUrl.searchParams.append(key, searchParams[key]));

  const fetched = await fetch(fetchUrl.toString());
  const data = await fetched.json();

  return res.json(data);
});

module.exports = router;
