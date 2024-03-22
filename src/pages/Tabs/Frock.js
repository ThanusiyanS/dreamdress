import React from "react";
import styled from "styled-components";
import DressCard from "../../components/DressCard";

const frocks = [
  {
    id: 1,
    name: "Summer Dress",
    price: 3000,
    img: "https://www.example.com/summer-dress.jpg",
  },
  {
    id: 2,
    name: "Evening Gown",
    price: 4000,
    img: "https://www.example.com/evening-gown.jpg",
  },
  {
    id: 3,
    name: "Maxi Dress",
    price: 3500,
    img: "https://www.example.com/maxi-dress.jpg",
  },
];

const Frock = () => {
  return (
    <Box>
      {frocks.map((frock) => (
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
