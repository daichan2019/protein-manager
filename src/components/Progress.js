import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";

export const Progress = (props) => {
  return (
    <>
      <LinearProgress variant="determinate" value={props.progress} />
      <p>
        {props.totalProtein}/{props.amount}
      </p>
    </>
  );
};
