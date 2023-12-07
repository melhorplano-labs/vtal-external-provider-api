import { Router } from "express";
import { accessControlMiddleware } from '../controllers/middlewares/access-control-middleware';
import { securityAuthorization } from '../controllers/middlewares/authorization-middleware';
import { generateToken } from "../controllers/generate-token";
import { findGeograficAddress } from "../controllers/find-geografic-address";
import { findCoverage } from "../controllers/find-coverage";

export function getRoutes() {
    const router = Router();
    router.use(accessControlMiddleware);
    router.use("/healthz", async (_req, res) => res.send("I'm healthy\n"));
    router.use(securityAuthorization);
    router.post("/auth/oauth/v2/token", generateToken);
    router.get("/geographicAddressManagement/v1/geographicAddress", findGeograficAddress);
    router.post("/resourcePoolManagement/v2/availabilityCheck", findCoverage);

    return router;
}