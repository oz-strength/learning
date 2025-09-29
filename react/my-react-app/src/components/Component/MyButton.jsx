export default function MyButton() {
  return (
    <button
      className="
        bg-blue-500        /* 배경색 */
        hover:bg-blue-600  /* 호버 시 배경색 변경 */
        text-white         /* 글자색 */
        font-semibold      /* 글자 굵기 */
        py-2 px-4          /* 세로/가로 패딩 */
        rounded            /* 모서리 둥글게 */
        shadow-md          /* 그림자 */
        transition         /* 호버 시 부드러운 변화 */
        duration-200
        ease-in-out
      ">
      버튼
    </button>
  );
}
