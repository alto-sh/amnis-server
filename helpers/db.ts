import mysql from "mysql";

// Configure Connection
const pool = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "root",
    database: "hibernate_db"
});

// Entities
// Thought (Id, Body, UserId, StreamId, Timestamp, FromMobile)
// Stream (Id, Name)

const create_stream_table = `
CREATE TABLE IF NOT EXISTS STREAM {
    ID INT(11) NOT NULL AUTO_INCREMENT,
    NAME VARCHAR(256) NOT NULL,
    PRIMARY KEY (ID)
}
`;

const create_thought_table = `
CREATE TABLE IF NOT EXISTS NOTE {
    ID INT(11) NOT NULL AUTO_INCREMENT,
    NAME LONGTEXT NOT NULL,
    USER_ID VARCHAR(256) NOT NULL,
    STREAM_ID INT NOT NULL,
    TIMESTAMP DATE NOT NULL,
    FROM_MOBILE BOOL NOT NULL
}
`;

// Create STEAM Table
pool.query(create_stream_table, (err, results, fields) => {
    if (err) console.log(err);
});

// Create THOUGHT Table
pool.query(create_thought_table, (err, results, fields) => {
    if (err) console.log(err);
});

export default pool;