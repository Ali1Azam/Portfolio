require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/portfolio';

mongoose.connect(MONGODB_URI)
  .then(() => console.log('✅ Connected to local MongoDB (portfolio database)'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// Basic Schema and Model for Contact Messages (Example)
const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  date: { type: Date, default: Date.now }
});
const Message = mongoose.model('Message', messageSchema);

// Routes
app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to the Portfolio API!' });
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newMessage = new Message({ name, email, message });
    await newMessage.save();
    res.status(201).json({ success: true, message: 'Message saved successfully!' });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server Error' });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
