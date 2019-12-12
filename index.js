const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

// Enable CORS
app.use(cors({}));

// Initialize Middleware
app.use(express.json({ extended: false }));

app.use(express.static('envirohistory-frontend/build'));

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

// Routes
app.use('/api/search', require('./routes/api/search'));

if (process.env.NODE_ENV == 'production') {
  console.log('In production mode...\n');
  app.get('*', (req, res) => {
    res.sendFile(
      path.join(__dirname + '/envirohistory-frontend/build/index.html')
    );
  });
}

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});

app.use('/assets', express.static('assets'));
