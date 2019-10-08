module.exports = function (sequelize, DataTypes) {

  const Teacher = sequelize.define('teacher', {

    firstName: { type: DataTypes.STRING },

    lastName: { type: DataTypes.STRING },

    email: { type: DataTypes.STRING },

    password: { type: DataTypes.STRING }

  });

  // "joining" the tables with sequelize
  // Teacher.associate = function(models) {
  //     Teacher.belongsTo(models.Student, [{ 
  //       foreignKey: {
  //         allowNull: false
  //       }
  //     }]);
  //   };


  Teacher.associate = function (models) {
    Teacher.hasMany(models.task, {
      onDelete: "cascade"
    });
  };


  return Teacher;

};

