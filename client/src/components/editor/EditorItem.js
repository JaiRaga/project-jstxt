import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core";
import "../home/Home.css";
import Editor from "../editor/Editor";
import EditorTitle from "./EditorTitle";
import CodeSnapShot from "../editor/CodeSnapShot";
import LineNumber from "../line/LineNumber";

// const useStyles = makeStyles((theme) => ({
//   title: {
//     backgroundColor: "blue",
//     zIndex: 5,
//     gridColumn: "4 / -1",
//     gridRow: "1"
//   }
// }));

const EditorItem = ({ editorid }) => {
  return (
    <Fragment>
      <div className='editor'>
        {/* <LineNumber /> */}
        <EditorTitle title={editorid} />
        <Editor editorid={editorid} />

        {/* <CodeSnapShot /> */}
      </div>
    </Fragment>
  );
};

export default EditorItem;
