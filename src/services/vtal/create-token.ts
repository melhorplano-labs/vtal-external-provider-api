import { vtalAuthApi } from "./api";
import { serverConfig } from "../../config";

export async function creteToken(): Promise<string | undefined> {
    try {
        const response = await vtalAuthApi.post("", {}, {
            params: {
                scope: serverConfig.vtalConfig.scope,
            },
        });
        return response.data.access_token;
    } catch (error) {
        console.error(error);
        return;
    }
}