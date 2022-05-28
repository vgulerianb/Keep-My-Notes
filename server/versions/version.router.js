const express = require("express");
const router = express.Router();
const token = require("../utils/jwtVerifier");
const NotesModal = require("../models/notes.model");
const axios = require("axios");
const FormData = require("form-data");
const jwt_decode = require("jwt-decode");
const keys = require("../config/keys");
const jwt = require('jsonwebtoken');

router.post("/login", async (req, res) => {
  const params = req.params;
  const queryParams = req.query;
  const bodyParams = req.body;
  const request = { ...params, ...queryParams, ...bodyParams };
  if (request["code"]) {
    try {
      const bodyFormData = new FormData();
      bodyFormData.append("grant_type", "authorization_code");
      bodyFormData.append("code", decodeURIComponent(request["code"]));
      bodyFormData.append(
        "client_secret",
        keys.google.clientSecret
      );
      bodyFormData.append("redirect_uri", keys.google.redirect);
      bodyFormData.append(
        "client_id",
        keys.google.clientId
      );
      const token = await axios({
        url: "https://oauth2.googleapis.com/token",
        method: "post",
        data: bodyFormData,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      if (token?.data?.id_token) {
        const email = jwt_decode(token?.data?.id_token)?.email;
        const appToken = jwt.sign(
          { user: email },
          keys.jwtSecret
        );
        res.status(200).send({
          status: "success",
          message: "Success",
          token: appToken,
        });
      } else {
        res.status(401).send({
          status: "error",
          message: "Invalid token",
          token: token?.data,
        });
      }
    } catch (err) {
      console.log({ err });
      res.status(200).send({
        status: "error",
        message: "Something went wrong",
      });
    }
  } else
    res.status(401).send({
      status: "error",
      message: "Invalid token",
    });
});

router.get("/notes", token.verifyToken, async (req, res) => {
  const userNotes = await NotesModal.find({ user: req?.token?.["user"] });
  console.log(mongoose.connection.readyState);
  res.status(200).send({
    status: "success",
    message: "API is working fine.",
    notes: userNotes ?? [],
  });
});

router.post("/notes", token.verifyToken, async (req, res) => {
  console.log(mongoose.connection.readyState);
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
    });
});

router.put("/notes", token.verifyToken, async (req, res) => {
  console.log(mongoose.connection.readyState);
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
      res.status(200).send({
        status: "success",
        message: "Success.",
        notes: userNotes ?? [],
      });
    } else
      res.status(500).send({
        status: "success",
        message: "Unable to update something went wrong",
      });
  } else
    res
      .status(400)
      .send({ status: "error", message: "Id is requered.", queryInfo });
});

router.delete("/notes", token.verifyToken, async (req, res) => {
  console.log(mongoose.connection.readyState);
  const params = req.params;
  const queryParams = req.query;
  const bodyParams = req.body;
  const request = { ...params, ...queryParams, ...bodyParams };
  if (request?.["id"] && request["id"] !== "") {
    const queryInfo = await NotesModal.deleteOne({
      _id: request["id"],
      user: req.token?.["user"],
    });
    if (queryInfo?.deletedCount) {
      const userNotes = await NotesModal.find({ user: req?.token?.["user"] });
      res.status(200).send({
        status: "success",
        message: "Success.",
        notes: userNotes ?? [],
      });
    } else
      res.status(500).send({
        status: "success",
        message: "Unable to delete something went wrong",
        queryInfo,
      });
  } else res.status(400).send({ status: "error", message: "Id is requered." });
});

router.get("/", function (req, res) {
  res.status(200).send({ status: "success", message: "API is working fine." });
});

module.exports = router;
