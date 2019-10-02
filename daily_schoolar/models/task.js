module.exports = function(sequelize, DataTypes) {

        const Task = sequelize.define('task', {


            taskName: {
                type: DataTypes.STRING,
                
            },
            taskComplete: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            }
            
        });

       // "joining" the tables with sequelize


          
          Task.associate = function(models) {[
            Task.belongsTo(models.student, {
              foreignKey: {
                allowNull: false
              }  
            }), Task.belongsTo(models.teacher, {
              foreignKey: {
                allowNull: false
              }
            }) ]
          }


          return Task;
};