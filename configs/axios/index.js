import axios from "axios";

const instace = axios.create({
  baseURL: `${process.env.REACT_APP_HOST}/api/v1/member`,
});

instace.interceptors.response.use((response) => response);

export default instace;
