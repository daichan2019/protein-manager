import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import styled from "styled-components";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export const Header = () => {
  const classes = useStyles();

  return (
    <StyledHeader position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Protein管理ツール ぷろっと!
        </Typography>
      </Toolbar>
    </StyledHeader>
  );
};

const StyledHeader = styled(AppBar)`
  margin: 0;
  background-color: #ff8e3c;
`;
