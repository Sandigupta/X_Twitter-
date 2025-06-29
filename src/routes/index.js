import express from 'express';
const router = express.Router();

import V1Routes from './v1/index.js'

const app = express();
router.use('/v1', V1Routes);

export default router;