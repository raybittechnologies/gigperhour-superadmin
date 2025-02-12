import axios from "axios";

const BASE_URI = "http://localhost:5050/api/v1";
const api = axios.create({ baseURL: BASE_URI, withCredentials: true });

export const loginGoogle = () => api.get("/auth/google");

export const getUser = () => api.get("/user/getMe");

//Profile creations
export const createProfile = (data, token = null) =>
  api.post("/user/create", data, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const updateProfile = (data) => api.patch("/user/new-profile", data);
