const express = require("express");
const router = express.Router();
const token = require("../utils/jwtVerifier");
const NotesModal = require("../models/notes.model");

router.get("/notes", token.verifyToken, async (req, res) => {
  const userNotes = await NotesModal.find({ user: req?.token?.["user"] });
  res.status(200).send({
    status: "success",
    message: "API is working fine.",
    notes: userNotes ?? [],
  });
});

router.post("/notes", token.verifyToken, async (req, res) => {
  const params = req.params;
  const queryParams = req.query;
  const bodyParams = req.body;
  const request = { ...params, ...queryParams, ...bodyParams };
  const queryInfo = await NotesModal.create({
    title: request?.["title"] ?? "",
    description: request["description"] ?? "",
    user: req?.token?.["user"],
  });
  if (queryInfo?.user) {
    const userNotes = await NotesModal.find({ user: req?.token?.["user"] });
    res
      .status(200)
      .send({ status: "success", message: "Success.", notes: userNotes ?? [] });
  } else
    res.status(500).send({
      status: "success",
      message: "Unable to add, something went wrong",
      queryInfo,
    });
});

router.put("/notes", token.verifyToken, async (req, res) => {
  const params = req.params;
  const queryParams = req.query;
  const bodyParams = req.body;
  const request = { ...params, ...queryParams, ...bodyParams };
  if (request?.["id"] && request["id"] !== "") {
    const queryInfo = await NotesModal.updateOne(
      { _id: request["id"], user: req.token?.["user"] },
      {
        title: request?.["title"] ?? "",
        description: request?.["description"] ?? "",
      }
    );
    if (queryInfo?.modifiedCount || queryInfo.matchedCount) {
      const userNotes = await NotesModal.find({ user: req?.token?.["user"] });
      res
        .status(200)
        .send({
          status: "success",
          message: "Success.",
          notes: userNotes ?? [],
        });
    } else
      res.status(500).send({
        status: "success",
        message: "Unable to update something went wrong",
        queryInfo,
      });
  } else
    res
      .status(400)
      .send({ status: "error", message: "Id is requered.", queryInfo });
});

router.get("/", function (req, res) {
  res.status(200).send({ status: "success", message: "API is working fine." });
});

module.exports = router;
