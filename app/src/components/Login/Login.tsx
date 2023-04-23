import React, { useState } from 'react';
import styles from './Login.module.css'; 

export const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <div className={styles['container']}>
      <section className={styles['box']}>
        <h1>FinanceMate</h1>
        <form className={styles['form']} onSubmit={handleSubmit}>
          <div className={styles['form-input']}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className={styles['form-input']}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <div className={styles['submit-container']}>
            <button type="submit" className={styles['submit-btn']}>Login</button>
          </div>
        </form>
      </section>
    </div>
  );
};
