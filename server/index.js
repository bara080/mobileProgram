//  entry point for back end
// server/index.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const databaseConfig = require('./config/database');
const goalRoutes = require('./routes/goalRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(databaseConfig.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

// Routes
app.use('/api', goalRoutes);

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
