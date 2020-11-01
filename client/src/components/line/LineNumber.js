import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  lineNumber: {
    gridColumn: "span 4",
    gridRow: "span 24",
    resize: "none",
    boreder: "none",
    outline: "none",
    textAlign: "center",
    cursor: "auto",
    lineHeight: "20px",
    fontSize: "15px",
    overflow: "hidden"
  }
}));

const LineNumber = ({ lines }) => {
  let arr = [];

  for (let i = 1; i <= lines + 7; i++) {
    arr.push(i);
  }
  if (arr.length === 0) arr.push(1);

  console.log(arr.join("\n"));
  const classes = useStyles();

  return (
    <div className='number'>
      <textarea
        className={classes.lineNumber}
        readOnly
        name='number'
        value={arr.join("\n")}
        autoCorrect='off'
        autoCapitalize='off'
      />
    </div>
  );
};

export default LineNumber;
