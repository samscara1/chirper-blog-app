import React, { useState } from 'react';

export const Form = ({ handleClick, btnTitle }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClick(email, password);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="e-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <input type="submit" name={btnTitle} />
    </form>
  );
};
