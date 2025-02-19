import VariablesAndConstants from "./VariablesAndConstants";
import VariableTypes from "./VariableTypes";
import BooleanVariables from "./BooleanVariables";
import IfElse from "./IfElse";
import TernaryOperator from "./TernaryOperator";
import ConditionalOutputIfElse from "./ConditionalOutputIfElse";
import ConditionalOutputInline from "./ConditionalOutputInline";
import LegacyFunctions from "./LegacyFunctions";
import ArrowFunctions from "./ArrowFunctions";
import ImpliedReturn from "./ImpliedReturn";
import TemplateLiterals from "./TemplateLiterals";
import SimpleArrays from "./SimpleArrays";
import ArrayIndexAndLength from "./ArrayIndexAndLength";
import AddingAndRemovingToFromArrays from "./AddingAndRemovingToFromArrays";
import ForLoops from "./ForLoops";
import MapFunction from "./MapFunction";
import FindFunction from "./FindFunction";
import FilterFunction from "./FilterFunction";
import JsonStringify from "./JsonStringify";
import House from "./House";
import TodoItem from "./todos/TodoItem";
import TodoList from "./todos/TodoList";
import Spreading from "./Spreading";
import Destructing from "./Destructing";
import FunctionDestructing from "./FunctionDestructing";
import {add, subtract, multiply, divide} from "./Math";
import DestructingImports from "./DestructingImports";
import Classes from "./Classes";
import Add from "./Add";
import Square from "./Square";
import Highlight from "./Highlight";
import AddPathParameters from "./AddPathParameters";
import PathParameters from "./PathParameters";

export default function Lab3() {
  console.log('Hello World!');
  const sum = add(5, 3);
  const difference = subtract(10, 4);
  const product = multiply(6, 7);
  const quotient = divide(20, 5);
    return (
      <div id="wd-lab3">
        <h2>Lab 3</h2>
        <VariablesAndConstants />
        <VariableTypes />
        <BooleanVariables />
        <IfElse />
        <TernaryOperator />
        <ConditionalOutputIfElse />
        <ConditionalOutputInline />
        <LegacyFunctions />
        <ArrowFunctions />
        <ImpliedReturn />
        <TemplateLiterals />
        <SimpleArrays />
        <ArrayIndexAndLength />
        <AddingAndRemovingToFromArrays />
        <ForLoops />
        <MapFunction />
        <FindFunction />
        <FilterFunction />
        <JsonStringify />
        <House />
        <TodoItem />
        <TodoList />
        <Spreading />
        <Destructing />
        <FunctionDestructing />

        <div>
          <h3>Math</h3>
          <p>Addition (5 + 8): {sum}</p>
          <p>Subtraction (10 - 2): {difference}</p>
          <p>Multiplication (6 * 5): {product}</p>
          <p>Division (21 / 3): {quotient}</p>
        </div>

        <DestructingImports />
        <Classes />

        <Add a={3} b={4} />

        <h4>Square of 4</h4>
        <Square>4</Square>
        <hr />

        <Highlight>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
          vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
        </Highlight>

        <AddPathParameters />
        <PathParameters />




      </div>
  );}
  