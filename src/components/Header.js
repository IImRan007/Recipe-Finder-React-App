import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";

const Header = ({ onTextChange }) => {
  return (
    <StyleHeader className="header">
      <Heading>Recipe Finder</Heading>
      <SearchComponent className="search_component">
        <SearchIcon></SearchIcon>
        <Input placeholder="Search Recipe" onChange={onTextChange} />
      </SearchComponent>
    </StyleHeader>
  );
};

export default Header;

// Styled Components

const StyleHeader = styled.div`
  height: 10vh;
  color: white;
  background-color: black;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 3px 6px 0 #555;
`;

const Heading = styled.h1`
  padding: 2rem;
  font-weight: bold;
`;

const SearchComponent = styled.div`
  display: flex;
  align-items: center;
  width: 32vw;
  justify-content: flex-end;
  margin: 1.125rem;
  padding: 0.625rem;
`;

const Input = styled.input`
  width: 21.76vw;
  height: 5vh;
  outline: none;
  border-radius: 0.75rem;
  font-size: 1.125rem;
  margin-right: 1.438;
  text-align: center;
`;
