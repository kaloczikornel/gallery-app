const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors({
    origin: 'https://gallery-app-wheat.vercel.app'
}));
app.get("/", (req, res) => res.send("Express on Vercel"));

app.listen(5000, () => console.log("Server ready on port 5000."));