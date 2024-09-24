import React from 'react';
import './card.css'

function Card(props) {
  let CardImg = props.img
  return (
    <div className='C-card-resp'>
      <div className="C-card">
        <div className="card-title" >{props.title}</div>
        <div className="card-img"><img src={`${CardImg}`} alt="" /></div>
      </div>
    </div>
  );
}

export default Card;
