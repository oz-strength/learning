export default function AdminLink({ isAdmin }) {
  return (
    <>
      <h1>AdminLink Component</h1>
      {/* isAdmin이 true면 "관리자"를 보여주고, false면 "일반 사용자"를 보여줌 */}
      <p>현재 권한 : {isAdmin ? "관리자" : "일반 사용자"}</p>

      {/* && 연산자활용 */}
      {/* isAdmin 이 참이면 <a>관리 페이지 이동</a> 이라는 요소 화면 표시 */}
      {isAdmin && <a href="/admin">관리 페이지 이동</a>}
    </>
  );
}
