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
    incrementByAmount(state, action) {
      state.count += Number(action.payload);
    },

    // 상태 count를 0으로 초기화
    reset(state) {
      state.count = 0;
    },
  },
});

export const { increment, incrementByAmount, reset } = counterSlice.actions;
export default counterSlice.reducer;