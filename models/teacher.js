module.exports = function(sequelize, DataTypes) {
        var Teacher = sequelize.define("Teacher", {
          teacherName: DataTypes.STRING,
          updatedAt: DataTypes.DATE,
          createdAt: DataTypes.DATE
        });
      
        Teacher.associate = function(models) {
          Teacher.hasMany(models.Task, {
            onDelete: "cascade"
          });
        };
        return Teacher;
      };