import express from 'express';
import { connectToDatabase } from './config/database';

const app = express();
const port = 8000;

app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', service: 'octofit-tracker-backend' });
});

connectToDatabase()
  .then(() => {
    app.listen(port, () => {
      console.log(`OctoFit Tracker backend listening on port ${port}`);
    });
  })
  .catch((error: unknown) => {
    console.error('Failed to start OctoFit Tracker backend:', error);
    process.exit(1);
  });
