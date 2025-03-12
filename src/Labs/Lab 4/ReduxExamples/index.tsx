import HelloRedux from "./HelloRedux";
import CounterRedux from "./CounterRedux";
import AddRedux from "./AddRedux.tsx";
import TodoList from "./todos/TodoList.tsx";

export default function ReduxExamples() {
  return(
    <div>
      <h2>Redux Examples</h2>

      <HelloRedux />

      <CounterRedux />

      <AddRedux />

      <TodoList />

      
    </div>
  );
};
