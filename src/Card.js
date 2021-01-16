import React from 'react';
import './Card.css'; 

const Card = (props) => (
  <div className='Card'>
    <button
      type='button'
      onClick={() => props.onDeleteCard(props.id)}
      >
      delete
    </button>
    <h3>{props.title}</h3>
    <p>{props.content}</p>
  </div>
)

Card.propTypes = {
  onClickDelete: () => {}
}



export default Card;