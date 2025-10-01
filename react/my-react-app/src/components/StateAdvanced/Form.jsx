import { useState } from "react";

export default function Form() {
  const [form, setForm] = useState({
    username: "",
    age: 0,
    email: "",
  });

  function handleChange(e) {
    // 입력이 발생한 이벤트의 요소의 name과 value
    const { name, value } = e.target;

    const newForm = { ...form, [name]: value };

    // 입력이 발생한 요소의 상태만 변경
    setForm(newForm);
  }

  return (
    <>
      <form>
        {/* 3개의 input 요소의 값을 상태로 관리 */}
        <input
          className="border-2 border-black"
          type="text"
          name="username"
          value={form["username"]}
          onChange={e => handleChange(e)}
        />
        <input
          className="border-2 border-black"
          type="number"
          name="age"
          value={form["age"]}
          onChange={e => handleChange(e)}
        />
        <input
          className="border-2 border-black"
          type="email"
          name="email"
          value={form["email"]}
          onChange={e => handleChange(e)}
        />
      </form>
    </>
  );
}
