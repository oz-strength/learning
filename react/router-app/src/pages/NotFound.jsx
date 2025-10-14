import { Link } from "react-router-dom";
import PATHS from "../../../constants/path";

export default function NotFound() {
  return (
    <>
      <h2>404 Not Found</h2>
      <Link to={PATHS.ROOT.INDEX}>홈으로 이동</Link>
    </>
  );
}
