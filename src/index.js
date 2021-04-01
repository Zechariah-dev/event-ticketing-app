const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

//.initialzae express app
const app = express();

const port = process.env.PORT || 2222;

app.listen(port, () => {
    console.log(`Server up and running on port ${port}`);
})
