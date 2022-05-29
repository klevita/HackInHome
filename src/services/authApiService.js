import httpClient from "@/clients/httpClient.js";

export default class UserApiService {
    static async getUser(studentFullName,groupName) {
        const endpoint = "groups/"+ groupName+"/students/"+studentFullName
        const response = await httpClient().get(endpoint);
        return response;
    }
    static async getUserById(id) {
        const endpoint = "students/"+ id
        const response = await httpClient().get(endpoint);
        return response;
    }
    static async getUsersByGroupId(groupId) {
        const endpoint = "groups/"+ groupId;
        const response = await httpClient().get(endpoint);
        return response;
    }
    static async addTeacherToGroup(groupId,teacherId) {
        const endpoint = "groups/"+ groupId+"/students/"+teacherId;
        const response = await httpClient().post(endpoint);
        return response;
    }
    static async removeTeacherFromGroup(groupId,teacherId){
        const endpoint = "groups/"+ groupId+"/students/"+teacherId;
        const response = await httpClient().delete(endpoint);
        return response;
    }
}