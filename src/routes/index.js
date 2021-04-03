import express from 'express';

import category from './category.route';

const routes = express();

routes.use('/category', category);

export default routes;