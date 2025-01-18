import Lab1 from "./Lab 1";
import Lab2 from "./Lab 2";
import Lab3 from "./Lab 3";
import TOC from "./TOC";

import { Route, Routes, Navigate } from "react-router";

export default function Labs() {
  return (
    <div id="wd-labs">
      <h1>Labs</h1>
      <h1>Jacqueline Deieso</h1>

      <a href="https://github.com/jackiedeieso/kambaz" id="wd-github" target="_blank">My Repo</a><br/>
      <a href="https://jackie-deieso-kambaz.netlify.app/#/Kambaz/Account/Signin" id="wd-netlify" target="_blank">My Repo</a><br/>

      <TOC />
      <Routes>
        <Route path="/" element={<Navigate to="Lab1"/>} />
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2/*" element={<Lab2 />} />
        <Route path="Lab3" element={<Lab3 />} />
      </Routes>
    </div>
);}
