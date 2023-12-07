import { vtalAuthApi } from "./api";
import { serverConfig } from "../../config";

export async function createToken(): Promise<any> {
    const response = await vtalAuthApi.post("", 
        {
            scope: serverConfig.vtalConfig.scope,
        }, 
        {
            params: {
                
            },
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }
    );
    return response?.data;
}