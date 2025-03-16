'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import Header from '@/components/header/Header';
import TextInputWithButton from '@/components/input/TextInputWithButton';
import styles from './page.module.css';
import LottieAnimation from '@/components/LottieAnimation';

export default function Step3() {
  const router = useRouter();
  const shapeRef = useRef(null);

  const [currentSubStep, setCurrentSubStep] = useState(0);
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');

  const isFirstNameValid = firstName.trim().length > 0;
  const isEmailValid = validateEmail(email);
  const isValid = currentSubStep === 0 ? isFirstNameValid : isEmailValid;

  useEffect(() => {
    const lenis = new Lenis({ smooth: true });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    if (shapeRef.current) {
      gsap.fromTo(
        shapeRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.5, ease: 'power2.out' }
      );
    }
  }, []);

  const handleSubmit = () => {

    if (currentSubStep === 0) {
      localStorage.setItem('firstName', firstName);
      setCurrentSubStep(1);
    } else {
      localStorage.setItem('email', email);
      router.push('/form/step5');
    }
  };

  function validateEmail(str) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(str);
  }

  const getTitleText = () => {
    if (currentSubStep === 0) {
      return 'Let’s start with the basics. Type in your first name.';
    }
    return 'How should we contact you? Type in your email address.';
  };

  const getPlaceholder = () => {
    return currentSubStep === 0 ? 'First name' : 'Email address';
  };
  const getValue = () => {
    return currentSubStep === 0 ? firstName : email;
  };
  const handleChange = (e) => {
    if (currentSubStep === 0) {
      setFirstName(e.target.value);
    } else {
      setEmail(e.target.value);
    }
  };

  return (
    <>
      <Header />
      <main className={styles.container}>
        <div className={styles.topShape} ref={shapeRef}>
          <LottieAnimation />
        </div>

        <h1 className={styles.title}>
          {getTitleText()}
        </h1>

        <div className={styles.inputContainer}>
          <TextInputWithButton
            value={getValue()}
            onChange={handleChange}
            placeholder={getPlaceholder()}
            isValid={isValid}
            onSubmit={handleSubmit}
          />
        </div>
      </main>
    </>
  );
}
