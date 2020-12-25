import React, { useState } from "react";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

interface Props {}

const App: React.FC<Props> = (props) => {
  const [count, setCount] = useState<number>(0);
  const [count2, setCount2] = useState<number>(0);
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>xs=12</Paper>
          </Grid>

          <Grid item xs={6}>
            <Paper className={classes.paper}>
              aaa
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  setCount(count + 1);
                }}
              >
                Add to Click( {count})
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              bbb
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  setCount2(count2 + 1);
                }}
              >
                Add2 to Click({count2})
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default App;
