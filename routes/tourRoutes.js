const fs = require("fs");

const express = require("express");

const router = express.Router();

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

const getAllTours = (req, res) => {
  res.status(200).json({
    status: "success",
    requestAt: req.requestTime,
    result: tours.length,
    data: {
      tours: tours,
    },
  });
};

const addNewTour = (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);
  tours.push(newTour);

  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: "success",
        data: {
          tours: newTour,
        },
      });
    }
  );
};

const getOneTour = (req, res) => {
  const id = req.params.id * 1;

  const tour = tours.find((item) => item.id === id);

  if (!tour) {
    res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });
  }

  res.status(200).json({
    message: "success",
    data: {
      tour,
    },
  });
};

const updateOneTour = (req, res) => {
  const id = req.params.id * 1;

  const tour = tours.find((item) => item.id === id);

  if (!tour) {
    res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });
  }

  res.status(200).json({
    message: "success",
    data: {
      tour: tour, // Return the Updated Tour
    },
  });
};

const deleteOneTour = (req, res) => {
  if (req.params.id * 1 > tours.length) {
    res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });
  }

  res.status(204).json({
    message: "success",
    data: null,
  });
};

router.route("/").get(getAllTours).post(addNewTour);

router.route("/:id").get(getOneTour).patch(updateOneTour).delete(deleteOneTour);

module.exports = router;
