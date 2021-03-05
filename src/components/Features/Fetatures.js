import styled from 'styled-components';
import Container from '../Container';
import { Title } from '../../styles/typography';
import FeaturesList from './FeaturesList';

const Wrapper = styled.section`
  padding-top: 7.5rem;
  padding-bottom: 10rem;

  h2 {
    ${Title};
    margin-bottom: 1.25rem;
    text-align: center;
  }

  & > div > p {
    font-size: 1.25rem;
    color: var(--black-2);
    line-height: 1.2;
    text-align: center;
  }
`;

const Fetatures = () => {
  return (
    <Wrapper>
      <Container>
        <h2>Tinyone features</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis
          venenatis.
        </p>
        <FeaturesList />
      </Container>
    </Wrapper>
  );
};

export default Fetatures;
