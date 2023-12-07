import * as express from "express";
import * as http from "http";
import { getRoutes } from "./routes";


export function buildApp() {
    const app = express();

    app.use("/api", getRoutes());

    return http.createServer(app);
}