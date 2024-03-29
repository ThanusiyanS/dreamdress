import React from "react";
import styled from "styled-components";
import DressCard from "../../components/DressCard";
import { Data } from "../../data";

const Frock = () => {
  return (
    <Box>
      {Data.Frock.map((frock) => (
        <DressCard key={frock.id} dress={frock} />
      ))}
    </Box>
  );
};

export default Frock;

const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 50%;
  margin: 20px;
`;
