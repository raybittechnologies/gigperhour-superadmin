import axios from "axios";

// const BASE_URI = "http://localhost:5050/api/v1";
const BASE_URI = "http://192.168.100.36:5051/api/v1";

const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoiZGV2LnphaGlkaGtAZ21haWwuY29tIiwibmFtZSI6IlphaGlkIEh1c3NhaW4gS2hhbiIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NMQjFNVkdJbW9idG1nVURFWDFVSGtOcGdkc0R3TEo5MlVaRml3OUZYUlZBX1RUX1JnPXM5Ni1jIn0sImlhdCI6MTc0MDM5MTY4MiwiZXhwIjoxNzQyOTgzNjgyfQ.DEYtrPu4U-CwU1NvAfPyFyhPe9MNRPpNVE3cBEAqBZo`;

const api = axios.create({
  baseURL: BASE_URI,
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const loginGoogle = () => api.get("/auth/google");

export const getUser = () => api.get("/user/getMe");

//Profile creations
export const getUserProfile = async (attributes) =>
  await api.get(`/user/getProfile?`, {
    params: { attributes: attributes },
  });

export const createProfile = async (data, token = null) =>
  await api.post("/user/create", data);

export const updateProfile = async (data) =>
  await api.patch("/user/new-profile", data);

export const getWorkCategories = async () => await api.get("/workCategory");

export const getSpecialitiesByCategory = async (id) =>
  await api.get(`/speciality/category/${id}`);

export const getSkillsBySpecId = async (ids) =>
  await api.get(`/skills/bySpecId`, { params: { spec: ids } });

export const addWorkExpreience = async (data) =>
  await api.post(`/experience/userExperiences`, data);

export const getUserWorkExperiences = async (data) =>
  await api.get(`/experience/userExperiences`, data);

export const addUserQualification = async (data) =>
  await api.post(`/qualifications/userQualifications`, data);

export const getUserQualification = async (data) =>
  await api.get(`/qualifications/userQualifications`, data);
