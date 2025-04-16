import axios from "axios";

const axiosWithCredentials = axios.create({ withCredentials: true });

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER || "http://localhost:4000";
const ASSIGNMENTS_API = (courseId: string) => `${REMOTE_SERVER}/api/courses/${courseId}/assignments`;

export const findAssignments = async (courseId: string) => {
  const response = await axiosWithCredentials.get(ASSIGNMENTS_API(courseId));
  return response.data;
};

export const createAssignment = async (assignment: any) => {
  const response = await axiosWithCredentials.post(
    ASSIGNMENTS_API(assignment.course),
    assignment
  );
  return response.data;
};

export const updateAssignment = async (assignment: any) => {
  const response = await axiosWithCredentials.put(
    `${ASSIGNMENTS_API(assignment.course)}/${assignment._id}`,
    assignment
  );
  return response.data;
};

export const deleteAssignment = async (assignment: any) => {
  const response = await axiosWithCredentials.delete(
    `${ASSIGNMENTS_API(assignment.course)}/${assignment._id}`
  );
  return response.data;
};
