import posts from "./tuits.js";
import {v5 as uuid} from "uuid";
let tuits = posts;

const findTuits = (req, res) => res.json(tuits)
const createTuit = (req, res) => {
    const newTuit = req.body
    const MY_NAMESPACE = '1b671a64-40d5-491e-99b0-da01ff1f3341';
    newTuit._id =  uuid(Date.now().toString(),MY_NAMESPACE)
    newTuit.likes = 0
    newTuit.dislikes = 0
    newTuit.liked = false
    newTuit.image = "tesla.png"
    newTuit.title = newTuit.tuit;
    newTuit.topic = "Tuiter to the moon"
    newTuit.userName = "Nasa"
    newTuit.time = "2h"
    tuits.push(newTuit)
    res.json(newTuit)
}

const updateTuit = (req, res) => {
    const tuitdId = req.params.tid;
    const updates = req.body;
    const tuitIndex = tuits.findIndex((t) => t._id.toString() === tuitdId.toString())
    tuits[tuitIndex] = {...tuits[tuitIndex], ...updates};
    res.sendStatus(200);
}

const deleteTuit = (req, res) => {
    const tuitIdToDelete = req.params.tid;
    console.log("Recieved Tuit deletion request for tuit :")
    console.log(tuitIdToDelete)
    tuits = tuits.filter((t) => t._id.toString() !== tuitIdToDelete.toString());
    console.log(tuits)
    res.sendStatus(200);
}


export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}

