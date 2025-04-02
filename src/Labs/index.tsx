import Lab1 from "./Lab 1";
import Lab2 from "./Lab 2";
import Lab3 from "./Lab 3";
import Lab4 from "./Lab 4";
import Lab5 from "./Lab 5";
import TOC from "./TOC";
import store from "./store";
import { Provider } from "react-redux";
import { Navigate, Route, Routes } from "react-router";

export default function Labs() {
  return (
    <Provider store={store}>
      <div id="wd-labs">
        <h1>Labs</h1>

        <div id="wd-my-info">

          <h1>Jacqueline Deieso</h1>

          <h2>SEC 202530</h2>

          <a href="https://github.com/jackiedeieso/kambaz" id="wd-github" target="_blank">My Repo</a><br/>
          <a href="https://jackie-deieso-kambaz.netlify.app/#/Kambaz/Account/Signin" id="wd-netlify" target="_blank">My Project Deployed</a><br/>
          <a
          href="https://github.com/jackiedeieso/kambaz-node-server-app"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-dark mt-3"
        >
          View Backend on GitHub
        </a>

        </div>
        
        <TOC />
        <Routes>
          <Route index element={<Navigate to="Lab1" />} />
          <Route path="Lab1" element={<Lab1 />} />
          <Route path="Lab2/*" element={<Lab2 />} />
          <Route path="Lab3" element={<Lab3 />} />
          <Route path="Lab4" element={<Lab4 />} />
          <Route path="Lab5" element={<Lab5 />} />
        </Routes>
      </div>
    </Provider>
);}
