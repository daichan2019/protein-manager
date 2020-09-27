import React from "react";
import { dataset } from "../dataset";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Button from "@material-ui/core/Button";

export const FoodInput = (props) => {
  const defaultProps = {
    options: dataset,
    getOptionLabel: (option) => option.name,
  };

  console.log(props.amount);

  return (
    <>
      <Autocomplete
        {...defaultProps}
        value={props.value}
        onChange={props.handleInputValue}
        renderInput={(params) => (
          <TextField
            {...params}
            label="食べたものを入力してね！"
            margin="normal"
          />
        )}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={props.addFood}
        disabled={props.amount === null}
      >
        追加
      </Button>
    </>
  );
};
