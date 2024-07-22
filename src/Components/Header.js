import React from 'react';
import './Header.css'; // Asegúrate de crear un archivo CSS con este nombre

const Header = () => {
  return (
    <header className="header">
      <h1 className="title"> CRIPTA </h1>
       <a href="https://fad.com.co" className="logo">
        <img src="https://fad.com.co/fad.com/img/fad.png" alt="Logo" />
      </a>
      <nav>
        <a href="https://fad.com.co" className="nav-button">HOME</a>
        <a href="https://wa.me/773196588760" className="nav-button">INFO</a>
      </nav>
    </header>
  );
};

export default Header;
