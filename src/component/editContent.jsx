import React, { useState } from 'react';

const EditableButton = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [buttonText, setButtonText] = useState('Click me');
  // const [buttonColor, setButtonColor] = useState('#3498db'); // Initial color

  const handleButtonClick = () => {
    setIsEditing(true);
  };

  const handleTextChange = (e) => {
    setButtonText(e.target.innerText);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  return (
    <button
      onClick={handleButtonClick}
      style={{ backgroundColor: '#3498db' }}
      contentEditable={isEditing}
      onInput={handleTextChange}
      onBlur={handleBlur}
    >
      {buttonText}
    </button>
  );
};

export default EditableButton;
