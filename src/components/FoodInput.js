import React from "react";
import { dataset } from "../dataset";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Button from "@material-ui/core/Button";

import styled from "styled-components";

export const FoodInput = (props) => {
  const defaultProps = {
    options: dataset,
    getOptionLabel: (option) => option.name,
  };

  return (
    <InputWrap>
      <StyledAutocomplete
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
      <StyledButton
        variant="contained"
        color="primary"
        onClick={props.addFood}
        disabled={props.amount === 0}
      >
        追加
      </StyledButton>
    </InputWrap>
  );
};

const InputWrap = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const StyledAutocomplete = styled(Autocomplete)`
  width: 70%;
  margin: 0;
`;

const StyledButton = styled(Button)`
  width: 222px;
  margin-left: 20px;
  height: 56px;
`;
