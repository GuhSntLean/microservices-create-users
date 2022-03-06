const express = require("express");
const cors = require("cors")
const app = express();

const routes = require("./routes");
const port = 3001 | process.env.PORT

require("./database");

app.use(express.json());
app.use(cors())

app.use(routes);

app.listen(port, () => console.log(`App online on port ${port}`));
