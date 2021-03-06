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
// Thought (Id, Body, StreamId, Timestamp, FromMobile)
// Stream (Id, Name, UserId)

const create_stream_table = `
CREATE TABLE IF NOT EXISTS STREAM {
    ID INT(11) NOT NULL AUTO_INCREMENT,
    NAME VARCHAR(256) NOT NULL,
    USER_ID VARCHAR(256) NOT NULL,
    PRIMARY KEY (ID)
}
`;

const create_thought_table = `
CREATE TABLE IF NOT EXISTS THOUGHT {
    ID INT(11) NOT NULL AUTO_INCREMENT,
    BODY LONGTEXT NOT NULL,
    STREAM_ID INT NOT NULL,
    TIMESTAMP BIGINT NOT NULL,
    FROM_MOBILE BOOL NOT NULL,
    PRIMARY KEY (ID),
    FOREIGN KEY (STREAM_ID) REFERENCES STREAM(ID)
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