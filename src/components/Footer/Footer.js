import styled from 'styled-components';
import { Title } from '../../styles/typography';
import Container from '../Container';
import FormFooter from './FormFooter';

const Wrapper = styled.footer`
  background: var(--black-1);
  padding-top: 5.625rem;
  padding-bottom: 7.5rem;

  h2 {
    ${Title};
    color: var(--yellow);
    margin-bottom: 1.25rem;
    text-align: center;
  }

  & > div > p {
    font-size: 1.25rem;
    color: var(--grey);
    line-height: 1.2;
    text-align: center;
    padding-bottom: 2.5rem;
  }
`;

const FooterLists = styled.div`
  color: var(--white);
  line-height: 1.5;
  margin-top: 7.5rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;

  @media (max-width: 767px) {
    text-align: center;
    row-gap: 2.5rem;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 768px) {
    grid-template-columns: 4fr 2fr 2fr 2fr 2fr;
  }

  ul {
    &:first-of-type {
      max-width: 11.875rem;

      @media (max-width: 575px) {
        margin-left: auto;
        margin-right: auto;
      }
    }
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <h2>Keep in touch with us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis
          venenatis.
        </p>
        <FormFooter />
        <FooterLists>
          <ul>
            <li>HALOVIETNAM LTD 66, Dang Van ngu, Dong Da Hanoi, Vietnam</li>
            <li>contact@halovietnam.com</li>
            <li>+844 35149182</li>
          </ul>
          <ul>
            <li>Examples</li>
            <li>Shop</li>
            <li>License</li>
          </ul>
          <ul>
            <li>Contact</li>
            <li>About</li>
            <li>Privacy</li>
            <li>Terms</li>
          </ul>
          <ul>
            <li>Download</li>
            <li>Support</li>
            <li>Documents</li>
          </ul>
          <ul>
            <li>Media</li>
            <li>Blog</li>
            <li>Forums</li>
          </ul>
        </FooterLists>
      </Container>
    </Wrapper>
  );
};

export default Footer;
