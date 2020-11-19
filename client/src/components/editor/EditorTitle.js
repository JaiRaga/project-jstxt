import React, { useState } from "react";
import { IconButton, makeStyles } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  title: {
    position: "absolute",
    top: 0,
    display: "grid",
    gridTemplateColumns: "repeat(24, 1fr)",
    gridTemplateRows: "repeat(1, 1fr)",
    gridColumn: "5 / -1",
    gridRow: "1",
    backgroundColor: "#000",
    color: "#fff",
    zIndex: 5,
    opacity: (props) => (props.mouseStatus ? "1" : "0"),
    textAlign: "left",
    padding: 10
  },
  closeIcon: {
    color: "#fff",
    gridColumn: "18 / -1",
    gridRow: "1"
  },
  icon: {
    fontSize: "18px",
    paddingTop: 2
  }
}));

const EditorTitle = ({ title }) => {
  const [mouseStatus, setMouseStatus] = useState(false);
  let props = { mouseStatus };
  const classes = useStyles(props);
  console.log(props);

  let titleText = "";
  if (title === "html") titleText = "index.html";
  else if (title === "css") titleText = "styles.css";
  else if (title === "js") titleText = "script.js";
  else title = "Anon";

  // Show/hide title
  const mouseEnter = () => setMouseStatus(true);
  const mouseExit = () => setMouseStatus(false);

  console.log(mouseStatus);

  return (
    <div
      className={classes.title}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseExit}>
      <div className='title'>{titleText}</div>
      <IconButton className={classes.closeIcon}>
        <CloseIcon className={classes.icon} />
      </IconButton>
    </div>
  );
};

export default EditorTitle;
