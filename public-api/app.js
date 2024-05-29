// app.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const publicRoutes = require('./routes/public');

mongoose.connect('mongodb+srv://testing:Password123@recruit-crmassign.lunp2kx.mongodb.net/?retryWrites=true&w=majority&appName=Recruit-CRMassign', { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();
app.use(bodyParser.json());

app.use('/api', publicRoutes);

app.listen(4000, () => {
  console.log('Public API running on port 4000');
});
