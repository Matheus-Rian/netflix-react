import React from "react";
import './Header.css'
// import { HeaderContainer } from "./styles";

function Header({black}) {
  return (
    <header className={black ? 'black' : ''}>
      <div className="headerLogo">
        <a href="/">
          <img
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt="netflix"
          />
        </a>
      </div>

      <div className="headerUser">
        <a href="">
          <img
            src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"
            alt="Usuário"
          />
        </a>
      </div>
    </header>
  );
}

export default Header;
