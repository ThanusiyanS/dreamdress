import React from "react";
import styled from "styled-components";
import DressCard from "../../components/DressCard";

const blouses = [
  {
    id: 1,
    name: "Silk Blouse",
    price: 2500,
    img: "https://www.example.com/silk-blouse.jpg",
  },
  {
    id: 2,
    name: "Cotton Blouse",
    price: 1800,
    img: "https://www.example.com/cotton-blouse.jpg",
  },
  {
    id: 3,
    name: "Lace Blouse",
    price: 2200,
    img: "https://www.example.com/lace-blouse.jpg",
  },
];

const Blouse = () => {
  return (
    <Box>
      {blouses.map((blouse) => (
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
