import { createAction, createActions, handleActions } from "redux-actions";

export const { showAll, showComplete } = createActions(
  "SHOW_ALL",
  "SHOW_COMPLETE",
  {
    prefix: "redux-start/filter",
  }
);

const initialState = "ALL";

const reducer = handleActions(
  {
    SHOW_ALL: (state, action) => "ALL",
    SHOW_COMPLETE: () => "COMPLETE",
  },
  initialState,
  { prefix: "redux-start/filter" }
);

// console.log(createAction("HELLO")("안녕하세요"));

// const SHOW_ALL = "redux-start/filter/SHOW_ALL";
// const SHOW_COMPLETE = "redux-start/filter/SHOW_COMPLETE";

// export function showAll() {
//   return { type: SHOW_ALL };
// }

// export function showComplete() {
//   return { type: SHOW_COMPLETE };
// }

// export default function reducer(previousState = initialState, action) {
//   // 초기값을 설정해주는 부분
//   if (action.type === SHOW_COMPLETE) {
//     return "COMPLETE";
//   }

//   if (action.type === SHOW_ALL) {
//     return "ALL";
//   }

//   return previousState;
// }

export default reducer;
