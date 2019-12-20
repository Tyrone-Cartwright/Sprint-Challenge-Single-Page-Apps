import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border: 1px solid #222;
  margin: 5px;
  width: 100%;
  height: 400px;
  font-size: 16px;
  box-shadow: 5px 6px 5px #333;

`


export default function CharacterCard(props) {
  return (
    <Card>
      <img src={props.image} alt='r&m' />
      <h3>Name: {props.name}</h3>
      <p>Species:{props.species}</p>
      <p>Status: {props.status}</p>      
      <p>Gender: {props.gender}</p>
    </Card>
  );
}