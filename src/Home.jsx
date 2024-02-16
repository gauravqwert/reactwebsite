import React from 'react';
import web from "../src/image/home.jpg"
import { NavLink } from 'react-router-dom';
import Common from './Common';
const Home = () => {
  return (
    <>
      <Common name='Grow Your Skills With' imgscr={web} visit='/service' btname='Get Started'/>
    </>
  )
}

export default Home;
