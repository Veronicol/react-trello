import React from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';
import service from '../services/TrelloService'

const Column = (props) => {
  
  const handleDeleteCard = () => {
    props.onUpdateColumn();
  }

  const handleDeleteColumn = (event) => {
    service.deleteColumn({...props})
      .then((response) => props.onUpdateColumn())
  }

  const cardList = props.cards.map(card => <Card key={card.position} {...card} onDeleteCard={handleDeleteCard}/>)

  return(
    <div className="col-3">
    <div className="card">
      <div className="card-body">
        <button type="button" className="close text-danger" onClick={handleDeleteColumn}><span >&times;</span></button>
        <h5 className="card-subtitle mb-2 text-muted">{props.title}</h5>
        <div>
          {cardList}
          <Link to={`/${props.id}/new-card?position=${props.cards.length + 1}`}> New Card </Link>
        </div>
      </div>
  </div>
  </div>
  )
  
}

export default Column;

