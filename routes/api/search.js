const express = require('express');
const router = express.Router();

const GOOGLE_CUSTOM_SEARCH_API_URL = "https://www.googleapis.com/customsearch/v1?";
const GOOGLE_CUSTOM_SEARCH_API_KEY = "AIzaSyB09RX3f33e5qFL0tjjptIXLlI2VOjv_Lc";
const CUSTOM_SEARCH_ENGINE_ID = "012399205167094491174:bylu6wpfbyk";
const OPENFEMA_API_URL = "/api/open";

const searchParams = {
  key: GOOGLE_CUSTOM_SEARCH_API_KEY,
  cx: CUSTOM_SEARCH_ENGINE_ID,
  q: ""
};

const FEMAParams = {
  format: "json",
  filter: ""
};

// @route   POST api/search
// @desc    Create a search
// @access  Public
router.post('/', async (req, res) => {
  console.log('Submitting Search...');

  searchParams[q] = req.body.q;

  let fetchUrl = new URL(GOOGLE_CUSTOM_SEARCH_API_URL);
  Object.keys(searchParams).forEach(key => fetchUrl.searchParams.append(key, searchParams[key]));

  const fetched = await fetch(fetchUrl.toString());
  const data = await fetched.json();

  return res.json(data);
});

// @route   GET api/search/today
// @desc    Get data associated with today's date
// @access  Public
router.get('/today', (req, res) => {  
  var d = new Date();

  dateString = ('0' + (MyDate.getMonth() + 1)).slice(-2)
             + ('0' + MyDate.getDate()).slice(-2);

  FEMAParams[filter] = "endswith(declarationDate,'" + dateString + "')";

  let fetchUrl = new URL(OPENFEMA_API_URL);
  Object.keys(FEMAParams).forEach(key => fetchUrl.searchParams.append(key, FEMAParams[key]));

  const fetched = await fetch(fetchUrl.toString());
  const data = await fetched.json();

  return res.json(data);
});

module.exports = router;
