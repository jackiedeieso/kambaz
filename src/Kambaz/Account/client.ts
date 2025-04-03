import axios from "axios";

export const REMOTE_SERVER =
  import.meta.env.VITE_REMOTE_SERVER || "http://localhost:4000";

export const USERS_API = `${REMOTE_SERVER}/api/users`;

// Set withCredentials globally
const axiosWithCredentials = axios.create({
  baseURL: USERS_API,
  withCredentials: true,
});

// Sign in
export const signin = async (credentials: any) => {
  const response = await axios.post(
    `${USERS_API}/signin`,
    credentials,
    { withCredentials: true } // ✅ ensure cookie gets set
  );
  return response.data;
};

// Sign up
export const signup = async (user: any) => {
  const response = await axiosWithCredentials.post(`/signup`, user);
  return response.data;
};

// Get profile
export const profile = async () => {
  const response = await axiosWithCredentials.post(`/profile`);
  return response.data;
};

// Sign out
export const signout = async () => {
  const response = await axiosWithCredentials.post(`/signout`);
  return response.data;
};

// Update user
export const updateUser = async (user: any) => {
  const response = await axiosWithCredentials.put(`/${user._id}`, user);
  return response.data;
};

// Find current user's courses
export const findMyCourses = async () => {
  const response = await axiosWithCredentials.get(`/current/courses`);
  return response.data;
};

// Create a course for current user
export const createCourse = async (course: any) => {
  const response = await axiosWithCredentials.post(`/current/courses`, course);
  return response.data;
};
