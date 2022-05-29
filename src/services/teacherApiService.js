import httpClient from "@/clients/httpClientRinh.js";

export default class UserApiService {
    static API_ENDPOINT = "employee/dto";
    static async getAll() {
        const response = await httpClient().get(this.API_ENDPOINT);
        return response.data;
    }
    static async getById(id) {
        const response = await httpClient().get(`${this.API_ENDPOINT}/${id}`);
        const userData = response.data;
        return userData;
    }
}
