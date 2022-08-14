const app = require('../app');

require('dotenv').config({
    path: "../.env"
})

const port = process.env.PORT || 4000;

app.listen(port, ()=> console.log('listening on port ', port))

