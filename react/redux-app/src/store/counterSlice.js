import { createSlice } from "@reduxjs/toolkit";
const initialState = { count: 0 };

// 슬라이스생성
const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment(state) {
      state.count += 1;
    },
  },
});
