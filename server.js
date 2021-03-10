const express = require('express');
const app = express();

const port = process.env.PORT || 5000; // should different to app.js PORT(client side)

// this catches every route request - every time you change your location bar, this function reacts
// and intercepts the roue request
app.use((req, res, next) => {
    console.log('incoming request');
    console.log(port);

    // next is the original route request ie. /api/users
    next(); // => send the user to the route they requested
})

// use the API route file to handle API routes (/api/users, /api/:user/:id, etc)
app.use("/api", require("./routes/api"));

app.listen(port, () => {
    console.log(`server is running on ${port}`);
})
