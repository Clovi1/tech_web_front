import axios from "axios";

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/'
})

instance.interceptors.request.use((config) => {
    const access_token = localStorage.getItem('access_token')
    config.headers.Authorization = `Bearer ${access_token}`
    return config
})

instance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        if (error.response.status === 401) {
            const authData = localStorage.getItem("refresh_token")
            const payload = {
                refresh: authData,
            };
            let apiResponse = await instance.post(
                "/api/token/refresh/",
                payload
            );
            console.log(apiResponse)
            localStorage.setItem('access_token', apiResponse.data.access)
            error.config.headers.Authorization = `Bearer ${apiResponse.data.access}`
            return axios(error.config);
        } else {
            return Promise.reject(error);
        }
    }
);

export default instance