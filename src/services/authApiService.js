import httpClient from "@/clients/httpClient.js";

export default class UserApiService {
    static async getUser(studentFullName,groupName) {
        const endpoint = "groups/"+ groupName+"/students/"+studentFullName
        const response = await httpClient().get(endpoint);
        return response;
    }
}