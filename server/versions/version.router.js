const express = require("express");
const router = express.Router();
const NotesModal = require("../models/notes.model"); 

router.get("/notes", async (req, res) => {
    const test = await NotesModal.find({user: "vguleria1108@gmail.com"})
    console.log({test})
    res.status(200).send({ status: "success", message: "API is working fine." ,test});
});

router.post("/notes", async (req, res) => {
    const params = req.params;
    const queryParams = req.query;
    const bodyParams = req.body;
    const request = { ...params, ...queryParams, ...bodyParams };
    console.log({request})
    const queryInfo = await NotesModal.create(request)
    res.status(200).send({ status: "success", message: "API is working fine." ,queryInfo});
});

router.put("/notes", async (req, res) => {
    const params = req.params;
    const queryParams = req.query;
    const bodyParams = req.body;
    const request = { ...params, ...queryParams, ...bodyParams };
    console.log({request})
    const queryInfo = await NotesModal.updateOne({_id: request['id']},{title: request['title'], description: request['description']})
    res.status(200).send({ status: "success", message: "API is working fine." ,queryInfo});
});
 
router.get("/", function (req, res) {
    res.status(200).send({ status: "success", message: "API is working fine." });
});

module.exports = router;