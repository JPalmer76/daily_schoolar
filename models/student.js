module.exports = function(sequelize, DataTypes) {
    var Student = sequelize.define("student", {
        studentName: { type: DataTypes.STRING},

        task_id: { type: DataTypes.INTEGER},

        teacher_id: { type: DataTypes.INTEGER},

        createdAt: { type: DataTypes.DATE},

        updatedAt: { type: DataTypes.DATE}

    });

    // "joining" tables between the other two


    Student.associate =  function(models) {
        Student.belongsTo(models.Task, {
            foreignKey: {
                allowNull: false
            };
        });
    };
    

    Student.sync();

}