import express from "express";

/* Import Routes */
import stream_routes from "./stream_routes";

const defaultExports = (app: express.Application) => {
    /* Route Function Calls */
    stream_routes(app);
};

export default defaultExports;