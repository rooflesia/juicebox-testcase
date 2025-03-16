'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import Header from '@/components/header/Header';
import Button from '@/components/button/Button';
import styles from './page.module.css';
import LottieAnimation from '@/components/LottieAnimation';

export default function Step5() {
  const router = useRouter();
  const [firstName, setFirstName] = useState('');
  const lottieRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({ smooth: true });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const storedName = localStorage.getItem('firstName');
    if (storedName) setFirstName(storedName);

    if (lottieRef.current) {
      gsap.fromTo(
        lottieRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 0.5, opacity: 1, duration: 1, ease: 'power2.out' }
      );
    }
  }, []);

  return (
    <>
      <Header />
      <main className={styles.heroContainer}>
        <div ref={lottieRef} className={styles.lottieWrapper}>
          <LottieAnimation />
        </div>
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
