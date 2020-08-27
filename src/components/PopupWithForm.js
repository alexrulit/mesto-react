import React from 'react';

function PopupWithForm(props) {
    let className;
    props.isOpen ? className = `popup popup_type_${props.name} popup_opened` : className = `popup popup_type_${props.name}`;

    return(    
    <div className={className}>
      <form name={props.name} action="#" className="popup__container" novalidate>
        <h2 className="popup__title">{props.title}</h2>
        {props.children}
        <button type="submit" className="popup__submit">Сохранить</button>
        <button type="button" className="popup__close" />
      </form>
    </div>
    );
}

export default PopupWithForm;