import { Router } from 'express';
import { accessControlMiddleware } from '../controllers/middlewares/access-control-middleware';
import { securityAuthorization } from '../controllers/middlewares/authorization-middleware';

export function getRoutes() {
    const router = Router();
    router.use(accessControlMiddleware);
    router.use("/healthz", async (_req, res) => res.send("I'm healthy\n"));
    router.use(securityAuthorization);
    router.get('/', (req, res) => {
        res.json({
            message: 'Hello World!'
        });
    });

    return router;
}