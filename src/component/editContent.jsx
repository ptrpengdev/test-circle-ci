import React, { useState } from 'react';

const EditableButton = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [buttonText, setButtonText] = useState('Click me');
  const [buttonColor, setButtonColor] = useState('#3498db'); // Initial color

  const handleButtonClick = () => {
    setIsEditing(true);
  };

  const handleTextChange = (e) => {
    setButtonText(e.target.innerText);
  };
  // eslint-disable-next-line
  const handleColorChange = () => {
    const newColor = prompt('Enter a new color for the button:');
    if (newColor) {
      setButtonColor(newColor);
    }
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  return (
    <button
      onClick={handleButtonClick}
      style={{ backgroundColor: buttonColor }}
      contentEditable={isEditing}
      onInput={handleTextChange}
      onBlur={handleBlur}
    >
      {buttonText}
    </button>
  );
};

export default EditableButton;
