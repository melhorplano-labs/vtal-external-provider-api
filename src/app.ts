import * as express from "express";
import * as http from "http";
import { getRoutes } from "./routes";


export function buildApp() {
    const app = express();
    app.use(express.json());

    app.use(getRoutes());

    return http.createServer(app);
}