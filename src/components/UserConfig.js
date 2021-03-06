import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

import styled from "styled-components";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export const UserConfig = (props) => {
  const classes = useStyles();

  return (
    <div>
      <p>
        あなたの性別、年齢を選択してください。<br></br>
        1日のタンパク質推奨摂取量が自動で算出されます。
      </p>
      <FormWrap>
        <StyledForm variant="outlined" className={classes.formControl}>
          <InputLabel>性別</InputLabel>
          <Select
            name="sex"
            value={props.userConfig.sex}
            onChange={props.handleUserConfigChange}
            label="Sex"
          >
            <MenuItem value="男性">男性</MenuItem>
            <MenuItem value="女性">女性</MenuItem>
          </Select>
        </StyledForm>
        <StyledForm variant="outlined" className={classes.formControl}>
          <InputLabel>年齢</InputLabel>
          <Select
            name="age"
            value={props.userConfig.age}
            onChange={props.handleUserConfigChange}
            label="Age"
          >
            <MenuItem value={`15〜17`}>15〜17</MenuItem>
            <MenuItem value={`18〜29`}>18〜29</MenuItem>
            <MenuItem value={`30〜49`}>30〜49</MenuItem>
            <MenuItem value={`50〜69`}>50〜69</MenuItem>
          </Select>
        </StyledForm>
        <StyledButton
          variant="contained"
          color="primary"
          onClick={props.defineAmount}
          disabled={props.userConfig.sex === "" || props.userConfig.age === ""}
        >
          設定
        </StyledButton>
      </FormWrap>

      <p>
        <StyledSpan>{props.userConfig.sex}</StyledSpan>の
        <StyledSpan>{props.userConfig.age}</StyledSpan>
        歳の1日のタンパク質摂取推奨量は
        <StyledSpan>{props.amount}</StyledSpan>
        gだよ！
      </p>
    </div>
  );
};

const FormWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0;
  justify-content: space-between;
  margin: 0;
`;

const StyledForm = styled(FormControl)`
  width: calc(100% / 3 - 20px);
  margin: 0;
`;

const StyledButton = styled(Button)`
  width: calc(100% / 3 - 20px);
  height: 56px;
`;

const StyledSpan = styled.span`
  font-size: 24px;
  color: #ff8e3c;
`;
