import { serverConfig } from "./config";
import { buildApp } from "./app";

process.env.TZ = serverConfig.timezone;

const init = async () => {
    const app = buildApp();

    const port = serverConfig.port;

    app.listen(port, "::", () => {
        if (process.env.NODE_ENV !== "production") {
            console.log(`API http server running on port ${port}`);
        }
    });

    app.keepAliveTimeout = serverConfig.keepAliveTimeout;
    app.headersTimeout = serverConfig.headersTimeout;
};

init().catch((e: Error) => {
    console.error(e);
});