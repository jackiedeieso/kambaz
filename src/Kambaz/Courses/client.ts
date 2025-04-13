import axios from "axios";
import { USERS_API } from "../Account/client";

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER || "http://localhost:4000";
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;

const axiosWithCredentials = axios.create({ withCredentials: true });

/** Fetch all courses (admin or overview use) */
export const fetchAllCourses = async () => {
  const { data } = await axiosWithCredentials.get(COURSES_API);
  return data;
};

/** Create a new course and auto-enroll the current user */
export const createCourse = async (course: any) => {
  const response = await axiosWithCredentials.post(`${USERS_API}/current/courses`, course);
  return response.data;
};

/** Update a course */
export const updateCourse = async (course: any) => {
  const { data } = await axiosWithCredentials.put(`${COURSES_API}/${course._id}`, course);
  return data;
};

/** Delete a course */
export const deleteCourse = async (id: string) => {
  const { data } = await axiosWithCredentials.delete(`${COURSES_API}/${id}`);
  return data;
};

/** Enroll a user in a course */
export const enroll = async (userId: string, courseId: string) => {
  const response = await axiosWithCredentials.post(`${ENROLLMENTS_API}`, { userId, courseId });
  return response.data;
};

/** Unenroll a user from a course */
export const unenroll = async (userId: string, courseId: string) => {
  const response = await axiosWithCredentials.delete(`${ENROLLMENTS_API}`, {
    data: { userId, courseId },
  });
  return response.data;
};

/** Find all courses a user is enrolled in */
export const findCoursesForUser = async (userId: string) => {
  const response = await axiosWithCredentials.get(
    `${REMOTE_SERVER}/api/enrollments/users/${userId}/courses`
  );
  return response.data;
};

/** Find users by role (e.g., "FACULTY") */
export const findUsersByRole = async (role: string) => {
  const response = await axios.get(`${USERS_API}?role=${role}`);
  return response.data;
};
