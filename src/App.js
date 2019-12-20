import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";
import SearchForm from "./components/SearchForm";
import { Route, Link } from "react-router-dom";
import styled from 'styled-components';

const Buttons = styled.div`
  padding: 10px;
  margin: 15px;
  display: inline-block;
  list-style: none;
  border: 1px solid #777;
  border-radius: 5px;
  box-shadow: 2px 3px #888;
  color: #000;  
`

export default function App() {

  return (
    <main>
      <nav className="character-list">
        <Link to="/"><Buttons>Home</Buttons></Link>
        <Link to="/Search"><Buttons>Search</Buttons></Link>
        <Link to="/Characters"><Buttons>Characters</Buttons></Link>
      </nav>
      <Header />      
      <Route exact path="/Search" component={SearchForm} />
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/Characters" component={CharacterList} />
    </main>
  );
}