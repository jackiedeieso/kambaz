import { Routes, Route, useParams } from "react-router-dom";
import List from "./List";
import Editor from "./Editor";
import TakeQuiz from "./TakeQuiz";
import Results from "./Results";
import Preview from "./Preview";

export default function Quizzes() {
  console.log("🔥 Quizzes.tsx is rendering");
  const { cid } = useParams();

  if (!cid) return <div>Missing course ID</div>;

  return (
    <Routes>
      <Route path="/" element={<List courseId={cid} />} />
      <Route path=":quizId/edit" element={<Editor courseId={cid} />} />
      <Route path=":quizId/preview" element={<Preview />} />
      <Route path=":quizId/take" element={<TakeQuiz />} />
      <Route path=":quizId/results" element={<Results />} />
    </Routes>

    
  );
}