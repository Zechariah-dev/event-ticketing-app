import express, { urlencoded, json } from 'express';
import cors  from "cors";
import logger from 'morgan';
import session from 'express-session';
import { config } from 'dotenv';

// import route from './routes';
import connectDB from './config/db.js';

config();

connectDB();

const { PORT, SESSION_SECRET } = process.env;

//.initialzae express app
const app = express();

app.use(
    session({
        secret: SESSION_SECRET,
        resave: true,
        saveUninitialized: true        
    })
);
app.use(cors());
app.use(logger('dev'));
app.use(json());
app.use(urlencoded({extended: false}));


app.get('/', (req, res) => {
    res.status(200).send('Welcome to my event ticketing api');
});

app.use('*', (req, res) => {
    res.status(404).send('Not found');
});

app.listen(PORT, () => {
    console.log(`Server up and running on port ${PORT}`);
});


export default app;