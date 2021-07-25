/// Imports
import { config } from "dotenv";
import cors from "cors";
import express from "express";

/// Call config function from "dotenv"
config();

/// Creating constraints
const api = express();
const { PORT } = process.env;

/// Third, enable CORS
api.use(cors());

/// Second, create paths inside the server, api response 

api.get('/', (req, res) => {
    res.send("API's Home. Everything is ok!");
});

api.get('/frontend', (req, res) => {
    res.json({title: "React", hours: "10"})
})


/// First , create server and instruct how to shutdown
api.listen(PORT, () => {
    console.log(`Server running on: http://localhost:${PORT}`);
    console.log(`Shutdown: ctrl +c`)
});