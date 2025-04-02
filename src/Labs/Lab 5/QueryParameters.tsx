import { useState } from "react";
import { FormControl, Button } from "react-bootstrap";

const REMOTE_SERVER = "http://localhost:4000";

function QueryParameters() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [result, setResult] = useState<string | null>(null);

  const calculate = async (operation: string) => {
    try {
      const response = await fetch(
        `${REMOTE_SERVER}/lab5/calculator?operation=${operation}&a=${a}&b=${b}`
      );
      const text = await response.text();
      setResult(text);
    } catch (error) {
      setResult("Error connecting to server");
      console.error(error);
    }
  };

  return (
    <div id="wd-query-parameters">
      <h3>Query Parameters</h3>

      <FormControl
        id="wd-query-parameter-a"
        className="mb-2"
        value={a}
        type="number"
        onChange={(e) => setA(Number(e.target.value))}
      />
      <FormControl
        id="wd-query-parameter-b"
        className="mb-2"
        value={b}
        type="number"
        onChange={(e) => setB(Number(e.target.value))}
      />

      <div className="mb-3">
        <Button
          id="wd-query-parameter-add"
          className="me-2"
          onClick={() => calculate("add")}
        >
          Add {a} + {b}
        </Button>
        <Button
          id="wd-query-parameter-subtract"
          className="me-2"
          onClick={() => calculate("subtract")}
        >
          Subtract {a} - {b}
        </Button>
        <Button
          id="wd-query-parameter-multiply"
          className="me-2"
          onClick={() => calculate("multiply")}
        >
          Multiply {a} × {b}
        </Button>
        <Button
          id="wd-query-parameter-divide"
          onClick={() => calculate("divide")}
        >
          Divide {a} ÷ {b}
        </Button>
      </div>

      {result !== null && (
        <div id="wd-query-parameter-result">
          <strong>Result:</strong> {result}
        </div>
      )}

      <hr />
    </div>
  );
}

export default QueryParameters;
