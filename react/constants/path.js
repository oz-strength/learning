// 경로 문자열을 관리할 상수 객체
const PATHS = {
  ROOT: {
    INDEX: "/",
    ABOUT: "/about",
    POSTS: "/posts",
    POST_DETAIL: "/posts/:postId",

    getPostDetail: (postId) => `/posts/${postId}`,
    PROFILE: "/profile",
  },
  AUTH: {
    INDEX: "/auth",
    LOGIN: "/auth/login",
    SIGNUP: "/auth/signup",
  },
  DUMMY: {
    INDEX: "/dummy",
    CARTS: "/dummy/carts",
    POSTS: "/dummy/posts",
    PRODUCTS: "/dummy/products",
  },
};

export default PATHS;