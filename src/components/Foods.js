import React from "react";
import { Food } from "./Food";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import styled from "styled-components";

export const Foods = (props) => {
  return (
    <Wrapper>
      <Title>食べたものリスト</Title>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">名前</TableCell>
              <TableCell align="left">タンパク質</TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.foods.map((food, index) => (
              <Food
                index={index}
                food={food}
                deleteFood={() => props.deleteFood(food)}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 30px;
`;

const Title = styled.h2`
  margin: 0 0 10px;
`;
