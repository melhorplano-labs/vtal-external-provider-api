import { getAddress } from "../services/vtal/get-address";
import { Request, Response } from "express";

export async function findGeograficAddress(req: Request, res: Response): Promise<Response> {
    try {
        const { address, number } = req.query;
        const token = req.headers.authorization?.split(" ")[1];
        const addressData = await getAddress({address, number, token});
        return res.status(200).json(addressData);
    } catch (error) {
        console.error(error);
        return res.status(error?.response?.status || 500).json(error);
    }
}