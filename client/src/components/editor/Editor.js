import React, { Fragment, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import prettier from "prettier/standalone";
import babel from "prettier/parser-babel";
import htmlparser from "prettier/parser-html";
import cssparser from "prettier/parser-postcss";
import "../home/Home.css";
import CodeSnapShot from "./CodeSnapShot";
import LineNumber from "../line/LineNumber";
import { sendCodes } from "../../redux/actions/code";

const useStyles = makeStyles((theme) => ({
  container: {
    gridColumn: "span 24",
    gridRow: "span 24"
  },
  textarea: {
    resize: "none",
    gridColumn: "span 20",
    gridRow: "span 24",
    lineHeight: "21px",
    // padding: "8px 10px",
    fontSize: "15.5px",
    paddingRight: "44px",
    border: "none",
    outline: "none",
    backgroundColor: "#000e",
    color: "#28abb9",
    // overflowX: "auto",
    overflowY: "auto"
  },
  nums: {
    marginRight: "auto"
  },
  lineBorder: {
    borderTop: "1px solid #898b8a",
    borderBottom: "1px solid #898b8a"
  }
}));

const Editor = ({ editorid }) => {
  const classes = useStyles();
  const [lines, setLines] = useState(0);
  const [rawCode, setRawCode] = useState("");
  const [formattedCode, setFormattedCode] = useState("");
  const dispatch = useDispatch();

  const changeCode = async (e) => await setRawCode(e.target.value);

  // When user enters text
  const onChange = (e) => {
    console.log(e.target.value);

    // const body = JSON.stringify(e.target.value, null, "\t");
    // console.log("code", body);

    setRawCode((prev) => console.log(prev));
    // setRawCode(e.target.value);
    changeCode(e);

    dispatch(sendCodes({ [editorid]: rawCode }));

    // console.log(e.target.value.split("\n").length);

    // setFormattedCode(
    //   prettier.format(rawCode, {
    //     semi: false,
    //     parser: "babel",
    //     plugins: [babel]
    //   })
    // )
    // console.log(rawCode, rawCode.split("\n"));
    // console.log(formattedCode, formattedCode.split("\n"));

    // Line Number
    // setLines(e.target.value.split("\n").length);
    // console.log(e.target.value.split("\n").length);
    // console.log(lines);

    console.log(e.target.value.indexOf("\b"));
    let input = document.getElementById("code");

    // height of content
    let ht = input.style.height;

    input.style.height = 0;

    let contentHt = `${input.scrollHeight} px`;
    console.log("textarea content height", input.style.height);

    input.style.height = `${input.scrollHeight} px`;
    input.style.height = ht; // original height of editor (content + free space)

    contentHt = parseInt(contentHt);
    console.log(Math.floor(contentHt / 21)); // divide by line height to get no of lines in editor

    // No of Lines
    let lines_1 = e.target.value.split("\n").length,
      lines_2 = Math.floor(contentHt / 21);

    lines_1 > lines_2 ? setLines(lines_1) : setLines(lines_2);
    // console.dir(input);
    handleScrollChange(e);
  };

  // When user clicks inside textarea
  const onClick = async () => {
    // setFormattedCode(
    //   prettier.format(rawCode, {
    //     semi: false,
    //     parser: "babel",
    //     plugins: [babel, htmlparser, cssparser],
    //     tabWidth: 4,
    //     proseWrap: "always"
    //   })
    // );
    // setRawCode(formattedCode);

    // dispatch(sendCodes({ [editorid]: rawCode }));

    // compiles formatted code
    // let res = await node.runSource(formattedCode);

    console.log("clicked!");
    // console.log(res);

    let input = document.getElementById("code");
    // input.setSelectionRange(0,1)
    // console.log(input.value, input.selectionStart, input.selectionEnd);
    // console.log(
    //   input.value.substring(0, input.selectionStart).split("\n"),
    //   input.value.substring(0, input.selectionStart).split("\n").length,
    //   input.style,
    //   input.value
    // );

    // input.value.style = "1px solid white";

    // input = <span className={classes.lineBorder}>{input.value}</span>;
  };

  // when user scrolls inside textarea
  const handleScrollChange = (evt) => {
    console.log("Scrolling");
    let txtareas = document.getElementsByTagName("textarea");
    for (let i = 1; i < txtareas.length; i++) {
      const txtele = txtareas[i];
      const lineele = txtareas[i - 1];
      lineele.scrollTop = txtele.scrollTop;
      i++;
    }
  };

  const onPaste = (evt) => {
    console.log(evt.clipboardData.getData("Text").split("/\r|\r\n|\n/").length);
    console.log(evt.clipboardData.getData("text/plain").split("\n").length);
  };

  return (
    <div className='codeeditor'>
      <LineNumber lines={lines} />
      <textarea
        id='code'
        className={classes.textarea}
        editorid={editorid}
        name='editor'
        value={rawCode || formattedCode}
        onChange={(e) => onChange(e)}
        onClick={onClick}
        onScroll={handleScrollChange}
        onPaste={onPaste}
        autofocus
        autoCorrect='off'
        autoCapitalize='off'
        spellCheck='false'
        nowrap='nowrap'
        // wrap='off'
      />
      <CodeSnapShot />
      {false ? <LineNumber /> : null}
    </div>
  );
};

export default Editor;
