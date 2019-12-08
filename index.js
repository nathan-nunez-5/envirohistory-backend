const express = require('express');
const cors = require('cors');

const app = express();

const OPENFEMA_API_URL = "/api/open";

const FEMAParams = {
  format: "json",
  filter: ""
};

// Enable CORS
app.use(cors({}));

// Routes
app.use('/api/search', require('./routes/api/search'));

app.get('/', (req, res) => res.send('API Running...'));

app.get('/api/home', (req, res) => {
  res.render('home');
  
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

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`listening on ${port}`);
});

app.use('/assets', express.static('assets'));
