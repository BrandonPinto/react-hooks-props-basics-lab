import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import User from "../data/User";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About bio={User.bio} urls={User.links} />
    </div>
  );
}

export default App;