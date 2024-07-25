
"use client"

import React from "react";
import About from "./Components/About";
import Facts from "./Components/Facts";
import Header from "./Components/Header";
import Improvement from "./Components/Improvement";
import Intro from "./Components/Intro";
import MoreQue from "./Components/MoreQue";
import Navbar from './Components/Navbar';
import Question from "./Components/Question";
import Test from "./Components/Test";
import Vacancy from "./Components/Vacancy";
import Work from "./Components/Work";
export default function Home() {
  return (
    <>
      <Navbar />
      <Header/>
      <Facts/>
      <Intro/>
      <Improvement/>
      <MoreQue/>
      <Question/>
      <Test/>
      <Work/>
      <Vacancy/>
  </>
  
  );
}
