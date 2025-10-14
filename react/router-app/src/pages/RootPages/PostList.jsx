import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import PATHS from "../../../../constants/path";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const params = searchParams;
    const order = params.get("order") ?? "asc";
    const sortBy = params.get("sortBy") ?? "id";

    async function getPosts() {
      const response = await axios.get(
        `https://dummyjson.com/posts?sortBy=${sortBy}&order=${order}`,
      );
      console.log(response);
      setPosts(response.data.posts);
    }
    getPosts();
  }, [searchParams]);

  return (
    <>
      <div>
        <button
          className="border-2 p-2 cursor-pointer"
          onClick={() => {
            setSearchParams({ sortBy: "id", order: "asc" });
          }}>
          ID 오름차순
        </button>
        <button
          className="border-2 p-2 cursor-pointer"
          onClick={() => {
            setSearchParams({ sortBy: "id", order: "desc" });
          }}>
          ID 내림차순
        </button>
      </div>
      <div>
        {posts.map(post => {
          return (
            <div key={post.id}>
              <Link to={PATHS.ROOT.getPostDetail(post.id)}>
                No. {post.id} - {post.title}
              </Link>
              <br />
            </div>
          );
        })}
      </div>
    </>
  );
}
