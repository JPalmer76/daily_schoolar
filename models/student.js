module.exports = function (sequelize, DataTypes) {

    const Student = sequelize.define("student", {
        firstName: { type: DataTypes.STRING },

        lastName: { type: DataTypes.STRING },

        email: { type: DataTypes.STRING },

        password: { type: DataTypes.STRING }

    });

    // "joining" tables between the other two


    Student.associate = function (models) {
        console.log(models)
        Student.hasMany(models.task, {
            onDelete: "cascade"
        });
    };


    return Student;

}

