import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";

export const Food = (props) => {
  return (
    <TableRow hover>
      <TableCell align="left">{props.food.name}</TableCell>
      <TableCell align="left">{props.food.protein}</TableCell>
      <TableCell align="left">
        <Button
          variant="contained"
          color="secondary"
          onClick={() => props.deleteFood(props.food)}
        >
          削除
        </Button>
      </TableCell>
    </TableRow>
  );
};
