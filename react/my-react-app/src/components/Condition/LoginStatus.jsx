export default function LoginStatus({ isLogin, userName }) {
  return (
    <>
      {/* <p>{isLogin ? "로그인 상태" : "로그아웃 상태"}</p> */}
      {/* 버튼 태그 내부에 삼항연산자 사용. 조건식은 isLogin이 참이면 문자열 '로그아웃' 생성, 거짓이면 '로그인' 생성 */}
      <button
        className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold 
             shadow-md hover:bg-blue-700 active:bg-blue-800 
             disabled:bg-gray-400 disabled:cursor-not-allowed 
             transition-colors duration-200">
        {isLogin ? "로그아웃" : "로그인"}
      </button>

      {/* isLogin이 true면 userName을 보여주고, false면 "로그인 하세요"을 보여줌 */}
      <p>{isLogin ? `${userName}님 환영합니다.` : "로그인 하세요."}</p>
    </>
  );
}
