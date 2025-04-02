import{ useEffect, useState } from "react";
import axios from "axios";
import * as client from "./client";

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;

export default function HttpClient() {
  const [welcomeOnClick, setWelcomeOnClick] = useState("");
  const [welcomeFromClient, setWelcomeFromClient] = useState("");
  const [welcomeOnLoad, setWelcomeOnLoad] = useState("");

  const fetchWelcomeOnClick = async () => {
    const response = await axios.get(`${REMOTE_SERVER}/lab5/welcome`);
    setWelcomeOnClick(response.data);
  };

  const fetchWelcomeUsingClient = async () => {
    const message = await client.fetchWelcomeMessage();
    setWelcomeFromClient(message);
  };

  useEffect(() => {
    const fetchWelcomeOnLoad = async () => {
      const welcome = await client.fetchWelcomeMessage();
      setWelcomeOnLoad(welcome);
    };
    fetchWelcomeOnLoad();
  }, []);

  return (
    <div>
      <h3>HTTP Client</h3>
      <hr />

      <h4>Requesting on Click (Axios)</h4>
      <button className="btn btn-primary me-2" onClick={fetchWelcomeOnClick}>
        Fetch Welcome
      </button>
      <br />
      Response from server (Axios): <b>{welcomeOnClick}</b>

      <hr />

      <h4>Requesting on Click (Client File)</h4>
      <button className="btn btn-secondary me-2" onClick={fetchWelcomeUsingClient}>
        Fetch via Client
      </button>
      <br />
      Response from client function: <b>{welcomeFromClient}</b>

      <hr />

      <h4>Requesting on Load</h4>
      Response from server on load: <b>{welcomeOnLoad}</b>
    </div>
  );
}
