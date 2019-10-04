// ================================================================
// ****************************************************************
//                          API Routes
// ****************************************************************
// ================================================================

// const express = require('express')
// const app = express()
const db = require("../models");




module.exports = function(app) {
  // ============================================================
  //                  teacher Table api routes
  // ============================================================
  
  // Get route for getting all of the teachers
  app.get("/api/teacher", function(req, res) {
    db.teacher.findAll({})
      .then(function(teacherData) {
        console.log(teacherData);
        res.json(teacherData);
      })
      .catch(function(error) {
        console.log(error);
      });
  });
  // Get route for getting one teacher by ID
  app.get("/api/teacher/:id", function(req, res) {
    db.teacher.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(teacherData) {
        console.log(teacherData);
        res.json(teacherData);
      })
      .catch(function(error) {
        console.log(error);
      });
  });
  // Delete route for deleting an teacher by ID
  app.delete("/api/employees/:id", function(req, res) {
    db.teacher.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(teacherData) {
        console.log(teacherData);
        res.json(teacherData);
      })
      .catch(function(error) {
        console.log(error);
      });
  });
  // Post Route for saving a new teacher
  app.post("/api/teacher", function(req, res) {
    db.teacher.create(req.body)
      .then(function(teacherData) {
        res.json(teacherData);
      })
      .catch(function(error) {
        console.log(error);
      });
  });
  // Put route for updating teacher data
  app.put("/api/teacher/:id", function(req, res) {
    db.teacher.update(req.body, {
      where: {
        id: req.params.id
      }
    })
      .then(function(teacherData) {
        console.log(teacherData);
        res.json(teacherData);
      })
      .catch(function(error) {
        console.log(error);
      });
  });
  // ============================================================
  //                   task Table api routes
  // ============================================================
  // Get route for getting all of the tasks
  app.get("/api/task", function(req, res) {
    db.task.findAll({})
      .then(function(taskData) {
        console.log(taskData);
        res.json(taskData);
      })
      .catch(function(error) {
        console.log(error);
      });
  });
  // Get route for getting one project by ID
  app.get("/api/task/:id", function(req, res) {
    db.task.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(taskData) {
        console.log(taskData);
        res.json(taskData);
      })
      .catch(function(error) {
        console.log(error);
      });
  });
  // Delete route for deleting an project by ID
  app.delete("/api/task/:id", function(req, res) {
    db.task.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(taskData) {
        console.log(taskData);
        res.json(taskData);
      })
      .catch(function(error) {
        console.log(error);
      });
  });
  // Post Route for saving a new project
  app.post("/api/task", function(req, res) {
    db.task.create(req.body)
      .then(function(taskData) {
        res.json(taskData);
      })
      .catch(function(error) {
        console.log(error);
      });
  });
  // Put route for updating project data
  app.put("/api/task/:id", function(req, res) {
    db.task.update(req.body, {
      where: {
        id: req.params.id
      }
    })
      .then(function(taskData) {
        console.log(taskData);
        res.json(taskData);
      })
      .catch(function(error) {
        console.log(error);
      });
  });
  // ============================================================
  //                  student Table api routes
  // ============================================================
  
  // Get route for getting all of the students
  app.get("/api/student", function(req, res) {
    db.student.findAll({})
      .then(function(studentData) {
        console.log(studentData);
        res.json(studentData);
      })
      .catch(function(error) {
        console.log(error);
      });
  });
  // Get route for retrieving student data by ID
  app.get("/api/student/:id", function(req, res) {
    db.Hour.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(studentData) {
        console.log(studentData);
        res.json(studentData);
      })
      .catch(function(error) {
        console.log(error);
      });
  });
  // Delete route for deleting student data by ID
  app.delete("/api/student/:id", function(req, res) {
    db.Hour.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(studentData) {
        console.log(studentData);
        res.json(studentData);
      })
      .catch(function(error) {
        console.log(error);
      });
  });
  // Post Route for creating new student
  app.post("/api/student", function(req, res) {
    db.student.create(req.body)
      .then(function(taskData) {
        res.json(taskData);
      })
      .catch(function(error) {
        console.log(error);
      });
  });
  // Put route for updating student data
  app.put("/api/student/:id", function(req, res) {
    db.student.update(req.body, {
      where: {
        id: req.params.id
      }
    })
      .then(function(studentData) {
        console.log(studentData);
        res.json(studentData);
      })
      .catch(function(error) {
        console.log(error);
      });
  });
  app.post("/api/form-data", function(req, res) {
    console.log(req.body);
    db.student.create({
      studentName: req.body.hoursWorked
    }).then(function() {
      db.task.create({
        taskName: req.body.taskName
      }).then(function() {
        res.send("Success");
      });
    });
  });
  
  
  app.get("/api/data", function(req, res) {
    db.sequelize
      .query(
        "select t.teacherName, t.taskName, s.studentName from teacher t inner join task t on t.id = t.teacherId inner join student s on t.id = s.taskId where t.id =" + req.user.id,{ type: db.Sequelize.QueryTypes.SELECT }
      )
      .then(function(data) {
        console.log(data)
        res.json(data);
      });
  });
};
