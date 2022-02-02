import React, { useState } from 'react';

export const Form = ({ handleClick, btnTitle }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <form>
      <input type="email" placeholder="e-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit" onClick={() => handleClick(email, password)}>{btnTitle}</button>
    </form>
  );
};
