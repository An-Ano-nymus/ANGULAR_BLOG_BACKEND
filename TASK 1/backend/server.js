const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const blogRoutes = require('./routes/blog-routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
// mongoose.connect('mongodb+srv://siddhantpatnaik11:1ONDMcBpiHVrXNpZ@cluster0.mbpc3jl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
mongoose.connect('mongodb+srv://raghavultimate92004:Kdv0RXU0UN6hJdHI@an-ano-nymus.0tkl0.mongodb.net/?retryWrites=true&w=majority&appName=An-Ano-nymus')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB', err);
  });

// Routes
app.use('/api/posts', blogRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});