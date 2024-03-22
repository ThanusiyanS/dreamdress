import React from "react";
import Draggable from "react-draggable";
import styled from "styled-components";

const DressCard = ({ dress }) => {
  const handleDrag = (e, ui) => {
    console.log("x:", ui.x, "y:", ui.y);
  };
  return (
    <Draggable
      onDrag={handleDrag}
      axis="both"
      position={{ x: 0, y: 0 }}
      scale={1}
    >
      <Box>
        <img src={dress.img} alt={dress.name} height={80} width={50} />
        <h2>{dress.name}</h2>
        <Button>Try On</Button>
      </Box>
    </Draggable>
  );
};

export default DressCard;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 200px;
  border-radius: 10px;
  background-color: rgba(100, 32, 170, 0.4);
  box-shadow: 0px 4px 10px rgba(100, 32, 170, 0.4);
  backdrop-filter: blur(5px) saturate(180%);
  -webkit-backdrop-filter: blur(5px) saturate(180%);
  margin: 10px;
`;

const Button = styled.button`
  background-color: #ff3ea5;
  border: none;
  color: white;
  width: 70px;
  padding: 5px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  font-size: 14px;
  &:hover {
    background-color: #ff66b3; /* Slightly lighter pink on hover */
    transform: scale(1.05); /* Slightly larger on hover for a subtle effect */
    transition: background-color 0.2s ease-in-out, transform 0.2s ease-in-out;
  }
`;
