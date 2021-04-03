import express, { urlencoded, json } from 'express';
import { config } from 'dotenv';


config();

//.initialzae express app
const app = express();


app.use(json());
app.use(urlencoded({extended: false}));

const port = process.env.PORT || 2222;

app.use('/api/v1', routes)

app.listen(port, () => {
    console.log(`Server up and running on port ${port}`);
})


export default app;