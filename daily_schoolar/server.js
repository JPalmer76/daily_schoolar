const express = require('express');

const mysql = require('mysql');

const PORT = process.env.PORT || 3001;

const app = express();

const connection = mysql.createConnection({
    host: 'q68u8b2buodpme2n.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',	
    user: 'e79uoyk342vx0syt',
    password: 'xxk0otjswq1qqy38',
    database: 'kb8je7otrbkp671t'
});

connection.connect();

require('../daily_schoolar/client/src/App')(App);

app.listen(PORT, () => {
    console.log('***********************************')
    console.log('Backend server running on port ' + PORT);
    console.log('***********************************')

});