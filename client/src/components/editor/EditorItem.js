import React, { Fragment } from "react";
import "../home/Home.css";
import Editor from "../editor/Editor";
import CodeSnapShot from "../editor/CodeSnapShot";
import LineNumber from "../line/LineNumber";

const EditorItem = () => {
  return (
    <Fragment>
      <div className='editor'>
        {/* <LineNumber /> */}
        <Editor />

        {/* <CodeSnapShot /> */}
      </div>
    </Fragment>
  );
};

export default EditorItem;
