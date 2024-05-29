// app.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const candidateRoutes = require('./routes/candidate');

mongoose.connect('mongodb+srv://testing:Password123@recruit-crmassign.lunp2kx.mongodb.net/?retryWrites=true&w=majority&appName=Recruit-CRMassign', { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();
app.use(bodyParser.json());

app.use('/api', authRoutes);
app.use('/api', candidateRoutes);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
