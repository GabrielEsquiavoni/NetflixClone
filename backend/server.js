// const express = require('express); // CommonJS
import express from 'express'; // esm

import authRoutes from './routes/auth.route.js';
import { ENV_VARS } from './config/envVars.js';
import { connectDB } from './config/db.js';

const app = express();

const PORT = ENV_VARS.PORT;

app.use(express.json()); // permite req.body

app.use("/api/v1/auth", authRoutes)

app.listen(PORT, () => {
  console.log('server is listening at http://localhost:' + PORT);
  connectDB()
});

