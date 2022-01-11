const express = require('express');

const app = express();


const port = 8006;
const DB_URL = 'mongodb+srv://yuchira1:yuchira1999@clusteryja.wbn3u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

app.listen(port, () =>{
    console.log(`App is running on ${port}`);
});