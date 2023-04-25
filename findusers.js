const express = require("express");

const router = express.Router();

router.get("/", (request, response) => {
  response.send("Search for the user");
});

let findusers = [
  {
    id: 7,
    name: "Akshith",
  },
  {
    id: 144,
    name: "Sanjay",
  },
  {
    id: 76,
    name: "Kousik",
  },
  {
    id: 137,
    name: "Sagul",
  },
];

router.get("/:id", (request, response) => {
  const id = Number(request.params.id);

  const output = findusers.find((users) => users.id === id);

  if (output) {
    response.send(output.name);
  } else {
    response.status(500).send("There is an error in the server");
  }
});

module.exports = router;
