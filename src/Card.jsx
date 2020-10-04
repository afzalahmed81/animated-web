// const { requirePropFactory } = require("@material-ui/core");
import React from 'react';
import {NavLink} from 'react-router-dom';

const Card=(props) => {
    return(
        <div className="col-med-4 col-10-mx-auto">
        <div className="Card">
            <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc}></img>
        <div className="card-body">
            <h5 className="card-title font-weight-bold">{props.title}</h5>
            <p className="card-text"> {props.content} </p>
            <NavLink to="./contact" className="btn btn-primary"> Get Enrolled </NavLink>
        </div>

        </div>
        </div>
    );
}

export default Card;