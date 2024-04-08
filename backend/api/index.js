const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors({
    origin: 'https://backend-phi-three-73.vercel.app/'
}));
app.get("/", (req, res) => res.send("Express on Vercel"));

app.listen(5000, () => console.log("Server ready on port 5000."));