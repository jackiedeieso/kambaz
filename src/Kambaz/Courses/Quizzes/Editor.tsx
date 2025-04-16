import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getQuizBySlug, updateQuiz, togglePublish } from "./client";

export default function Editor({ courseId }: { courseId: string }) {
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

  const handleChange = (field: string, value: any) => {
    setQuiz({ ...quiz, [field]: value });
  };

  const handleSettingsChange = (field: string, value: any) => {
    setQuiz({
      ...quiz,
      settings: { ...quiz.settings, [field]: value },
    });
  };

  const handleAvailabilityChange = (field: string, value: any) => {
    setQuiz({
      ...quiz,
      availability: { ...quiz.availability, [field]: value },
    });
  };

  const handleSave = async () => {
    await updateQuiz(quiz._id, quiz); // still use _id for updates
    navigate(`/Courses/${courseId}/Quizzes`);
  };

  const handleSaveAndPublish = async () => {
    await updateQuiz(quiz._id, quiz);
    await togglePublish(quiz._id);
    navigate(`/Courses/${courseId}/Quizzes`);
  };

  if (!quiz) return <div>Loading quiz...</div>;

  return (
    <div className="p-4 space-y-4 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold">Edit Quiz</h2>

      <div>
        <label className="block font-semibold">Title</label>
        <input
          value={quiz.title || ""}
          onChange={(e) => handleChange("title", e.target.value)}
          className="border p-2 w-full"
        />
      </div>

      <div>
        <label className="block font-semibold">Description</label>
        <textarea
          value={quiz.description || ""}
          onChange={(e) => handleChange("description", e.target.value)}
          className="border p-2 w-full"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block font-semibold">Quiz Type</label>
          <select
            value={quiz.settings.quizType}
            onChange={(e) => handleSettingsChange("quizType", e.target.value)}
            className="border p-2 w-full"
          >
            <option>Graded Quiz</option>
            <option>Practice Quiz</option>
            <option>Graded Survey</option>
            <option>Ungraded Survey</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold">Time Limit (minutes)</label>
          <input
            type="number"
            value={quiz.settings.timeLimit}
            onChange={(e) =>
              handleSettingsChange("timeLimit", Number(e.target.value))
            }
            className="border p-2 w-full"
          />
        </div>

        <div>
          <label className="block font-semibold">Multiple Attempts</label>
          <select
            value={quiz.settings.multipleAttempts ? "Yes" : "No"}
            onChange={(e) =>
              handleSettingsChange("multipleAttempts", e.target.value === "Yes")
            }
            className="border p-2 w-full"
          >
            <option>No</option>
            <option>Yes</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold">Max Attempts</label>
          <input
            type="number"
            value={quiz.settings.maxAttempts}
            disabled={!quiz.settings.multipleAttempts}
            onChange={(e) =>
              handleSettingsChange("maxAttempts", Number(e.target.value))
            }
            className="border p-2 w-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="block font-semibold">Available From</label>
          <input
            type="date"
            value={quiz.availability?.availableDate?.slice(0, 10) || ""}
            onChange={(e) =>
              handleAvailabilityChange("availableDate", e.target.value)
            }
            className="border p-2 w-full"
          />
        </div>

        <div>
          <label className="block font-semibold">Due Date</label>
          <input
            type="date"
            value={quiz.availability?.dueDate?.slice(0, 10) || ""}
            onChange={(e) =>
              handleAvailabilityChange("dueDate", e.target.value)
            }
            className="border p-2 w-full"
          />
        </div>

        <div>
          <label className="block font-semibold">Available Until</label>
          <input
            type="date"
            value={quiz.availability?.untilDate?.slice(0, 10) || ""}
            onChange={(e) =>
              handleAvailabilityChange("untilDate", e.target.value)
            }
            className="border p-2 w-full"
          />
        </div>
      </div>

      <div className="flex gap-4">
        <button
          onClick={handleSave}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Save
        </button>
        <button
          onClick={handleSaveAndPublish}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Save & Publish
        </button>
        <button
          onClick={() => navigate(`/Courses/${courseId}/Quizzes`)}
          className="text-gray-500 hover:underline"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
