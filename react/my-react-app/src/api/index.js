// src/api/index.js
import axios from "axios";

const API_KEY = import.meta.env["VITE_TMDB_API_KEY"];

// axios 인스턴스 생성과 할당
const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3", // 기본 URL : 요청 URL의 기본 경로
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  }, // 공통 헤더 : 모든 요청에 포함되는 헤더
  params: { language: "ko-KR" }, // 공통 쿼리 파라미터 : 모든 요청에 포함되는 쿼리 파라미터
  timeout: 5000, // 요청 제한 시간 : 요청과 응답이 5000ms 이상 걸리면 에러가 발생한다
});

// 인스턴스 내보내기
export default axiosInstance;
