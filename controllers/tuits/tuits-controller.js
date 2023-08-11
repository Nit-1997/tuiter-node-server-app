import * as tuitsDao from './tuits-dao.js'

const findTuits = async (req, res) => {
    const tuits = await tuitsDao.findTuits()
    res.json(tuits);
}

const createTuit = async (req, res) => {
    const newTuit = req.body
    newTuit.likes = 0
    newTuit.dislikes = 0
    newTuit.liked = false
    newTuit.image = "tesla.png"
    newTuit.title = newTuit.tuit;
    newTuit.topic = "Tuiter to the moon"
    newTuit.userName = "Nasa"
    newTuit.time = "2h"
    const insertedTuit = await tuitsDao.createTuit(newTuit);
    res.json(insertedTuit);
}

const updateTuit = async (req, res) => {
    console.log(req.params.tid);
    console.log(req.body);
    const tuitdId = req.params.tid;
    const updates = req.body;
    const status = await tuitsDao
        .updateTuit(tuitdId, updates);
    res.json(status);
}

const deleteTuit = async (req, res) => {
    const tuitIdToDelete = req.params.tid;
    const status = await tuitsDao.deleteTuit(tuitIdToDelete);
    res.json(status);
}


export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}

