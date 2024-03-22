import React from "react";
import styled from "styled-components";
import DressCard from "../../components/DressCard";

const shoes = [
  {
    id: 1,
    name: "High Heels",
    price: 2500,
    img: "https://www.example.com/high-heels.jpg",
  },
  {
    id: 2,
    name: "Sneakers",
    price: 1800,
    img: "https://www.example.com/sneakers.jpg",
  },
  {
    id: 3,
    name: "Boots",
    price: 2800,
    img: "https://www.example.com/boots.jpg",
  },
];

const Shoe = () => {
  return (
    <Box>
      {shoes.map((shoe) => (
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
