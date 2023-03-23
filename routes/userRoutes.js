const express = require("express");

const router = express.Router();

// Route Handlers
const getAllUsers = (req, res) => {
  res.status(500).json({
    status: "Internal Server Error",
    message: "Route Not Defined",
  });
};

const addNewUser = (req, res) => {
  res.status(500).json({
    status: "Internal Server Error",
    message: "Route Not Defined",
  });
};

const getOneUser = (req, res) => {
  res.status(500).json({
    status: "Internal Server Error",
    message: "Route Not Defined",
  });
};

const updateOneUser = (req, res) => {
  res.status(500).json({
    status: "Internal Server Error",
    message: "Route Not Defined",
  });
};

const deleteOneUser = (req, res) => {
  res.status(500).json({
    status: "Internal Server Error",
    message: "Route Not Defined",
  });
};

router.route("/").get(getAllUsers).post(addNewUser);

router.route("/:id").get(getOneUser).patch(updateOneUser).delete(deleteOneUser);

module.exports = router;
