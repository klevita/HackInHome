import axios from "axios";

export default () => {
	const baseUrl = "https://rinh-api.kovalev.team/";

	return axios.create({
		baseURL: baseUrl,
		headers: {
			"Content-Type": "application/json"
		}
	});
};