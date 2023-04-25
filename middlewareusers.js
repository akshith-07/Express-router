//MIDDLEWARE PROCESS

const express = require("express");

const router = express.Router();

router.get("/", (request, response) => {
  response.send("Welocme to the users page");
});

// router.get("/:id", (request, response) => {
//   response.send(`The user id is ${request.params.id}`);
// });
// router.put("/:id", (request, response) => {
//   response.send(`The user id is ${request.params.id}`);
// });
// router.delete("/:id", (request, response) => {
//   response.send(`The user id is ${request.params.id}`);
// });

router
  .route("/:id")
  .get((request, response) => {
    response.send(
      `The get method user is ${request.persons.name} and the role is ${request.persons.expert}`
    );
  })
  .put((request, response) => {
    response.send(`The put method is ${(request.params, id)}`);
  })
  .delete((request, response) => {
    response.send(`The user deleted is ${request.params.id}`);
  });

const person = [
  {
    name: "Akshith",
    expert: "Web Developer",
  },
  {
    name: "Jobirin",
    expert: "App Developer",
  },
  {
    name: "Kousik",
    expert: "Software Developer",
  },
  {
    name: "Sanjay",
    expert: "Data Engineer",
  },
  {
    name: "Babin",
    expert: "Frontend web Developer",
  },
  {
    name: "Ebin",
    expert: "Backend Web Developer",
  },
];
//middle ware executes between the request and the response

router.param("id", (request, response, next, useridfromarray) => {
  console.log(request.params.id);
  request.persons = person[useridfromarray];
  // request.role = person[useridfromarray];
  next(); //if the next is not given the page will reload constinuously and wil not move to the next part
});

// router.param("id", (request, response, next, id) => {
//   console.log(request.params.id);
//
// });

module.exports = router;
