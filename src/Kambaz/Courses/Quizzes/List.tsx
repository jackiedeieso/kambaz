import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getQuizzesByCourse,
  togglePublish,
  createQuiz,
} from "./client";
import { useSelector } from "react-redux"; // Assuming you store session
import { FaCheckCircle, FaBan, FaPlus, FaEdit, FaPlay } from "react-icons/fa";

interface Quiz {
  _id: string;
  title: string;
  published: boolean;
  availability?: {
    dueDate?: string;
  };
  questions?: any[];
}

export default function List({ courseId }: { courseId: string }) {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const currentUser = useSelector((state: any) => state?.session?.currentUser);

  const loadQuizzes = async () => {
    const data = await getQuizzesByCourse(courseId);
    setQuizzes(data);
  };

  useEffect(() => {
    loadQuizzes();
  }, [courseId]);

  useEffect(() => {
    const load = async () => {
      if (!currentUser?._id) return;
      console.log("📡 Fetching quizzes for:", courseId);
      const data = await getQuizzesByCourse(courseId);
      console.log("📦 Quizzes received:", data);
      setQuizzes(data);
    };
    load();
  }, [courseId, currentUser]);
  

  const handleTogglePublish = async (quizId: string) => {
    await togglePublish(quizId);
    loadQuizzes();
  };

  const handleAddQuiz = async () => {
    const newQuiz = await createQuiz({ courseId });
    window.location.href = `/Courses/${courseId}/Quizzes/${newQuiz._id}/edit`;
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Quizzes</h2>
        {currentUser?.role === "faculty" && (
          <button
            className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 flex items-center gap-2"
            onClick={handleAddQuiz}
          >
            <FaPlus /> Add Quiz
          </button>
        )}
      </div>

      {quizzes.length === 0 ? (
        <p>No quizzes yet for this course.</p>
      ) : (
        <ul className="space-y-4">
          {quizzes.map((quiz) => (
            <li
              key={quiz._id}
              className="border rounded p-3 flex justify-between items-center"
            >
              <div>
                <h3 className="text-lg font-semibold">{quiz.title}</h3>
                <p className="text-sm text-gray-500">
                  Due: {quiz.availability?.dueDate?.slice(0, 10) || "TBD"} ·{" "}
                  {quiz.questions?.length || 0} questions
                </p>
              </div>
              <div className="flex items-center gap-3">
                {currentUser?.role === "faculty" ? (
                  <>
                    <button onClick={() => handleTogglePublish(quiz._id)}>
                      {quiz.published ? (
                        <FaCheckCircle className="text-green-600" />
                      ) : (
                        <FaBan className="text-red-500" />
                      )}
                    </button>
                    <Link
                      to={`/${quiz._id}/edit`}
                      className="text-blue-500 hover:underline"
                    >
                      <FaEdit />
                    </Link>
                    <Link
                      to={`/${quiz._id}/preview`}
                      className="text-purple-500 hover:underline"
                    >
                      Preview
                    </Link>
                  </>
                ) : (
                  <>
                    {quiz.published ? (
                      <Link
                        to={`/${quiz._id}/take`}
                        className="bg-green-600 text-white px-2 py-1 rounded flex items-center gap-1"
                      >
                        <FaPlay /> Take Quiz
                      </Link>
                    ) : (
                      <span className="text-sm text-gray-400">Unpublished</span>
                    )}
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
