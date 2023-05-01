import axios from "axios";

const instance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api/v1/member`,
});

instance.interceptors.response.use((response) => response);

export default instance;
