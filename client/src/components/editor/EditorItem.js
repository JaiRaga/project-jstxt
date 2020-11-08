import React, { Fragment } from "react";
import "../home/Home.css";
import Editor from "../editor/Editor";
import CodeSnapShot from "../editor/CodeSnapShot";
import LineNumber from "../line/LineNumber";

const EditorItem = ({ editorId }) => {
  return (
    <Fragment>
      <div className='editor'>
        {/* <LineNumber /> */}
        <Editor editorId={editorId} />

        {/* <CodeSnapShot /> */}
      </div>
    </Fragment>
  );
};

export default EditorItem;
