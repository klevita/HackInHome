import axios from "axios";

export default () => {
	const baseUrl = "http://109.107.183.61:8080/";

	return axios.create({
		baseURL: baseUrl,
		headers: {
			"Content-Type": "application/json"
		}
	});
};