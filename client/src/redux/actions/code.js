import React from "react";
import axios from "axios";
import { POST_HTML, POST_CSS, POST_JS, POST_CODE, CODE_ERROR } from "./types";

// Run Code
export const sendCodes = (code) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify(code, null, "\t");
  console.log("code", body);

  try {
    console.log("11111");
    const res = await axios.post("/runcode", body, config);
    console.log("222222");
    console.log(res.data);
    dispatch({ type: POST_CODE, payload: res.data });
  } catch (err) {
    dispatch({ type: CODE_ERROR });
  }
};

// Update Html
export const updateHtml = (code) => async (dispatch) => {};

// Update CSS

// Update JS
