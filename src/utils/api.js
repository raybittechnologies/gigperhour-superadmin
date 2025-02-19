import axios from "axios";

const BASE_URI = "http://localhost:5050/api/v1";
// const BASE_URI = "http://92.168.100.35:5050/api/v1";

const api = axios.create({ baseURL: BASE_URI, withCredentials: true });

export const loginGoogle = () => api.get("/auth/google");

export const getUser = () => api.get("/user/getMe");

//Profile creations
export const getUserProfile = async (attributes) =>
  await api.get(`/user/getProfile?`, { params: { attributes: attributes } });

export const createProfile = async (data, token = null) =>
  await api.post("/user/create", data, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const updateProfile = async (data) =>
  await api.patch("/user/new-profile", data);

export const getWorkCategories = async () => await api.get("/workCategory");

export const getSpecialitiesByCategory = async (id) =>
  await api.get(`/speciality/category/${id}`);
