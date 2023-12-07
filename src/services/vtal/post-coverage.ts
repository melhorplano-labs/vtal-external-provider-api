import { vtalApi } from "./api";

type PostCoverageParams = {
    token: string;
    addressId: number;
};

export async function postCoverage({token, addressId}: PostCoverageParams): Promise<any> {
    const response = await vtalApi.post("/resourcePoolManagement/v2/availabilityCheck", {
        address: {
            id: addressId
        }
    }, {
        headers: {
            "x-resource-pool": "5",
            "Accept": "*/*",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    });
    return response?.data;
}