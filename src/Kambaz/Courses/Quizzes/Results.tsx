import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getQuizBySlug, getLastAttempt } from "./client";
import { useSelector } from "react-redux";

export default function Results() {
  const { slug, cid } = useParams();
  const currentUser = useSelector((state: any) => state.session.currentUser);
  const navigate = useNavigate();

  const [quiz, setQuiz] = useState<any>(null);
  const [result, setResult] = useState<any>(null);

  useEffect(() => {
    const load = async () => {
      if (!slug || !cid || !currentUser?._id) return;

      const q = await getQuizBySlug(cid, slug);
      const a = await getLastAttempt(q._id, currentUser._id);
      setQuiz(q);
      setResult(a);
    };
    load();
  }, [slug, cid, currentUser]);

  const getAnswer = (qid: string) =>
    result?.answers.find((a: any) => a.questionId === qid);

  if (!quiz || !result) return <div>Loading results...</div>;

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold">{quiz.title} – Results</h2>
      <p className="text-gray-600">Score: {result.score} points</p>

      {quiz.questions.map((q: any, i: number) => {
        const ans = getAnswer(q._id);
        const correct = ans?.correct;
        const userAnswer = ans?.answer;

        return (
          <div
            key={q._id}
            className={`p-4 border rounded space-y-2 ${
              correct ? "bg-green-50" : "bg-red-50"
            }`}
          >
            <h4 className="font-semibold">
              Q{i + 1}: {q.title || q.prompt}
            </h4>

            <div className="text-sm">
              <p>
                <strong>Your answer:</strong>{" "}
                <span className={correct ? "text-green-700" : "text-red-700"}>
                  {userAnswer || "No answer submitted"}
                </span>
              </p>
              {!correct && (
                <div>
                  <strong>Correct answer:</strong>{" "}
                  <span className="text-green-700">
                    {q.type === "multiple_choice"
                      ? q.choices.find((c: any) => c.correct)?.text
                      : q.type === "true_false"
                      ? q.correct?.toString()
                      : q.correctAnswers?.join(", ")}
                  </span>
                </div>
              )}
            </div>
          </div>
        );
      })}

      <button
        onClick={() => navigate(`/Courses/${cid}/Quizzes`)}
        className="text-blue-600 underline"
      >
        Back to Quizzes
      </button>
    </div>
  );
}
