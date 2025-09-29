export default function OnChange() {
  const handleChange = event => {
    console.log(`입력 이벤트 발생, 입력 값: ${event["target"]["value"]}`);
  };

  function handleNumberChange(event) {
    // 사용자 입력 값이 10 보다 작으면
    // console.log() 로 "10 보다 작은 수를 입력했습니다." 출력
    if (event["target"]["value"] < 10) {
      console.log("10 보다 작은 수를 입력했습니다.");
    }
  }

  return (
    <div>
      {/* onChange 이벤트 속성에 handleNumberChange 함수 연결 */}
      <input
        type="number"
        onChange={event => handleNumberChange(event)}
        className="w-full px-3 py-2 border rounded-lg 
               border-gray-300 
               mt-4
               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
               transition"
      />

      <input
        className="w-full px-3 py-2 border rounded-lg 
               border-gray-300 
               mt-4
               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
               transition"
        placeholder="텍스트를 입력하세요"
        type="text"
        onChange={event => handleChange(event)}
      />
    </div>
  );
}
