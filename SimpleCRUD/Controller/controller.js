import express from "express"
import mongoose from "mongoose";
import repo from "../Repository/repository.js";

const app = express();
const PORT = 8001;
const DB_URL = 27017;

app.use(express.json());

mongoose.connect("mongodb://localhost:" + DB_URL);

app.get('/', (req, res) => {
    res.json("Connected successfully");
})

app.post('/create', (req, res) => {
    const post = repo.create(req.body);
    post
    .then((result) => {
        res.json(result);
    })
    .catch((error) => {
        console.log("ERROR: " + error);
    })
})

app.get('/read', (req, res) => {
    const post = repo.read(req.body);
    post
    .then((result) => {
        res.json(result);
    })
    .catch((error) => {
        console.log("ERROR: " + error);
    })
})

app.patch('/update', (req, res) => {
    const post = repo.update(req.body);
    post
    .then((result) => {
        res.json(result);
    })
    .catch((error) => {
        console.log("ERROR: " + error);
    })
})

app.delete('/delete/:id', (req, res) => {
    repo.delete(req.params.id);
    res.json("The item was deleted");
})


app.listen(PORT, () => {
    console.log("Server is listening to port " + PORT);
})