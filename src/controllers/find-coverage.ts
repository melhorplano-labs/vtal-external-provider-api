import { postCoverage } from "../services/vtal/post-coverage";
import { Request, Response } from "express";

export async function findCoverage(req: Request, res: Response): Promise<Response> {
    try {
        const { address: { id } } = req.body;
        const token = req.headers.authorization?.split(" ")[1];
        const coverage = await postCoverage({addressId: id, token});
        return res.status(200).json(coverage);
    } catch (error) {
        console.error(error);
        return res.status(error?.response?.status || 500).json(error);
    }
}