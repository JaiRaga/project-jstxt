import { POST_CODE } from "../actions/types";

const initialState = {
  html: "",
  css: "",
  js: "",
  loading: true
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case POST_CODE:
      return {
        ...state,
        ...payload,
        loading: false
      };

    default:
      return state;
  }
};
