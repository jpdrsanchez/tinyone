import { FaApple, FaWindows } from 'react-icons/fa';
import { DiAndroid } from 'react-icons/di';
import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  align-items: center;
  margin-top: 2.5rem;

  @media (max-width: 767px) {
    justify-content: center;
  }

  li {
    font-size: 2.625rem;
    margin-right: 2.25rem;
  }
`;

const IntroList = () => {
  return (
    <List>
      <li>
        <FaApple />
      </li>
      <li>
        <DiAndroid />
      </li>
      <li>
        <FaWindows />
      </li>
    </List>
  );
};

export default IntroList;
