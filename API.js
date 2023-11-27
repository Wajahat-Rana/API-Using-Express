const express = require("express");

const app = express();

let students = [
  { id: 1, name: "Wajahat"},
  { id: 2, name: "Ayesha"},
  { id: 3, name: "Noman"},
  { id: 4, name: "Eman"},
  { id: 5, name: "Muneeb"}
];

app.get("/", (req, res) => {
  res.send("Welcome To My API");
});

//GET Request
app.get("/api/students", (req, res) => {
  res.status(200).send(students);
});

//GET BY ID Request
app.get("/api/students/:id", (req, res) => {
  let check = false;
  students.forEach((student) => {
    if (student.id == req.params.id) {
      res.status(200).send(student);
      students.forEach(student => {
        console.log(student.name)
    });
      check = true;
    }
  });
  if (!check) {
    res.status(400).send("Student Data Not Found");
  }
});

//POST Request
app.post("/api/students/:id/:name",(req, res) => {


console.log(req.body.id)


  let newStudent = { id: req.params.id, name: req.params.name };
  students.push(newStudent);
  res.status(200).send("Successfully Added");
});

//PUT Request
app.put("/api/students/:id/:name",(req, res) => {
    students.forEach((student) => {
        if (student.id == req.params.id) {
          student.name = req.params.name;
        }
      });
    res.status(200).send("Successfully Updated");
  });

//DELETE Request
  app.delete("/api/students/:id", (req, res) => {
    let idToRemove = req.params.id;
    students = students.filter(student => student.id != idToRemove);
    res.status(200).send('Successfully Deleted');
});

app.listen(3000);