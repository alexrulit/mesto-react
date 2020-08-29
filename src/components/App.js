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
  const [selectedCard, setSelectedCard] = useState({});

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="page">
    <Header />
    <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} />
    <Footer />
    <PopupWithForm name="profile" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
      <input id="popupAuthor" name="popupAuthor" type="text" className="popup__input" placeholder="Имя" minLength="2" maxLength="40" required pattern="[А-Яа-яA-Za-z -]{1,}" />
      <span id="popupAuthor-error" className="popup__input-error"></span>
      <input id="popupDesc" name="popupDesc" type="text" className="popup__input" placeholder="Занятие" minLength="2" maxLength="200" required />
      <span id="popupDesc-error" className="popup__input-error"></span>
    </PopupWithForm>
    <PopupWithForm name="addcard" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
      <input id="popupName" name="name" type="text" className="popup__input" placeholder="Название" minLength="1" maxLength="30" required />
      <span id="popupName-error" className="popup__input-error"></span>
      <input id="popupLink" name="link" type="url" className="popup__input" placeholder="Ссылка на картинку" required />
      <span id="popupLink-error" className="popup__input-error"></span>
    </PopupWithForm>
    <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
      <input id="popupAvatar" name="avatarLink" type="url" className="popup__input" placeholder="Ссылка на картинку" required />
      <span id="popupAvatar-error" className="popup__input-error"></span>
    </PopupWithForm>
    <ImagePopup card={selectedCard} onClose={closeAllPopups} />
  </div>
  );
}

export default App;
