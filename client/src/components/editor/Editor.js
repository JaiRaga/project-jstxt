import React, { Fragment, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { v4 as uuidv4 } from "uuid";
import prettier from "prettier/standalone";
import babel from "prettier/parser-babel";
import htmlparser from "prettier/parser-html";
import cssparser from "prettier/parser-postcss";
import "../home/Home.css";
import CodeSnapShot from "./CodeSnapShot";
import LineNumber from "../line/LineNumber";

const useStyles = makeStyles((theme) => ({
  container: {
    gridColumn: "span 23",
    gridRow: "span 24"
  },
  textarea: {
    resize: "none",
    gridColumn: "span 20",
    gridRow: "span 24",
    lineHeight: "21px",
    fontSize: "15.5px",
    paddingRight: "74px",
    border: "none",
    outline: "none",
    backgroundColor: "#000e",
    color: "#28abb9",
    overflowY: "auto"
  },
  nums: {
    marginRight: "auto"
  }
}));

const Editor = () => {
  const classes = useStyles();
  const [lines, setLines] = useState(0);
  const [rawCode, setRawCode] = useState("");
  const [formattedCode, setFormattedCode] = useState("");

  const onChange = (e) => {
    setRawCode(e.target.value);
    // setFormattedCode(
    //   prettier.format(rawCode, {
    //     semi: false,
    //     parser: "babel",
    //     plugins: [babel]
    //   })
    // )
    console.log(rawCode, rawCode.split("\n"));
    // console.log(formattedCode, formattedCode.split("\n"));

    // Line Number
    setLines(rawCode.split("\n").length);
    console.log(lines);
  };

  const onClick = () => {
    // setFormattedCode(
    //   prettier.format(rawCode, {
    //     semi: false,
    //     parser: "html",
    //     plugins: [babel, htmlparser, cssparser],
    //     tabWidth: 2
    //   })
    // );
    // setRawCode(formattedCode);
  };

  const handleScrollChange = (evt) => {
    console.log("Scrolling");
    // console.log(document.getElementById("code"));
    // const txtele = document.getElementById("code");
    // let vertical1 = txtele.scrollTop;
    // const lineele = document.getElementById("lineNum");
    // let vertical2 = lineele.scrollTop;
    // lineele.scrollTop = txtele.scrollTop;
    // console.log(txtele.scrollTop, lineele.scrollTop);
    // console.log(document.getElementById("lineNum"));
    // console.log(document.getElementsByTagName("textarea").length);
    // console.log(txtele, lineele);

    let txtareas = document.getElementsByTagName("textarea");
    for (let i = 1; i < txtareas.length; i++) {
      const txtele = txtareas[i];
      const lineele = txtareas[i - 1];
      lineele.scrollTop = txtele.scrollTop;
      i++;
    }
  };

  return (
    <div className='codeeditor'>
      <LineNumber lines={lines} />
      <textarea
        id='code'
        className={classes.textarea}
        name='editor'
        value={formattedCode || rawCode}
        onChange={onChange}
        onClick={onClick}
        onScroll={handleScrollChange}
        autofocus
        autoCorrect='off'
        autoCapitalize='off'
        spellCheck='false'
      />
      <CodeSnapShot />
      {false ? <LineNumber /> : null}
    </div>
  );
};

export default Editor;
