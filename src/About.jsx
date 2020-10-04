import React from 'react';
// import ReactDom from 'react-dom';
import Commons from './Commons';
import web2 from '../src/images/pic2.jpg';




const About=()=> {
  return (
    <Commons name='Welcome to sports training center' imgsrc={web2} visit='./contact' btname='Contact Now'></Commons>
  );
}

export default About;
