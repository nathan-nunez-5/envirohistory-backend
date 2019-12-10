const express = require('express');
const router = express.Router();
const URL = require('url').URL;
const fetch = require('node-fetch');

const GOOGLE_CUSTOM_SEARCH_API_URL =
  'https://www.googleapis.com/customsearch/v1?';
const GOOGLE_CUSTOM_SEARCH_API_KEY = 'AIzaSyB09RX3f33e5qFL0tjjptIXLlI2VOjv_Lc';
const CUSTOM_SEARCH_ENGINE_ID = '012399205167094491174:bylu6wpfbyk';

const OPENFEMA_API_URL = 'https://www.fema.gov/api/open/v2/DisasterDeclarationsSummaries';
const DISASTER_DECLARATIONS_SUMMARIES = "DisasterDeclarationsSummaries";
const INCIDENT_BEGIN_DATE = "incidentBeginDate";
const INCIDENT_END_DATE = "incidentEndDate";
const DECLARATION_DATE = "declarationDate";

const MIN_NUM_RESULTS = 5;

const searchParams = {
  key: GOOGLE_CUSTOM_SEARCH_API_KEY,
  cx: CUSTOM_SEARCH_ENGINE_ID,
  q: ''
};

const FEMAParams = {
  format: 'json',
};

// @route   POST api/search
// @desc    Create a search
// @access  Public
router.post('/', async (req, res) => {
  try {
    searchParams['q'] = req.body.searchQuery;
    let fetchUrl = new URL(GOOGLE_CUSTOM_SEARCH_API_URL);
    Object.keys(searchParams).forEach((key) =>
      fetchUrl.searchParams.append(key, searchParams[key])
    );

    const fetched = await fetch(fetchUrl.toString());
    const data = await fetched.json();

    console.log(data);
    return res.json(data);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

const createDateString = (date) => {
  let dateString = ('0' + (date.getMonth() + 1)).slice(-2)
                     + '-'
                     + ('0' + date.getDate()).slice(-2);
  return dateString;
} 

// @route   GET api/search/today
// @desc    Get data associated with today's date
// @access  Public
router.get('/today', async (req, res) => {
  try {
    let fetchUrl = new URL(OPENFEMA_API_URL);

    Object.keys(FEMAParams).forEach((key) =>
      fetchUrl.searchParams.append(key, FEMAParams[key])
    );

    const fetched = await fetch(fetchUrl.toString());
    const data = await fetched.json();

    let d = new Date();
    let dateString = createDateString(d);

    let filteredData = [];

    while (filteredData.length < MIN_NUM_RESULTS) {
      for (const entry of data[DISASTER_DECLARATIONS_SUMMARIES]) {
        if (entry[INCIDENT_BEGIN_DATE].includes(dateString)
            || entry[INCIDENT_END_DATE].includes(dateString)
            || entry[DECLARATION_DATE].includes(dateString)) {
          filteredData.push(entry);
        }
      }

      d.setDate(d.getDate() + 1);
      dateString = createDateString(d);
    }

    return res.json(filteredData);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
