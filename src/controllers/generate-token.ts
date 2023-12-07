import { createToken } from "../services/vtal/create-token";
import { Request, Response } from "express";

export async function generateToken(req: Request, res: Response): Promise<Response> {
    try {
        const token = await createToken();
        return res.status(200).json(token);
    } catch (error) {
        console.error(error);
        return res.status(500).end();
    }
}