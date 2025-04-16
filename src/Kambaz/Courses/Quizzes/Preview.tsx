import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getQuizBySlug,
  submitAttempt,
  getLastAttempt,
} from "./client";
import { useSelector } from "react-redux";

export default function Preview() {
  const { slug, cid } = useParams();
  const currentUser = useSelector((state: any) => state.session.currentUser);
  const [quiz, setQuiz] = useState<any>(null);
  const [answers, setAnswers] = useState<{ [key: string]: any }>({});
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState<any>(null);

  useEffect(() => {
    const load = async () => {
      if (!slug || !cid || !currentUser?._id) return;

      const q = await getQuizBySlug(cid, slug);
      setQuiz(q);

      const prev = await getLastAttempt(q._id, currentUser._id);
      if (prev) {
        setResult(prev);
        const initial: { [key: string]: any } = {};
        prev.answers.forEach((a: any) => {
          initial[a.questionId] = a.answer;
        });
        setAnswers(initial);
        setSubmitted(true);
      }
    };
    load();
  }, [slug, cid, currentUser]);

  const handleChange = (questionId: string, value: any) => {
    setAnswers({ ...answers, [questionId]: value });
  };

  const handleSubmit = async () => {
    if (!quiz || !currentUser?._id) return;

    const formattedAnswers = quiz.questions.map((q: any) => ({
      questionId: q._id,
      answer: answers[q._id] ?? "",
    }));

    const res = await submitAttempt(quiz._id, currentUser._id, formattedAnswers);
    setResult(res.attempt);
    setSubmitted(true);
  };

  if (!quiz) return <div>Loading quiz preview...</div>;

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold">{quiz.title} (Preview)</h2>
      {quiz.description && (
        <p className="text-gray-600">{quiz.description}</p>
      )}

      {quiz.questions.map((q: any, i: number) => {
        const wasCorrect = result?.answers.find((a: any) => a.questionId === q._id)?.correct;
        return (
          <div
            key={q._id}
            className={`p-4 border rounded space-y-2 ${
              submitted
                ? wasCorrect
                  ? "bg-green-50"
                  : "bg-red-50"
                : ""
            }`}
          >
            <h4 className="font-semibold">
              Q{i + 1}: {q.title || q.prompt}
            </h4>

            {q.type === "multiple_choice" && (
              <div className="space-y-1">
                {q.choices.map((choice: any, ci: number) => (
                  <label key={ci} className="block">
                    <input
                      type="radio"
                      name={q._id}
                      disabled={submitted}
                      checked={answers[q._id] === choice.text}
                      onChange={() => handleChange(q._id, choice.text)}
                      className="mr-2"
                    />
                    {choice.text}
                  </label>
                ))}
              </div>
            )}

            {q.type === "true_false" && (
              <div className="space-x-4">
                <label>
                  <input
                    type="radio"
                    name={q._id}
                    disabled={submitted}
                    checked={answers[q._id] === "true"}
                    onChange={() => handleChange(q._id, "true")}
                  />{" "}
                  True
                </label>
                <label>
                  <input
                    type="radio"
                    name={q._id}
                    disabled={submitted}
                    checked={answers[q._id] === "false"}
                    onChange={() => handleChange(q._id, "false")}
                  />{" "}
                  False
                </label>
              </div>
            )}

            {q.type === "fill_blank" && (
              <input
                className="border p-2 w-full"
                disabled={submitted}
                placeholder="Enter answer"
                value={answers[q._id] || ""}
                onChange={(e) => handleChange(q._id, e.target.value)}
              />
            )}
          </div>
        );
      })}

      {!submitted && (
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit Preview
        </button>
      )}

      {submitted && (
        <div className="text-green-700 font-medium">
          Your preview was submitted! Score: {result?.score} points
        </div>
      )}
    </div>
  );
}
