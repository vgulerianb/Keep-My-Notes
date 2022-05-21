const express = require("express");
const router = express.Router();
const NotesModal = require("../models/notes.model"); 

router.get("/notes", async (req, res) => {
    const test = await NotesModal.find()
    console.log({test})
    res.status(200).send({ status: "success", message: "API is working fine." });
});

router.get("/", function (req, res) {
    res.status(200).send({ status: "success", message: "API is working fine." });
});

module.exports = router;