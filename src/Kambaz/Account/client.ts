import axios from "axios";

export const REMOTE_SERVER =
  import.meta.env.VITE_REMOTE_SERVER || "http://localhost:4000";

export const USERS_API = `${REMOTE_SERVER}/api/users`;

const axiosWithCredentials = axios.create({
  baseURL: USERS_API,
  withCredentials: true,
});

export const findAllUsers = async () => {
  const response = await axiosWithCredentials.get("/");
  return response.data;
};

export const findUsersByPartialName = async (name: string) => {
  const response = await axiosWithCredentials.get(`?name=${name}`);
  return response.data;
};

export const signin = async (credentials: any) => {
  console.log("USERS_API is:", USERS_API);
console.log("Credentials being sent:", credentials);
  const response = await axios.post(
    `${USERS_API}/signin`,
    credentials,
    { withCredentials: true }
  );
  return response.data;
};

export const signup = async (user: any) => {
  const response = await axiosWithCredentials.post("/signup", user);
  return response.data;
};

export const profile = async () => {
  const response = await axiosWithCredentials.post("/profile");
  return response.data;
};

export const signout = async () => {
  const response = await axiosWithCredentials.post("/signout");
  return response.data;
};

export const updateUser = async (user: any) => {
  const response = await axiosWithCredentials.put(`${USERS_API}/${user._id}`, user);
  return response.data;
};

export const findMyCourses = async () => {
  const response = await axiosWithCredentials.get("/current/courses");
  return response.data;
};

export const createCourse = async (course: any) => {
  const response = await axiosWithCredentials.post("/current/courses", course);
  return response.data;
};

export const findUsersByRole = async (selectedRole: string) => {
  const response = await axiosWithCredentials.get(`?role=${selectedRole}`);
  return response.data;
};

export const findUsersWithQuery = async (queryString: string) => {
  const response = await axiosWithCredentials.get(`?${queryString}`);
  return response.data;
};

export const findUserById = async (id: string) => {
  const response = await axiosWithCredentials.get(`/${id}`);
  return response.data;
};

export const deleteUser = async (userId: string) => {
  const response = await axios.delete(`${USERS_API}/${userId}`, {
    withCredentials: true
  });
  return response.data;
};

export const createUser = async (user: any) => {
  const response = await axiosWithCredentials.post("/", user);
  return response.data;
};

