'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Pagination } from 'swiper/modules';

import Header from '@/components/header/Header';
import Button from '@/components/button/Button';
import LottieAnimation from '@/components/LottieAnimation';
import styles from './page.module.css';

export default function Step2() {
  const router = useRouter();
  const [swiperRef, setSwiperRef] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      id: 0,
      content: (
        <h1 className={styles.slideTitle}>
          You’ll get insights into current industry sentiments and a reality check
          about technology in a few minutes. Deal? Great!
        </h1>
      ),
    },
    {
      id: 1,
      content: (
        <h1 className={styles.slideTitle}>
          I’ll ask you a handful of meaningful questions and compare your responses
          with people in your industry.
        </h1>
      ),
    },
    {
      id: 2,
      content: (
        <h1 className={styles.slideTitle}>
          Professionals around the world shared how they feel about technology
          and I’ve listened. Now it’s your turn.
        </h1>
      ),
    },
  ];

  useEffect(() => {
    const lenis = new Lenis({ smooth: true });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const lottieEl = document.getElementById('lottieStep2');
    if (lottieEl) {
      gsap.fromTo(
        lottieEl,
        { scale: 1 },
        { scale: 0.7, duration: 1, ease: 'power2.out' }
      );
    }
  }, []);

  const isLastSlide = activeIndex === slides.length - 1;
  const handleButtonClick = () => {
    if (!swiperRef) return;

    if (!isLastSlide) {
      swiperRef.slideNext();
    } else {
      router.push('/form/step3');
    }
  };

  return (
    <>
      <Header />
      <main className={styles.heroContainer}>
        <div id="lottieStep2" className={styles.lottieWrapper}>
          <LottieAnimation />
        </div>

        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={50}
          slidesPerView={1}
          className={styles.swiperContainer}
          onSwiper={(swiper) => setSwiperRef(swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={slide.id} className={i === activeIndex ? styles.slideActive : ''}>
              <div className={styles.slideContent}>
                {slide.content}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={styles.heroContent}>
          <Button
            variant={isLastSlide ? 'tertiary' : 'secondary'}
            onClick={handleButtonClick}
          >
            {isLastSlide ? 'Get started' : 'Continue'}
          </Button>
        </div>
      </main>
    </>
  );
}
