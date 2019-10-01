module.exports = function(sequelize, DataTypes) {
    var Task = sequelize.define("Task", {
      taskName: DataTypes.STRING,
      taskComplete: {
        type: DataTypes.BOOLEAN, 
        defaultValue: false
      },
      updatedAt: DataTypes.DATE,
      createdAt: DataTypes.DATE
    });
  
    Task.associate = function(models) {
      Task.belongsTo(models.Teacher, {
        foreignKey: {
          allowNull: false
        }
      });
    };
    Task.associate = function(models) {
      Task.hasMany(models.Student, {
        foreignKey: {
          allowNull: false
        }
      });
    };
    return Task;
  };