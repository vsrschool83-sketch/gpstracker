const express = require("express");

const app = express();

app.get("/", (req,res)=>{
    res.send("GPS API Running");
});

app.get("/gps",(req,res)=>{
    const lat=req.query.lat;
    const lng=req.query.lng;

    console.log("Latitude:",lat);
    console.log("Longitude:",lng);

    res.send("GPS Received");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log("Server running on port "+PORT);
});
