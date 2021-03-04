import styled from 'styled-components';
import Container from '../Container';
import IntroContent from './IntroContent';
import IntroTablet from './IntroTablet';

const Wrapper = styled.section`
  background: var(--yellow);
  padding-top: calc(163px + 0.75rem);
  padding-bottom: 3.125rem;
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

    &:first-of-type {
      opacity: 1;
    }

    &:not(:last-of-type) {
      margin-right: 0.4375rem;
    }
  }
`;

const Intro = () => {
  return (
    <Wrapper>
      <IntroContainer>
        <IntroContent />
        <IntroTablet />
      </IntroContainer>
      <SliderControls>
        <button></button>
        <button></button>
        <button></button>
      </SliderControls>
    </Wrapper>
  );
};

export default Intro;
