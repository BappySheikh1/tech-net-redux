import { RootState } from "./redux/store";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const { count } = useAppSelector((state: RootState) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="flex items-center">
        <button
          className=" border border-green-700 btn btn-outline p-2"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>

        <button
          className=" border border-green-700 btn btn-outline p-2"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          Increment By Value
        </button>
        <div className="mx-2">{count}</div>
        <button
          className="p-2 border border-red-700"
          onClick={() => dispatch(decrement())}
        >
          decrement
        </button>
      </div>
    </>
  );
}

export default App;
