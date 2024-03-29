import React from "react";
import styled from "styled-components";
import DressCard from "../../components/DressCard";
import { Data } from "../../data";

const Shoe = () => {
  return (
    <Box>
      {Data.Shoes.map((shoe) => (
        <DressCard key={shoe.id} dress={shoe} />
      ))}
    </Box>
  );
};

export default Shoe;

const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 50%;
  margin: 20px;
`;
