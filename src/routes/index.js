import express from 'express';

import category from './category.js';

const route = express.Router();

route.use('/category', category);

export default route;