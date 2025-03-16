'use client';
import React from 'react';
import styles from './Button.module.css';
import cn from 'classnames';

export default function Button({
  variant = 'primary',
  size = 'md',
  onClick,
  children,
  className,
  ...props
}) {
  return (
    <button
      className={cn(styles.button, styles[variant], styles[size], styles[className])}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
