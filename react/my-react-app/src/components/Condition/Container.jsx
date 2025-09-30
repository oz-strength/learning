import AdminLink from "./AdminLink";
import LoginStatus from "./LoginStatus";

export default function Container() {
  return (
    <>
      {/* 첫번째 컴포넌트에는 isLogin 속성에 true 전달 */}
      {/* userName 속성에 "홍길동" 전달 */}
      <LoginStatus isLogin={true} userName="홍길동" />
      {/* 두번째 컴포넌트에는 isLogin 속성에 false 전달 */}
      {/* userName 속성에 "김철수" 전달 */}
      <LoginStatus isLogin={false} userName="김철수" />

      {/* isAdmin 속성에 true 전달 */}
      <AdminLink isAdmin={true} />
      {/* isAdmin 속성에 false 전달 */}
      <AdminLink isAdmin={false} />
    </>
  );
}
