import { configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage"; // localStorage
import authReducer from "./authSlice";
import counterReducer from "./counterSlice";
const authPersistConfig = {
  key: "auth", // 상태 이름
  storage: storage, // localStorage에 저장
  whitelist: ["token"], // 저장할 상태 이름, token 상태만 저장
};

const persistAuthReducer = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: persistAuthReducer, // persist 적용된 리듀서 사용
  },
  // middleware 속성 추가
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Persist  스토어 생성 및 내보내기
export const persistor = persistStore(store);
