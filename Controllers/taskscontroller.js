const db = require("../models")  

module.exports = {
  
  // Post Route for saving a new task
  postTask: (req, res) => {
    db.task.create(req.body).then(dbTask => {
      console.log(dbTask)  
      res.json(dbTask);
      }).catch(err => {
        res.json(err)
      })
  },

  retrieveTask: (req, res) => {
    db.task.findAll().then(dbTask => {
        res.json(dbTask)
    }).catch(err => {
      res.json(err)
    })
  }
  // Put route for updating project data
  // app.put("/api/task/:id", function(req, res) {
  //   db.task.update(req.body, {
  //     where: {
  //       id: req.params.id
  //     }
  //   })
  //     .then(function(taskData) {
  //       console.log(taskData);
  //       res.json(taskData);
  //     })
  //     .catch(function(error) {
  //       console.log(error);
  //     });
  // })

} 