const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const express = require("express");
module.exports = (req, res, next) => {
  const { authoraization } = req.headers;
  if (!authoraization) {
    return res.status(401).send({ message: "You must  login " });
  }
  const token = authoraization.replace("Bearer ", "");
  jwt.verify(token, process.env.jwt_key, async (err, payload) => {
    if (err) {
      return res.status(401).send({ message: "You must  login " });
    }
  });
  next();
};