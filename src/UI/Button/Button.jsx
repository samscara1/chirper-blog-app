import React from 'react';
import { useState } from 'react/cjs/react.development';

import style from './style.module.scss';

export const Button = ({
  title,
  btnType,
  handleClick,
  bkgColor,
  bkgColorHover,
  txtColor,
}) => {
  const [Hover, setHover] = useState(false);
  const background = Hover ? bkgColorHover : bkgColor;
  return (
    <button
      className={style.btn}
      type={btnType ? 'button' : 'submit'}
      onClick={handleClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        backgroundColor: background,
        color: txtColor,
      }}
    >
      {title}
    </button>
  );
};
