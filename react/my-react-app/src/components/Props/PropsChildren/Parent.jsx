import Child from "./Child";

export default function Parent() {
  return (
    <>
      <Child>
        <h1>안녕하세요</h1>
      </Child>
      <Child>
        <p>반갑습니다</p>
      </Child>
      <Child>
        <button>클릭</button>
      </Child>
    </>
  );
}
