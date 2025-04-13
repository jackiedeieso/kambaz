import axios from "axios";

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER || "http://localhost:4000";
const MODULES_API = `${REMOTE_SERVER}/api/modules`;

const axiosWithCredentials = axios.create({ withCredentials: true });

// Get all modules for a specific course
export const findModulesForCourse = async (courseId: string) => {
  const response = await axiosWithCredentials.get(`${REMOTE_SERVER}/api/courses/${courseId}/modules`);
  return response.data;
};

// Create a new module for a course
export const createModuleForCourse = async (courseId: string, module: any) => {
  const response = await axiosWithCredentials.post(`${REMOTE_SERVER}/api/courses/${courseId}/modules`, module);
  return response.data;
};

// Delete a module by its ID
export const deleteModule = async (moduleId: string) => {
  const response = await axiosWithCredentials.delete(`${MODULES_API}/${moduleId}`);
  return response.data;
};

// Update an existing module
export const updateModule = async (module: any) => {
  const { data } = await axiosWithCredentials.put(`${MODULES_API}/${module._id}`, module);
  return data;
};
