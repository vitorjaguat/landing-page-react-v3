import './Hero.css';

import React from 'react';
import Navbar from './Navbar';
import { useInView } from 'react-intersection-observer';
import Container from './Container';

export default function Hero({ imageSrc }) {
  const { ref, inView } = useInView();

  return (
    <>
      {/* <Container> */}
      <div className='hero' ref={ref}>
        <img src={imageSrc} alt='Books' className='hero__image' />
        <h1 className='hero__title'>books for everyone.</h1>
      </div>
      {/* </Container> */}
      <Navbar heroInView={inView} />
    </>
  );
}
