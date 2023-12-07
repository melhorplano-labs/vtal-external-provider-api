import { NextFunction, Request, Response } from "express";
import { serverConfig } from "../../config/index";
import { ConstStatusCode } from "../../utils/status-code";

export const securityAuthorization = (req: Request, res: Response, next: NextFunction): void => {
    if (req.headers.mpauth !== serverConfig.mpauth) {
        res.status(ConstStatusCode.unauthorized).end();
    } else {
        next();
    }
};
