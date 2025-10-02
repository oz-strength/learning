import axiosInstance from "./index.js";

export async function getPopularMovies() {
  const config = {
    method: "GET",
    url: `/movie/popular`,
    params: {
      page: 1,
    },
  };

  try {
    const res = await axiosInstance(config);
    return res;
  } catch (err) {
    console.error(
      "영화 데이터 불러오기 실패:",
      err.response?.status,
      err.response?.data,
    );
  }
}
