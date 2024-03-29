import express from 'express';
import dotenv from 'dotenv';
import cardRouter from './routes/cards.js';
import errorHandler from './middleware/error.js';

dotenv.config({ path: './config/.env.local' });

const app = express();

// MIDDLEWARE
app.use(express.json());

// ROUTES
app.use('/api/v1/cards', cardRouter);

// ERROR HANDLER
app.use(errorHandler)

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port: ${PORT}`));
