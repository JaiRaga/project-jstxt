import React, { Fragment, useState } from "react";
import { makeStyles } from "@material-ui/styles";
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
    gridColumn: "span 22",
    gridRow: "span 24",
    lineHeight: "20px",
    fontSize: "15px",
    paddingRight: "74px",
    border: "none",
    outline: "none",
    backgroundColor: "#aaa",
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
    // );
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
    const txtele = document.getElementById("code");
    // let vertical1 = txtele.scrollTop;
    const lineele = document.getElementById("lineNum");
    // let vertical2 = lineele.scrollTop;
    lineele.scrollTop = txtele.scrollTop;
    console.log(txtele.scrollTop, lineele.scrollTop);
    // console.log(document.getElementById("lineNum"));
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
