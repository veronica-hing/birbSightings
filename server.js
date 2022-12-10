require("./server/config/mongoose.config");

const express = require("express");
const cors = require('cors');
const app = express();
const port = 8000;

// make sure these lines are above any app.get or app.post code blocks
app.use(cors());
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

//comment out until file is made.
require("./server/routes/sighting.routes")(app);
// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );