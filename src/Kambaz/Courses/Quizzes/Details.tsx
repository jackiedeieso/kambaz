import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getQuizBySlug } from "./client";

export default function Details() {
  const { slug, cid } = useParams();
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState<any>(null);

  useEffect(() => {
    const load = async () => {
      if (!slug || !cid) return;
      const data = await getQuizBySlug(cid, slug);
      setQuiz(data);
    };
    load();
  }, [slug, cid]);

  if (!quiz) return <div>Loading quiz details...</div>;

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">{quiz.title}</h2>
        <div className="space-x-2">
          <button
            className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400"
            onClick={() => navigate(`/Courses/${cid}/Quizzes/${slug}/edit`)}
          >
            Edit
          </button>
          <button
            className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
            onClick={() => navigate(`/Courses/${cid}/Quizzes/${slug}/preview`)}
          >
            Preview
          </button>
        </div>
      </div>

      {quiz.description && (
        <p className="text-gray-600">{quiz.description}</p>
      )}

      <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
        <p><strong>Quiz Type:</strong> {quiz.settings?.quizType}</p>
        <p><strong>Total Points:</strong> {quiz.points}</p>
        <p><strong>Assignment Group:</strong> {quiz.settings?.assignmentGroup}</p>
        <p><strong>Time Limit:</strong> {quiz.settings?.timeLimit} min</p>
        <p><strong>Shuffle Answers:</strong> {quiz.settings?.shuffleAnswers ? "Yes" : "No"}</p>
        <p><strong>Multiple Attempts:</strong> {quiz.settings?.multipleAttempts ? `Yes (${quiz.settings?.maxAttempts} max)` : "No"}</p>
        <p><strong>Show Correct Answers:</strong> {quiz.settings?.showCorrectAnswers ? "Yes" : "No"}</p>
        <p><strong>Access Code:</strong> {quiz.settings?.accessCode || "None"}</p>
        <p><strong>One Question at a Time:</strong> {quiz.settings?.oneQuestionAtATime ? "Yes" : "No"}</p>
        <p><strong>Webcam Required:</strong> {quiz.settings?.webcamRequired ? "Yes" : "No"}</p>
        <p><strong>Lock After Answer:</strong> {quiz.settings?.lockQuestions ? "Yes" : "No"}</p>
        <p><strong>Due Date:</strong> {quiz.availability?.dueDate || "None"}</p>
        <p><strong>Available From:</strong> {quiz.availability?.availableDate || "None"}</p>
        <p><strong>Until:</strong> {quiz.availability?.untilDate || "None"}</p>
      </div>
    </div>
  );
}