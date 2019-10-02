module.exports = function(sequelize, DataTypes) {

        const Task = sequelize.define('task', {

            task_id: {
                type: DataTypes.INT,
                primaryKey: true
            },
            task_name: {
                type: DataTypes.STRING,
                
            },
            task_complete: {
                type: DataTypes.Boolean,
                defaultValue: false
            },
            teacher_id: {
                type: DataTypes.INTEGER
            },
            createdAt: {
                type: DataTypes.DATE
        
            },
            updatedAt: {
                type: DataTypes.DATE
            }

        });

        // "joining" the tables with sequelize
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


          Task.sync();
};