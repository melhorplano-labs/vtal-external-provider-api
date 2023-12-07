import { NextFunction, Request, Response } from "express";
import { securityCode } from "../../utils/security-code";
import { ConstStatusCode } from "../../utils/status-code";

export const securityAuthorization = (req: Request, res: Response, next: NextFunction): void => {
    if (req.headers.authorization !== securityCode) {
        res.status(ConstStatusCode.unauthorized).json({
            status: false,
        });
    } else {
        next();
    }
};
