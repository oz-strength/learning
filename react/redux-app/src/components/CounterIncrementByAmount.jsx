import { useState } from "react";
import { useDispatch } from "react-redux";
import { incrementByAmount } from "../store/counterSlice";

export default function CounterIncrementByAmount() {
  const dispatch = useDispatch();

  const [payload, setPayload] = useState(0);

  return (
    <>
      <input
        type="number"
        value={payload}
        onChange={e => setPayload(Number(e.target.value))}
      />
      <button onClick={() => dispatch(incrementByAmount(payload))}>증가</button>
    </>
  );
}
