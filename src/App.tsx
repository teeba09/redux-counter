import { useDispatch, useSelector } from "react-redux";
import {
  IncrementByOne,
  DecrementByOne,
  DecrementByTwo,
  IncrementByTwo,
} from "./redux/actions";

const App = () => {
  const counter = useSelector((state) => state.counter);
  const dispach = useDispatch();
  return (
    <div className=" mt-10">
      <h1 className=" flex justify-center font-bold text-4xl	">
        {" "}
        counter {counter}
      </h1>
      <div className=" grid grid-cols-4 gap-2 mt-4 ">
        <button
          className="rounded-full bg-gray-500 text-white py-5"
          onClick={() => {
            dispach(IncrementByOne());
          }}
        >
          Increment By One
        </button>
        <button
          className="rounded-full bg-gray  bg-blue-300  text-white"
          onClick={() => {
            dispach(DecrementByOne());
          }}
        >
          {" "}
          Decrement By One{" "}
        </button>
        <button
          className="rounded-full bg-gray bg-pink-300 text-white"
          onClick={() => {
            dispach(IncrementByTwo(2));
          }}
        >
          {" "}
          Increment By Two
        </button>
        <button
          className="rounded-full bg-gray bg-purple-300 text-white"
          onClick={() => dispach(DecrementByTwo(2))}
        >
          {" "}
          Decrement By Two{" "}
        </button>
      </div>
    </div>
  );
};

export default App;
