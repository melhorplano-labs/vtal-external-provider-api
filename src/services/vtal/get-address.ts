import { vtalApi } from "./api";

type GetAddressParams = {
    token: string;
    address: string | number;
    number: string | number;
};

export async function getAddress({token, address, number}: GetAddressParams): Promise<any> {
    const response = await vtalApi.get("/geographicAddressManagement/v1/geographicAddress",
        {
            params: {
                address: `${address}`,
                number: `${number}`
            },
            headers: {
                "x-resource-pool": "5",
                "Accept": "*/*",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }
    );
    return response?.data;
}