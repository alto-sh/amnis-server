import express from "express";
import pool from "../helpers/db";

const routes = (app: express.Application) => {

    app.post("/stream/create", (req, res) => {
        const { name, user_id } = req.body;
        const query = `INSERT INTO STREAM (NAME, USER_ID) VALUES ("${name}", "${user_id}")`;

        pool.query(query, (err, results, fields) => {
            if (err) {
                console.log(err);
                return res.json({ success: false });
            } else {
                console.log(results);
                res.json({ results: true });
            }
        })
    });

}

export default routes;