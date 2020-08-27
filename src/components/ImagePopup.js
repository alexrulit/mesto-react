import React from 'react';

function ImagePopup() {
    return(
    <div className="popup popup_type_image">
      <figure className="popup__figure">
        <img src="#" className="popup__img" alt="" />
        <figcaption className="popup__figcaption" />
        <button type="button" className="popup__close"/>
      </figure>
    </div>
    );
}

export default ImagePopup;