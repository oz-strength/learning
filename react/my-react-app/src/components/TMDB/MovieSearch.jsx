// 요구 사항
// 영화 이름 검색 API를 활용하여 영화 이름을 검색하고, 검색 결과를 표시한다

import axios from "axios";
import { useState } from "react";
import Movie from "./Movie";

// 요청을 할 때 적절한 헤더(headers)와 쿼리 파라미터(params)를 설정한다
// MovieSearch 컴포넌트
// input 요소의 value 속성을 상태로 관리한다
// axios를 사용하여 영화 이름 검색 API를 요청한다
// 응답받은 영화 데이터를 상태에 저장하고 map() 메서드로 Movie 컴포넌트를 반복 생성한다
// Movie 컴포넌트에 영화 데이터를 Props로 전달한다

// BASE_URL 과 API_KEY 를 선언하고, 적절한 값을 할당한다
const BASE_URL = `https://api.themoviedb.org/3`;
const API_KEY = import.meta.env["VITE_TMDB_API_KEY"];

export default function MovieSearch() {
  // 검색 결과와 검색어를 관리할 적절한 상태를 생성한다
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  // onSubmit 이벤트와 onChange 이벤트의 핸들러 함수를 정의한다
  //fetch('https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1', options)
  const handleSubmit = e => {
    e.preventDefault();
    fetchMovies();
  };

  const fetchMovies = () => {
    console.log("query:", query);
    const config = {
      method: "GET",
      url: `${BASE_URL}/search/movie`,
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      params: {
        query: query,
        language: "ko-KR",
      },
    };

    axios(config)
      .then(res => {
        setMovies(res.data.results);
        console.log(movies);
      })
      .catch(error => {
        console.error("Error fetching movies:", error);
      });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 검색창 - 화면 중앙 배치 */}
      <div className="flex items-center justify-center pt-20 pb-12">
        <form
          onSubmit={e => {
            handleSubmit(e);
          }}
          className="w-full max-w-2xl px-4">
          <div className="flex gap-2 shadow-lg">
            <input
              type="text"
              placeholder="영화 이름을 입력하세요"
              onChange={e => {
                setQuery(e.target.value);
              }}
              className="flex-1 px-6 py-4 text-lg rounded-l-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
            />
            <input
              type="submit"
              value="검색"
              className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-r-lg hover:bg-blue-700 cursor-pointer transition-colors"
            />
          </div>
        </form>
      </div>

      {/* 영화 결과 - 그리드 레이아웃 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 pb-12">
        {movies.map(movie => (
          <Movie key={movie.id} {...movie} />
        ))}
      </div>
    </div>
    // <div>
    //   <form
    //     onSubmit={e => {
    //       // form 태그의 onSubmit 속성에서 실행할 함수를 정의하고, 호출한다
    //       handleSubmit(e);
    //     }}>
    //     <input
    //       type="text"
    //       placeholder="영화 이름"
    //       onChange={e => {
    //         // input 태그의 onChange 속성에서 실행할 함수를 정의하고, 호출한다
    //         setQuery(e.target.value);
    //       }}
    //     />
    //     <input type="submit" value="검색" />
    //   </form>
    //   <ul>
    //     {/* Movie 컴포넌트를 활용하여 검색된 영화 데이터를 반복 생성하여 표시 */}
    //     {movies.map(movie => (
    //       <Movie key={movie.id} {...movie} />
    //     ))}
    //   </ul>
    // </div>
  );
}
