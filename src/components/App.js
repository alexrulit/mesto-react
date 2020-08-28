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
    <PopupWithForm name="profile" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
    <PopupWithForm name="addcard" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
    <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
    <ImagePopup card={selectedCard} onClose={closeAllPopups} />
  </div>
  );
}

export default App;
