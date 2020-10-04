import React from 'react';
// import ReactDom from 'react-dom';
import Commons from './Commons';
import web from '../src/images/pic1.jpg';


const Home=()=> {
  return (
   <Commons name='Learn playing your favourite sport' imgsrc={web} visit='./courses' btname='Get Started'></Commons>
  );
}

export default Home;
