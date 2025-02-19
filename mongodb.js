const mariadb = require('mariadb');

// Replace with your AWS RDS details
const pool = mariadb.createPool({
    host: 'database.chc04sk0qskl.us-west-2.rds.amazonaws.com', // RDS Endpoint
    user: 'shubham',
    password: 'shubham123',
    database: 'database',
    connectionLimit: 5
});

async function connection() {
    let conn;
    try {
        conn = await pool.getConnection();
        console.log('Connected to AWS RDS MariaDB!');
        return conn;
    } catch (err) {
        console.error('Error connecting to AWS RDS:', err);
    }
}

module.exports = connection;
