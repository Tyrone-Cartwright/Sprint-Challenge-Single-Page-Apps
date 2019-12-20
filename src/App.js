import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";
import SearchForm from "./components/SearchForm";
import { Route, Link } from "react-router-dom";


export default function App() {

  return (
    <main>
      <nav className="character-list">
        <Link to="/"><button>Home</button></Link>
        <Link to="/Search"><button>Search</button></Link>
        <Link to="/Characters"><button>Characters</button></Link>
      </nav>
      <Header />      
      <Route exact path="/Search" component={SearchForm} />
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/Characters" component={CharacterList} />
    </main>
  );
}