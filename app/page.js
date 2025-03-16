'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { gsap } from 'gsap';
import Lenis from '@studio-freight/lenis';

import styles from './page.module.css'

import LottieAnimation from '../components/LottieAnimation';
import Header from '@/components/header/Header';
import Button from '@/components/button/Button';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    const lenis = new Lenis({ smooth: true });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const paragraphs = gsap.utils.toArray(`.${styles.floatingText} p`);
    paragraphs.forEach((p, i) => {
      if (i % 2 === 0) {
        gsap.fromTo(
          p,
          { x: '-100%' },
          {
            x: '100%',
            duration: 10,
            ease: 'none',
            repeat: -1
          }
        );
      } else {
        gsap.fromTo(
          p,
          { x: '100%' },
          {
            x: '-100%',
            duration: 10,
            ease: 'none',
            repeat: -1
          }
        );
      }
    });

    gsap.fromTo(
      '#animated-shape',
      { opacity: 0 },
      { opacity: 1, duration: 2 }
    );
  }, []);

  return (
    <>
      <Header />
      <main className='App' style={{ fontFamily: 'var(--font-primary)', padding: 'var(--spacing-md)' }}>
        <div className={styles.lottieBg}>
          <LottieAnimation />
        </div>
        <div className={styles.floatingText}>
          <p>WA businesses feel confident about future growth</p>
          <p>AI can’t replace creativity</p>
          <p>Sales measure true success</p>
          <p>Human connection drives WA business</p>
          <p>The primary barrier to digital transformation is financial investment</p>
        </div>
        <div className={styles.heroContent}>
          <h1>
            Compare your thoughts on <span>technology</span> with current industry opinions.
          </h1>
          <Button
            variant="primary"
            size="sm"
            onClick={() => router.push('/form/step2')}
            aria-label="Get a reality check"
          >
            Get a reality check
          </Button>
        </div>
      </main>
    </>
  );
}
