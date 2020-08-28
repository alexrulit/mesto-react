import React, { useState } from 'react';
import api from '../utils/api';
import Card from './Card';

function Main(props) {

  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([result, data]) => {
        setUserName(result.name);
        setUserDescription(result.about);
        setUserAvatar(result.avatar);
        setCards(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

    return(
      <main className="main">
        <section className="profile">
          <div className="profile__avatar-link" onClick={props.onEditAvatar}>
            <img className="profile__avatar" src={userAvatar} alt="Аватар" />
          </div>
          <div className="profile__info">
            <div className="profile__author">
              <h1 className="profile__title">{userName}</h1>
              <p className="profile__subtitle">{userDescription}</p>
            </div>
            <button type="button" className="profile__edit-button" onClick={props.onEditProfile} />
          </div>
          <button type="button" className="profile__add-button" onClick={props.onAddPlace} />
        </section>
        <section className="elements">
          <ul className="elements__list">
          {cards.map((item, index) => {
            return (
              <Card card={item} key={index} onCardClick={props.onCardClick} />
            );
          })}
          </ul>
        </section>
      </main>
    );
}

export default Main;