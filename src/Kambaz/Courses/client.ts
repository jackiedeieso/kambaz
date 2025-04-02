import axios from "axios";
import { USERS_API } from "../Account/client";

const axiosWithCredentials = axios.create({ withCredentials: true });

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER || "http://localhost:4000";
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
const MODULES_API = `${REMOTE_SERVER}/api/modules`;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;

export const fetchAllCourses = async () => {
  const { data } = await axiosWithCredentials.get(COURSES_API);
  return data;
};

export const deleteCourse = async (id: string) => {
  const { data } = await axiosWithCredentials.delete(`${COURSES_API}/${id}`);
  return data;
};

export const updateCourse = async (course: any) => {
  const { data } = await axiosWithCredentials.put(`${COURSES_API}/${course._id}`, course);
  return data;
};

export const createCourse = async (course: any) => {
  const response = await axiosWithCredentials.post(`${USERS_API}/current/courses`, course);
  return response.data;
};

export const findModulesForCourse = async (courseId: string) => {
  const response = await axiosWithCredentials.get(`${COURSES_API}/${courseId}/modules`);
  return response.data;
};

export const createModuleForCourse = async (courseId: string, module: any) => {
  const response = await axiosWithCredentials.post(`${COURSES_API}/${courseId}/modules`, module);
  return response.data;
};

export const deleteModule = async (moduleId: string) => {
  const response = await axiosWithCredentials.delete(`${MODULES_API}/${moduleId}`);
  return response.data;
};

export const updateModule = async (module: any) => {
  const { data } = await axiosWithCredentials.put(`${MODULES_API}/${module._id}`, module);
  return data;
};

export const enroll = async (userId: string, courseId: string) => {
  const response = await axiosWithCredentials.post(`${ENROLLMENTS_API}`, { userId, courseId });
  return response.data;
};

export const unenroll = async (userId: string, courseId: string) => {
  const response = await axiosWithCredentials.delete(`${ENROLLMENTS_API}`, {
    data: { userId, courseId },
  });
  return response.data;
};

export const findCoursesForUser = async (userId: string) => {
  const response = await axiosWithCredentials.get(
    `${REMOTE_SERVER}/api/enrollments/users/${userId}/courses`
  );
  return response.data;
};
