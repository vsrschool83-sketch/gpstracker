const express = require("express");
const axios = require("axios");

const app = express();

app.get("/", (req,res)=>{
  res.send("GPS API Running");
});

app.get("/gps", async (req,res)=>{

  const lat = req.query.lat;
  const lng = req.query.lng;

  if(!lat || !lng){
    return res.send("Missing coordinates");
  }

  try{

    const firebaseURL = "https://esp32gps-firebase-tracker-default-rtdb.asia-southeast1.firebasedatabase.app/gps.json";

    await axios.put(firebaseURL,{
      latitude:lat,
      longitude:lng,
      time:Date.now()
    });

    res.send("GPS Updated");

  }
  catch(error){

    res.status(500).send("Firebase error");

  }

});

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
  console.log("Server started");
});
