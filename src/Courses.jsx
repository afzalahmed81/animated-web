import React from 'react';
// import ReactDom from 'react-dom';
import Card from './Card';
import Data from './Data';



const Courses=()=> {
  return (
   <>
    <div className="my-5">
      <h1 className="text-center"> Learn the tricks of your favourite sport </h1>
    </div>
    <div className="container-fluid mb-5">
    <div className="row"> 
    <div className="col-4 mx-auto">
    <div className="row gy-4">
  
  {
    Data.map((val,ind) => {
      return <Card
      key={ind}
      imgsrc={val.imgsrc}
      title={val.title}
      content={val.content}

      />
    })
  }

      </div>
     </div>

      </div>



    </div>


   </>
  );
}

export default Courses;
