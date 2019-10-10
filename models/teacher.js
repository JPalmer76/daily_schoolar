module.exports = function (sequelize, DataTypes) {

  const Teacher = sequelize.define('teacher', {

      //   id: {
    //       type: DataTypes.UUID,
    //       primaryKey: true,
    //       defaultValue: DataTypes.UUIDV4
    //   },

    tfirstName: { type: DataTypes.STRING },

    tlastName: { type: DataTypes.STRING },

    temail: { type: DataTypes.STRING },

    tpassword: { type: DataTypes.STRING }

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

