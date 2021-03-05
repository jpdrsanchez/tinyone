import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Container from '../Container';
import IntroContent from './IntroContent';
import IntroTablet from './IntroTablet';

const Wrapper = styled.section`
  background: var(--yellow);
  padding-top: calc(163px + 0.75rem);
  padding-bottom: 3.125rem;
  overflow: hidden;
`;

const IntroContainer = styled(Container)`
  display: grid;
  gap: calc(var(--gutter) * 2);
  align-items: center;
  padding-bottom: 2.75rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const SliderControls = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    width: 0.875rem;
    height: 0.875rem;
    background: var(--white);
    opacity: ${(props) => (props.currentslide ? '1' : '0.5')};
    border-radius: 50%;

    &:nth-of-type(${(props) => props.currentSlide + 1}) {
      opacity: 1;
    }

    &:not(:last-of-type) {
      margin-right: 0.4375rem;
    }
  }
`;

const Slider = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;

  & > div {
    flex-shrink: 0;
    width: 100%;
    position: relative;
    z-index: 800;
  }
`;

const Intro = () => {
  const [current, setCurrent] = useState(0);
  const [position, setPosition] = useState(0);
  const slideRef = useRef();

  useEffect(() => {
    const { width } = slideRef.current.getBoundingClientRect();
    setPosition(-(width * current));
  }, [current]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((oldCurrent) => {
        if (oldCurrent === 2) return 0;
        else return oldCurrent + 1;
      });
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Wrapper>
      <Slider ref={slideRef} style={{ transform: `translateX(${position}px)` }}>
        <div>
          <IntroContainer>
            <IntroContent />
            <IntroTablet />
          </IntroContainer>
        </div>
        <div>
          <IntroContainer>
            <IntroContent />
            <IntroTablet />
          </IntroContainer>
        </div>
        <div>
          <IntroContainer>
            <IntroContent />
            <IntroTablet />
          </IntroContainer>
        </div>
      </Slider>
      <SliderControls currentSlide={current}>
        <button onClick={() => setCurrent(0)}></button>
        <button onClick={() => setCurrent(1)}></button>
        <button onClick={() => setCurrent(2)}></button>
      </SliderControls>
    </Wrapper>
  );
};

export default Intro;
