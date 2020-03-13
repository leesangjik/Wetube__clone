const express = require('express');
const app = express();

const PORT = 4000;

function handleListening(){
    console.log(`listening on: http://localhost:${PORT}`);
}

function handleHome(req, res){
    res.send("Hello Lee");
}

function handleProfile(req, res){
    res.send("U r on my profile");
}

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);