import { useState } from 'react';
import colors from '../utils/colors';
import getRandomElement from '../utils/getRandomElement';

const Square = () => {
  const [backgroundColor, setBackgroundColor] = useState('#1d1d1d');
  const [boxShadow, setBoxShadow] = useState('rgba(0, 0, 0, 1)');
  const randomColor = getRandomElement(colors);

  const setColor = () => {
    setBackgroundColor(randomColor);
    setBoxShadow(randomColor);
  };

  const removeColor = () => {
    setBackgroundColor('#1d1d1d');
    setBoxShadow('rgba(0, 0, 0, 1)');
  };

  return (
    <div
      className="square"
      style={{
        backgroundColor: `${backgroundColor}`,
        boxShadow: `0 0 2px ${boxShadow}, 0 0 10px ${boxShadow}`,
      }}
      onMouseOver={setColor}
      onMouseOut={removeColor}
    />
  );
};

export default Square;
