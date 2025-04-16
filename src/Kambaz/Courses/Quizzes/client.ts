import axios from "axios";

const BASE = import.meta.env.VITE_API_BASE || "http://localhost:4000/api/quizzes";
const COURSES_BASE = BASE.replace("/quizzes", "/courses");
const ATTEMPTS_BASE = BASE.replace("/quizzes", "/attempts");

// --- Quizzes ---

// Get all quizzes for a course
export const getQuizzesByCourse = async (courseId: string) => {
  const response = await axios.get(`${BASE}/course/${courseId}`, {
    withCredentials: true,
  });
  return response.data;
};

// Get one quiz by course + slug
export const getQuizBySlug = async (courseId: string, slug: string) => {
  const response = await axios.get(`${COURSES_BASE}/${courseId}/quizzes/${slug}`, {
    withCredentials: true,
  });
  return response.data;
};

// Create a new quiz
export const createQuiz = async (quizData: any) => {
  const response = await axios.post(`${BASE}`, quizData, {
    withCredentials: true,
  });
  return response.data;
};

// Update quiz metadata/settings (still uses _id internally)
export const updateQuiz = async (quizId: string, updates: any) => {
  const response = await axios.put(`${BASE}/${quizId}`, updates, {
    withCredentials: true,
  });
  return response.data;
};

// Toggle publish/unpublish quiz (still uses _id internally)
export const togglePublish = async (quizId: string) => {
  const response = await axios.patch(`${BASE}/${quizId}/publish`, {}, {
    withCredentials: true,
  });
  return response.data;
};

// --- Attempts ---

// Submit a quiz attempt
export const submitAttempt = async (
  quizId: string,
  userId: string,
  answers: any[]
) => {
  const response = await axios.post(
    `${ATTEMPTS_BASE}/${quizId}/submit`,
    { userId, answers },
    { withCredentials: true }
  );
  return response.data;
};

// Get most recent attempt by user
export const getLastAttempt = async (quizId: string, userId: string) => {
  const response = await axios.get(
    `${ATTEMPTS_BASE}/${quizId}/user/${userId}`,
    { withCredentials: true }
  );
  return response.data;
};
