import styled from 'styled-components';
import { Title } from '../../styles/typography';
import IntroList from './IntroList';

const Content = styled.div`
  @media (min-width: 768px) {
    padding-left: 0.625rem;
  }

  & > div {
    max-width: 24.375rem;

    @media (max-width: 767px) {
      text-align: center;
      margin-left: auto;
      margin-right: auto;
    }
  }

  h1 {
    ${Title}
    margin-bottom: 1.625rem;
  }

  h2 {
    font-size: 1.25rem;
    color: var(--black-2);
    line-height: 1.2;
    margin-bottom: 1.25rem;
  }

  p {
    line-height: 1.25;
    color: var(--black-3);
  }
`;

const IntroContent = () => {
  return (
    <Content>
      <div>
        <h1>Inspire your inspiration</h1>
        <h2>
          Simple to use for your app, products showcase and your inspiration
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis
          venenatis. Proin viverra risus a eros volutpat tempor. In quis arcu et
          eros porta lobortis sit
        </p>
      </div>
      <IntroList />
    </Content>
  );
};

export default IntroContent;
