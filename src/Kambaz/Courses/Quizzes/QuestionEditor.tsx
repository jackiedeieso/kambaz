import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getQuizBySlug, updateQuiz } from "./client";

export default function QuestionsEditor({ courseId }: { courseId: string }) {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState<any>(null);

  useEffect(() => {
    const loadQuiz = async () => {
      if (!slug || !courseId) return;
      const data = await getQuizBySlug(courseId, slug);
      setQuiz(data);
    };
    loadQuiz();
  }, [slug, courseId]);

  const handleAddQuestion = () => {
    const newQuestion = {
      _id: Date.now().toString(), // temporary ID
      title: "",
      prompt: "",
      type: "multiple_choice",
      points: 1,
      choices: [{ text: "", correct: false }],
      correctAnswers: [],
      correct: true,
    };
    setQuiz({ ...quiz, questions: [...(quiz.questions || []), newQuestion] });
  };

  const handleQuestionChange = (index: number, field: string, value: any) => {
    const updated = [...quiz.questions];
    updated[index][field] = value;
    setQuiz({ ...quiz, questions: updated });
  };

  const handleChoiceChange = (qi: number, ci: number, field: string, value: any) => {
    const updated = [...quiz.questions];
    updated[qi].choices[ci][field] = value;
    setQuiz({ ...quiz, questions: updated });
  };

  const handleAddChoice = (qi: number) => {
    const updated = [...quiz.questions];
    updated[qi].choices.push({ text: "", correct: false });
    setQuiz({ ...quiz, questions: updated });
  };

  const handleDeleteQuestion = (index: number) => {
    const updated = [...quiz.questions];
    updated.splice(index, 1);
    setQuiz({ ...quiz, questions: updated });
  };

  const handleSave = async () => {
    await updateQuiz(quiz._id, { questions: quiz.questions });
    navigate(`/Courses/${courseId}/Quizzes/${slug}/edit`);
  };

  if (!quiz) return <div>Loading...</div>;

  return (
    <div className="p-4 max-w-4xl mx-auto space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Edit Questions</h2>
        <button
          onClick={handleAddQuestion}
          className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
        >
          + Question
        </button>
      </div>

      {quiz.questions?.map((q: any, i: number) => (
        <div key={q._id} className="border p-4 rounded space-y-2 bg-white shadow">
          <div className="flex justify-between">
            <input
              className="text-lg font-semibold border-b w-full"
              placeholder="Question Title"
              value={q.title}
              onChange={(e) => handleQuestionChange(i, "title", e.target.value)}
            />
            <button
              onClick={() => handleDeleteQuestion(i)}
              className="text-red-500 text-sm"
            >
              Delete
            </button>
          </div>

          <textarea
            className="border w-full p-2"
            placeholder="Question Prompt"
            value={q.prompt}
            onChange={(e) => handleQuestionChange(i, "prompt", e.target.value)}
          />

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label>Points</label>
              <input
                type="number"
                className="border w-full p-1"
                value={q.points}
                onChange={(e) =>
                  handleQuestionChange(i, "points", Number(e.target.value))
                }
              />
            </div>

            <div>
              <label>Type</label>
              <select
                className="border w-full p-1"
                value={q.type}
                onChange={(e) => handleQuestionChange(i, "type", e.target.value)}
              >
                <option value="multiple_choice">Multiple Choice</option>
                <option value="true_false">True/False</option>
                <option value="fill_blank">Fill in the Blank</option>
              </select>
            </div>
          </div>

          {q.type === "multiple_choice" && (
            <div className="space-y-2">
              <p className="font-medium">Choices:</p>
              {q.choices.map((choice: any, ci: number) => (
                <div key={ci} className="flex items-center gap-2">
                  <input
                    type="radio"
                    checked={choice.correct}
                    onChange={() => {
                      const updated = [...quiz.questions];
                      updated[i].choices = updated[i].choices.map((c: any, j: number) => ({
                        ...c,
                        correct: j === ci,
                      }));
                      setQuiz({ ...quiz, questions: updated });
                    }}
                  />
                  <input
                    value={choice.text}
                    onChange={(e) =>
                      handleChoiceChange(i, ci, "text", e.target.value)
                    }
                    className="border p-1 w-full"
                  />
                </div>
              ))}
              <button
                onClick={() => handleAddChoice(i)}
                className="text-sm text-blue-600"
              >
                + Add Choice
              </button>
            </div>
          )}

          {q.type === "true_false" && (
            <div>
              <p className="font-medium">Correct Answer:</p>
              <label className="mr-4">
                <input
                  type="radio"
                  checked={q.correct === true}
                  onChange={() => handleQuestionChange(i, "correct", true)}
                />
                True
              </label>
              <label>
                <input
                  type="radio"
                  checked={q.correct === false}
                  onChange={() => handleQuestionChange(i, "correct", false)}
                />
                False
              </label>
            </div>
          )}

          {q.type === "fill_blank" && (
            <div className="space-y-2">
              <label>Correct Answers (comma separated)</label>
              <input
                className="border w-full p-2"
                value={q.correctAnswers.join(", ")}
                onChange={(e) =>
                  handleQuestionChange(i, "correctAnswers", e.target.value.split(",").map(s => s.trim()))
                }
              />
            </div>
          )}
        </div>
      ))}

      <div className="pt-4">
        <button
          onClick={handleSave}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Save Questions
        </button>
      </div>
    </div>
  );
}
