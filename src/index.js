const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.send("Hello Github Actions")
});

app.listen(process.env.PORT || 5000, () => {
    console.log("Server is running");
})


module.exports = app;