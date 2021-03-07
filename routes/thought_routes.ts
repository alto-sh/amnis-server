import express from "express";
import pool from "../helpers/db";

const routes = (app: express.Application) => {

    app.post("/thought/create", (req, res) => {
        const { body, stream_id, from_mobile} = req.body;
        const currentEpochTime = (new Date()).valueOf();

        const query = `INSERT INTO THOUGHT (BODY, STREAM_ID, TIMESTAMP, FROM_MOBILE) VALUES ("${body}". "${stream_id}", ${currentEpochTime}, ${from_mobile})`;

        pool.query(query, (err, results, fields) => {
            if (err) {
                console.log(err);
                return res.json({ success: false });
            } else {
                console.log(results);
                res.json({ results: true });
            }
        });
    });

    app.put("/thought/update/:thoughtid", (req, res) => {
        const { body } = req.body;

        const query = `UPDATE THOUGHT SET BODY="${body}" WHERE ID=${req.params.thoughtid}`;

        pool.query(query, (err, results, fields) => {
            if (err) {
                console.log(err);
                return res.json({ success: false });
            } else {
                console.log(results);
                return res.json({ success: true });
            }
        });
    });

    app.get("/thought/move/:thoughtid/:streamid", (req, res) => {
        const query = `UPDATE THOUGHT SET STREAM_ID=${req.params.streamid} WHERE ID=${req.params.thoughtid}`;

        pool.query(query, (err, results, fields) => {
            if (err) {
                console.log(err);
                return res.json({ success: false });
            } else {
                console.log(results);
                return res.json({ success: true });
            }
        });
    });

    app.delete("/thought/delete/:thoughtid", (req, res) => {
        const query = `DELETE THOUGHT WHERE ID=${req.params.thoughtid}`;

        pool.query(query, (err, results, fields) => {
            if (err) {
                console.log(err);
                return res.json({ success: false });
            } else return res.json({ success: true });
        });
    });

}

export default routes;