import React from "react";
import User from "../data/User";
import App from './App'
import Links from "./Links";
function About(props) {
  return (
    <div id="about">
      <h2>{props.bio}</h2>
      <p></p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links />
    </div>
  );
}

export default About;