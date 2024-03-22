import React from "react";
import styled from "styled-components";
import DressCard from "../../components/DressCard";
import pant1 from "../../images/pant1.png";
import pant2 from "../../images/pant2.png";
import pant3 from "../../images/pant3.png";

const pants = [
  {
    id: 1,
    name: "Jeans",
    price: 2000,
    img: pant1,
  },
  {
    id: 2,
    name: "Trousers",
    price: 1500,
    img: pant2,
  },
  {
    id: 3,
    name: "Cropped Pants",
    price: 1800,
    img: pant3,
  },
];

const Pant = () => {
  return (
    <Box>
      {pants.map((pant) => (
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
