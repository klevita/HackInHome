import axios from "axios";

export default () => {
	const baseUrl = "http://185.246.155.111:38080/";

	return axios.create({
		baseURL: baseUrl,
		headers: {
			"Content-Type": "application/json"
		}
	});
};