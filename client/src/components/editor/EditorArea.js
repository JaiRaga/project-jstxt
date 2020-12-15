import React, { Fragment } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import '../home/Home.css';
import EditorItem from './EditorItem';
import Editor from '../editor/Editor';
import CodeSnapShot from '../editor/CodeSnapShot';
// import ResultPane from '../resultPane/ResultPane';

let editor = 3,
	span = 24 / editor;

const useStyles = makeStyles((theme) => ({
	editorWidth: {
		display: 'grid',
		gridTemplateColumns: 'repeat(24, 1fr)',
		gridTemplateRows: 'repeat(24, 1fr)',
	},
	item: {
		gridColumn: 'span 24',
		gridRow: 'span 24',
	},
	editor: {
		gridColumn: 'span 24',
		gridRow: 'span 24',
		backgroundColor: '#794c74',
	},
	codeSnapShot: {
		gridColumn: 'span 1',
		gridRow: 'span 24',
		backgroundColor: '#19d3da',
	},
	editorItem: {
		gridColumn: `span ${span}`,
		gridRow: 'span 24',
		display: 'grid',
		gridTemplateColumns: 'repeat(24, 1fr)',
		gridTemplateRows: 'repeat(24, 1fr)',
		position: 'relative',
		// overflowX: "hidden",
		// overflowY: "hidden"
	},
}));

const EditorArea = () => {
	const classes = useStyles();
	return (
		<Fragment>
			{/* <Grid
        container
        direction='row'
        justify='flex-start'
        className={classes.editorWidth}>
        <Grid item className={classes.item}>
          <EditorItem />
        </Grid>
      </Grid> */}
			<div className={classes.editorItem}>
				<EditorItem editorid='html' />
			</div>
			<div className={classes.editorItem}>
				<EditorItem editorid='css' />
			</div>
			<div className={classes.editorItem}>
				<EditorItem editorid='js' />
			</div>
			{/* <div className={classes.editorItem}>
        <ResultPane />
      </div> */}
		</Fragment>
	);
};

export default EditorArea;
