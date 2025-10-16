import { useDispatch } from "react-redux";
import { increment } from "../store/counterSlice";

export default function CounterIncrement() {
  // dispathch
  const dispatch = useDispatch();

  function clickHandler() {
    // dispatch 함수의 인자로 액션 객체를 전달
    dispatch(increment());
  }
  return (
    <>
      <div>
        <button onClick={clickHandler}>+1</button>
      </div>
    </>
  );
}
