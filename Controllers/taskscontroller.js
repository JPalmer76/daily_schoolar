const db = require("../models")  

module.exports = {
  
  // Post Route for saving a new task
  postTask: (req, res) => {
    db.task.create(req.body)
      .then(function(taskData) {
        res.json(taskData);
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  // Put route for updating  data
  upTask: (req, res) => {
    db.task.update(req.body, {
      where: {
        id: req.params.id
      }
    })
      .then(function(taskData) {
        console.log(taskData);
        res.json(req.body);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

}; 