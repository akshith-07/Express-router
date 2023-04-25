const express = require("express");

const router = express.Router();

router.get("/", (request, response) => {
  response.send("FIND PAGE");
});

let listitem = [
  {
    id: 1,
    name: "Akshith",
  },

  {
    id: 2,
    name: "sanjay",
  },

  {
    id: 3,
    name: "Jobirin",
  },

  {
    id: 4,
    name: "kousik",
  }
];

router.get("/:id", (request, response) => {
  const id = Number(request.params.id);

  const output = listitem.find((items) => items.id === id);

  if (output) response.send(output.name);
  else response.send(500);
});

module.exports = router;
