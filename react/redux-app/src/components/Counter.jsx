import { useSelector } from "react-redux";

export default function Counter() {
  const count = useSelector(state => state.counter.count);
  // useEffect(() => {
  //   console.log("count", count);
  // }, []);
  return <div> 전역상태 count 값 : {count}</div>;
}
