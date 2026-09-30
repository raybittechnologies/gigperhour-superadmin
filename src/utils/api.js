import axios from "axios";

const BASE_URI = import.meta.env.VITE_BASE_URI;

const api = axios.create({
  baseURL: BASE_URI,
  withCredentials: true,
});

// Dynamically attach the token to every request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('adminToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export const loginGoogle = () => api.get("/auth/google");
export const loginAdmin = (credentials) => api.post("/auth/login", credentials);

export const getUser = () => api.get("/user/getMe");



// Notifications
export const getNotifications = async () => await api.get('/notifications');
export const markNotificationsRead = async () => await api.patch('/notifications/mark-read');

// Marketplace
export const getMarketplaceStats = async () => await api.get('/marketplace/stats');

// Blogs
export const getBlogs = async (category = '') => await api.get(category ? `/app/blogs/admin/all?category=${category}` : '/app/blogs/admin/all');
export const createBlog = async (data) => await api.post('/app/blogs', data);
export const updateBlog = async (id, data) => await api.put(`/app/blogs/${id}`, data);
export const publishBlog = async (id) => await api.patch(`/app/blogs/${id}/publish`);
export const unpublishBlog = async (id) => await api.patch(`/app/blogs/${id}/unpublish`);
export const deleteBlog = async (id) => await api.delete(`/app/blogs/${id}`);

// Uploads
export const uploadFile = async (data) => await api.post("/upload", data, { headers: { "Content-Type": "multipart/form-data" } });
