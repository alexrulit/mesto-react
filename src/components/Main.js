import React from 'react';

function Main(props) {
    return(
    <main className="main">
      <section className="profile">
        <div className="profile__avatar-link" onClick={props.onEditAvatar}>
          <img className="profile__avatar" src="#" alt="Аватар" />
        </div>
        <div className="profile__info">
          <div className="profile__author">
            <h1 className="profile__title"></h1>
            <p className="profile__subtitle"></p>
          </div>
          <button type="button" className="profile__edit-button" onClick={props.onEditProfile} />
        </div>
        <button type="button" className="profile__add-button" onClick={props.onAddPlace} />
      </section>
      <section className="elements">
        <ul className="elements__list">
        </ul>
      </section>
    </main>
    );
}

export default Main;