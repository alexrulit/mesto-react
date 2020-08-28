import React from 'react';

function ImagePopup(props) {
    let className;
    props.card.name !== undefined ? className = `popup popup_type_${props.name} popup_opened` : className = `popup popup_type_${props.name}`;

    return(
    <div className={className}>
      <figure className="popup__figure">
        <img src={props.card.link} className="popup__img" alt={props.card.name} />
        <figcaption className="popup__figcaption">{props.card.name}</figcaption>
        <button type="button" className="popup__close" onClick={props.onClose}/>
      </figure>
    </div>
    );
}

export default ImagePopup;