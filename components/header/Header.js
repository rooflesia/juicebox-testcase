'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './Header.module.css';
import { FaArrowLeft, FaRedoAlt } from 'react-icons/fa';

export default function Header() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleRefresh = () => {
    router.refresh();
  };

  return (
    <header className={styles.header}>
      <button className={styles.iconButton} onClick={handleBack} aria-label="Go Back">
      <FaArrowLeft size={16} />
      </button>
      
      <div className={styles.logo}>juicebox</div>
      
      <button className={styles.iconButton} onClick={handleRefresh} aria-label="Refresh">
        <FaRedoAlt size={16} />
      </button>
    </header>
  );
}
