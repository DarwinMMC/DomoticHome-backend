import express from 'express';
const app = express();
import router from './routes/temperature';

import morgan from 'morgan';

/** middlewares */
app.use(morgan('dev'));

app.use(router);

export default app;
