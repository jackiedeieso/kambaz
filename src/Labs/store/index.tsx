import { configureStore } from "@reduxjs/toolkit";
import helloReducer from "../Lab 4/ReduxExamples/HelloRedux/helloReducer";
import counterReducer from "../Lab 4/ReduxExamples/CounterRedux/counterReducer";
import addReducer from "../Lab 4/ReduxExamples/AddRedux.tsx/addReducer";
import todosReducer from "../Lab 4/ReduxExamples/todos/todosReducer";



const store = configureStore({
  reducer: { helloReducer,
             counterReducer,
             addReducer,
             todosReducer,
   }});

export default store;