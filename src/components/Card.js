import React from 'react';
import service from '../services/TrelloService'

const Card = (props) => {

  const handleDeleteCard = () => {
    service.deleteCard({...props})
      .then((response) => props.onDeleteCard())
  }

  return(
    <div className="card mb-3">
    <img className="card-img-top" src={props.imageUrl} alt="Card img cap"/>
    <div className="card-body">
      <button type="button" className="close text-danger" onClick={handleDeleteCard}><span >&times;</span></button>
      <h5 className="card-title">{props.title}</h5>
      <span className="badge badge-info">{props.label}</span>
      <p className="card-text">{props.description}</p>
    </div>
  </div>
  )
}

export default Card;


