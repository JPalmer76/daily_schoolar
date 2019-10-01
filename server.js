const express = require('express');

const mysql = require('mysql');

const PORT = process.env.PORT || 3001;

const app = express();

// const connection = mysql.createConnection({
//     host: 'q68u8b2buodpme2n.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',	
//     user: 'e79uoyk342vx0syt',
//     password: 'xxk0otjswq1qqy38',
//     database: 'kb8je7otrbkp671t'
// });

// connection.connect();

const db = require("./models");

require('../daily_schoolar/routes/html_routes')(app);
require('../daily_schoolar/routes/api_routes')(app);

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

db.sequelize.sync({ force: true }).then(function() {
app.listen(PORT, () => {
    console.log('***********************************')
    console.log('Backend server running on port ' + PORT);
    console.log('***********************************')
    });
});