const express = require('express');

const dotenv = require('dotenv');

dotenv.config();

//.initialzae express app
const app = express();

app.listen(port, () => {
    console.log(`Server up and running on port ${port}`);
})
