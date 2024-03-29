import React from "react";
import styled from "styled-components";
import DressCard from "../../components/DressCard";
import { Data } from "../../data";

const Blouse = () => {
  return (
    <Box>
      {Data.Blouse.map((blouse) => (
        <DressCard key={blouse.id} dress={blouse} />
      ))}
    </Box>
  );
};

export default Blouse;

const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 50%;
  margin: 20px;
`;
