export default function OnClick() {
  function handleClick() {
    alert("버튼이 클릭되었습니다!");
  }
  return (
    <>
      {/* 버튼 클릭 시 handleClick 함수 호출 */}
      <button
        className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg 
             hover:bg-blue-700 active:bg-blue-800 
             focus:outline-none focus:ring-2 focus:ring-blue-400 
             transition-colors duration-200"
        onClick={handleClick}>
        클릭
      </button>
    </>
  );
}
