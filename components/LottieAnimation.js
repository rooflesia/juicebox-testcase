'use client';

import { useState, useEffect } from 'react';
import Lottie from 'react-lottie-player';

export default function LottieAnimation() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch('/lottie-animation.json')
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error('Error fetching Lottie animation:', error));
  }, []);

  if (!animationData) return <div>Loading animation...</div>;

  return (
    <Lottie
      loop
      play
      animationData={animationData}
    />
  );
}
