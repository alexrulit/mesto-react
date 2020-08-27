import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  return (
    <div className="page">
    <Header />
    <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} />
    <Footer />
    <template id="fotoCard">
      <li className="elements__item">
        <img className="elements__image" src="#" alt="" />
        <div className="elements__description">
          <p className="elements__text"></p>
          <div className="elements__like">
            <button type="button" className="elements__like-button"></button>
            <p className="elements__like-count"></p>
          </div>
        </div>
        <button type="button" className="elements__delete-button"></button>
      </li>
    </template>
    <PopupWithForm name="profile" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} />
    <PopupWithForm name="addcard" title="Новое место" isOpen={isAddPlacePopupOpen} />
    <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} />
    <ImagePopup />
  </div>
  );
}

export default App;
