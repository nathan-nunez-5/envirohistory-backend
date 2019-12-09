const express = require('express');
const cors = require('cors');

const app = express();

// Initialize Middleware
app.use(express.json({ extended: false }));

// Enable CORS
app.use(cors({}));

// Routes
app.use('/api/search', require('./routes/api/search'));

app.get('/', (req, res) => res.send('API Running...'));

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`listening on ${port}`);
});

app.use('/assets', express.static('assets'));
