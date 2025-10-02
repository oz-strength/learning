// Movie 컴포넌트
// Props로 전달 받은 영화 데이터를 화면에 표시한다
// 화면에 표시할 영화 정보
// 영화 제목(title)
// 영화 줄거리(overview)
// 영화 개봉일(release_date)
// 영화 평균 평점(vote_average)

export default function Movie({
  id,
  title,
  overview,
  release_date,
  vote_average,
}) {
  return (
    <>
      <div
        key={id}
        className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        {/* 카드 내용 */}
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2 text-gray-800 line-clamp-1">
            {title}
          </h2>

          <p className="text-gray-600 text-sm mb-4 line-clamp-3">{overview}</p>

          {/* 메타 정보 */}
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-500">
              개봉일: {release_date || "미정"}
            </span>
            <span className="bg-yellow-400 text-gray-800 px-2 py-1 rounded font-semibold">
              ⭐ {vote_average?.toFixed(1) ?? "N/A"}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
