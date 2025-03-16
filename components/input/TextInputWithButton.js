'use client';

import React from 'react';
import { FaArrowUp, FaArrowRight } from 'react-icons/fa';
import styles from './TextInputWithButton.module.css';

export default function TextInputWithButton({
  value,
  onChange,
  placeholder = 'First name',
  isValid = false,
  onSubmit,
}) {
  const handleClick = () => {
    if (isValid && onSubmit) {
      onSubmit();
    }
  };

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <button
        className={isValid ? styles.buttonEnabled : styles.buttonDisabled}
        disabled={!isValid}
        onClick={handleClick}
        aria-label="Submit"
      >
        {isValid ? (
          <FaArrowRight className={styles.iconRight} />
        ) : (
          <FaArrowUp className={styles.iconUp} />
        )}
      </button>
    </div>
  );
}
