export default function OnSubmit() {
  const handleSubmit = event => {
    event.preventDefault();

    // e["target"]["elements"] : form 요소의 입력 요소들
    const elements = event["target"]["elements"];

    // 구조 분해 할당을 활용한 각 요소를 변수에 할당
    const { email, password, name } = elements;

    console.log(`이메일 입력 값: ${email["value"]}`);
    console.log(`비밀번호 입력 값: ${password["value"]}`);
    console.log(`이름 입력 값: ${name["value"]}`);
  };

  return (
    <div>
      <form
        onSubmit={event => handleSubmit(event)}
        className="max-w-md mx-auto mt-8 p-6 bg-white rounded-xl shadow-md space-y-4">
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded-lg
               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
               transition"
          type="email"
          name="email"
          placeholder="Email"
        />
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded-lg
               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
               transition"
          type="password"
          name="password"
          placeholder="Password"
        />
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded-lg
               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
               transition"
          type="text"
          name="name"
          placeholder="Name"
        />
        <button
          className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg
               hover:bg-blue-700 active:bg-blue-800
               transition-colors duration-200"
          type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
