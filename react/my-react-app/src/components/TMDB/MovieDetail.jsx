import axios from "axios";
import { useEffect, useState } from "react";

export default function MovieDetail() {
  // https://api.themoviedb.org/3/movie/{movie_id}

  const BASE_URL = `https://api.themoviedb.org/3`;
  const API_KEY = import.meta.env["VITE_TMDB_API_KEY"];

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const config = {
        method: "GET",
        url: `${BASE_URL}/movie/3`,
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        params: {
          language: "ko-KR",
        },
      };

      const res = await axios(config);
      console.log(res.data);
      setMovie(res.data);
    }

    fetchData();
  }, []);

  return (
    <>
      <div>
        <h1>영화 디테일</h1>
        <ul>
          <h1>영화제목</h1>
          <li key={movie.id}>{movie.title}</li>
        </ul>
      </div>
    </>
  );
}
