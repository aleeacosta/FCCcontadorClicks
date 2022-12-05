import React from "react";
import '../styles/button.css';

function Button({ text, isButtonClick, functionClick }) {
  return(
    <button
      className={isButtonClick ? 'button-click' : 'button-reset'}
      onClick={functionClick}>
      {text}    
    </button>
  );    
}

export default Button;