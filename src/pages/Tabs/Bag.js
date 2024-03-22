import React from "react";
import styled from "styled-components";
import DressCard from "../../components/DressCard";

const bags = [
  {
    id: 1,
    name: "Tote Bag",
    price: 1500,
    img: "https://www.example.com/tote-bag.jpg",
  },
  {
    id: 2,
    name: "Backpack",
    price: 2000,
    img: "https://www.example.com/backpack.jpg",
  },
  {
    id: 3,
    name: "Crossbody Bag",
    price: 1700,
    img: "https://www.example.com/crossbody-bag.jpg",
  },
];

const Bag = () => {
  return (
    <Box>
      {bags.map((bag) => (
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
