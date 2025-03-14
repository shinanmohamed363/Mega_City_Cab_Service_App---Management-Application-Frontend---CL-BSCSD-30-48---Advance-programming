
import React, { useEffect, useState } from 'react';

export default function Background() {
  // Function to generate a random clip-path polygon
  const generateRandomClipPath = () => {
    const points = [
      '74.1% 44.1%', '100% 61.6%', '97.5% 26.9%', '85.5% 0.1%', '80.7% 2%',
      '72.5% 32.5%', '60.2% 62.4%', '52.4% 68.1%', '47.5% 58.3%', '45.2% 34.5%',
      '27.5% 76.7%', '0.1% 64.9%', '17.9% 100%', '27.6% 76.8%', '76.1% 97.7%'
    ];
    // Randomize the points in the polygon for a new clip path
    const randomPoints = points.sort(() => Math.random() - 0.5).slice(0, points.length);
    return `polygon(${randomPoints.join(', ')})`;
  };

  const [clipPath, setClipPath] = useState(generateRandomClipPath());

  useEffect(() => {
    // Function to change the background randomly
    const interval = setInterval(() => {
      setClipPath(generateRandomClipPath());
    }, 10000); // Change the background every 10 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl">
      <div
        className="relative left-1/2 -z-10 w-full h-full sm:w-[72.1875rem] sm:h-[40.125rem] max-w-none -translate-x-1/2 rotate-[30deg] opacity-30 animate-gradient sm:max-w-[80%] sm:translate-x-[-40%]"
        style={{
          clipPath: clipPath,
          transition: 'clip-path 10s ease-in-out', // Slow transition with 10 seconds duration
        }}
      />
    </div>
  );
}
////
import React, { useEffect, useState } from 'react';

export default function Background() {
  // Function to generate a random clip-path polygon
  const generateRandomClipPath = () => {
    const points = [
      '74.1% 44.1%', '100% 61.6%', '97.5% 26.9%', '85.5% 0.1%', '80.7% 2%',
      '72.5% 32.5%', '60.2% 62.4%', '52.4% 68.1%', '47.5% 58.3%', '45.2% 34.5%',
      '27.5% 76.7%', '0.1% 64.9%', '17.9% 100%', '27.6% 76.8%', '76.1% 97.7%'
    ];
    // Randomize the points in the polygon for a new clip path
    const randomPoints = points.sort(() => Math.random() - 0.5).slice(0, points.length);
    return `polygon(${randomPoints.join(', ')})`;
  };

  const [clipPath, setClipPath] = useState(generateRandomClipPath());

  useEffect(() => {
    // Function to change the background randomly
    const interval = setInterval(() => {
      setClipPath(generateRandomClipPath());
    }, 10000); // Slow down the interval to 5 seconds for each background change

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl">
      <div
        className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem] animate-gradient"
        style={{
          clipPath: clipPath,
          transition: 'clip-path 4s ease-in-out', // Slow transition with 4 seconds duration
        }}
      />
    </div>
  );
}
*/