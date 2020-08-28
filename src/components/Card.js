import React from 'react';

function Card(props) {

    function handleClick() {
        props.onCardClick(props.card);
    } 

    return(
        <li className="elements__item">
        <img className="elements__image" src={props.card.link} alt={props.card.name} onClick={handleClick} />
        <div className="elements__description">
          <p className="elements__text">{props.card.name}</p>
          <div className="elements__like">
            <button type="button" className="elements__like-button" />
            <p className="elements__like-count">{props.card.likes.length}</p>
          </div>
        </div>
        <button type="button" className="elements__delete-button" />
        </li>
    );
}

export default Card;