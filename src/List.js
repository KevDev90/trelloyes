import React from 'react';
import Card from './Card'
import './List.css';

const List = (props) => (
    <section className='List'>
    <header className='List-header'>
      <h2>{props.header}</h2>
    </header>
    <div className='List-cards'>
      {props.cards.map((card) =>
        <Card
          id={card.id}
          onDeleteCard={props.onDeleteCard}
          key={card.id}
          title={card.title}
          content={card.content}
        />
      )}
      <button
        onClick={() => props.onClickAdd(props.id)}
        type='button'
        className='List-add-button'>
        + Add Random Card
      </button>
    </div>
  </section>
)

List.defaultProps = {
  onClickAdd: () => {},
}

export default List;