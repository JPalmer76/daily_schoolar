module.exports = function(sequelize, DataTypes) {

            const Teacher = sequelize.define('teacher', {
                
                teacher_id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true
                    
                },
                teacherName: {
                    type: DataTypes.STRING,
                    allowNull: false
                },
                createdAt: {
                    type: DataTypes.DATE
            
                },
                updatedAt: {
                    type: DataTypes.DATE
                }
            });

// "joining" the tables with sequelize
            Teacher.associate = function(models) {
                Teacher.belongsTo(models.Student, {
                  foreignKey: {
                    allowNull: false
                  }
                });
              };


              Teacher.associate = function(models) {
                Teacher.hasMany(models.Task, {
                  foreignKey: {
                    allowNull: false
                  }
                });
              };


              Teacher.sync();

};