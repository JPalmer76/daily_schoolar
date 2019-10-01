module.exports = function(sequelize, DataTypes) {
    var Student = sequelize.define("Student", {
      studentName: DataTypes.INTEGER,
      updatedAt: DataTypes.DATE,
      createdAt: DataTypes.DATE
    });
  
    Student.associate = function(models) {
      Student.belongsTo(models.Task, {
        onDelete: "cascade"
      });
    };
  
    return Student;
  };