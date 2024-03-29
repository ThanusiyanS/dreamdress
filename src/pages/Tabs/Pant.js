import React from "react";
import styled from "styled-components";
import DressCard from "../../components/DressCard";
import { Data } from "../../data";

const Pant = () => {
  return (
    <Box>
      {Data.Pant.map((pant) => (
        <DressCard key={pant.id} dress={pant} />
      ))}
    </Box>
  );
};

export default Pant;

const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 50%;
  margin: 20px;
`;
