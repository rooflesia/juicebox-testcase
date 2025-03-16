'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Lenis from '@studio-freight/lenis';
import Header from '@/components/header/Header';
import Button from '@/components/button/Button';
import styles from './page.module.css';

export default function Step5() {
  const router = useRouter();
  const [firstName, setFirstName] = useState('');

  useEffect(() => {
    const lenis = new Lenis({ smooth: true });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const storedName = localStorage.getItem('firstName');
    if (storedName) setFirstName(storedName);
  }, []);

  return (
    <>
      <Header />
      <main className={styles.heroContainer}>
        <section className={styles.finalContainer}>
          <h1 className={styles.finalTitle}>
            Thanks, {firstName}! Now, it’s time to get a reality check.
          </h1>
          <p className={styles.finalSubtitle}>This will take 2-3 minutes.</p>
        </section>

        <div className={styles.buttonWrapper}>
          <Button variant="tersier" onClick={() => router.push('/')}>
            Continue
          </Button>
        </div>
      </main>
    </>
  );
}
