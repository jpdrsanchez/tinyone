import styled from 'styled-components';
import Fingerprint from '../assets/images/fingerprint.png';
import YellowFingerprint from '../assets/images/fingerprint-yellow.png';

const Wrapper = styled.a`
  display: flex;
  align-items: center;

  img {
    margin-right: 0.625rem;
  }

  span {
    font-size: 1.875rem;
    font-weight: 700;
    color: ${(props) => props.yellow && 'var(--yellow)'};
  }
`;

const Logo = ({ yellow }) => {
  return (
    <Wrapper href="/" yellow={yellow}>
      <img
        src={yellow ? YellowFingerprint : Fingerprint}
        alt="Imagem de uma impressão digital na cor preta"
      />
      <span>tinyone</span>
    </Wrapper>
  );
};

export default Logo;
