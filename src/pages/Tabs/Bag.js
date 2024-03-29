import React from "react";
import styled from "styled-components";
import DressCard from "../../components/DressCard";
import { Data } from "../../data";

const Bag = () => {
  return (
    <Box>
      {Data.Bags.map((bag) => (
        <DressCard key={bag.id} dress={bag} />
      ))}
    </Box>
  );
};

export default Bag;

const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 50%;
  margin: 20px;
`;
