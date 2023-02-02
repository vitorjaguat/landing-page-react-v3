import React from 'react';
import './Slider.css';
import Container from './Container';

export default function Slider({ imageSrc, title, subtitle, flipped }) {
  const renderContent = () => {
    if (!flipped) {
      return (
        <>
          <img src={imageSrc} alt={title} className='slider__image' />
          <div className='slider__content'>
            <h1 className='slider__title'>{title}</h1>
            <p>{subtitle}</p>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className='slider__content'>
            <h1 className='slider__title'>{title}</h1>
            <p>{subtitle}</p>
          </div>
          <img src={imageSrc} alt={title} className='slider__image' />
        </>
      );
    }
  };

  return (
    <Container>
      <div className='slider'>{renderContent()}</div>
    </Container>
  );
}
