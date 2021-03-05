import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaGooglePlusSquare,
  FaPinterestSquare,
} from 'react-icons/fa';
import styled from 'styled-components';

const List = styled.ul`
  color: var(--yellow);
  font-size: 2.8125rem;
  display: flex;
  justify-content: center;
  margin-top: 4.375rem;

  @media (min-width: 576px) {
    font-size: 3.75rem;
  }

  li {
    &:not(:last-child) {
      margin-right: 2.125rem;
    }
  }
`;

const FooterSocialList = () => {
  return (
    <List>
      <li>
        <FaFacebookSquare />
      </li>
      <li>
        <FaTwitterSquare />
      </li>
      <li>
        <FaGooglePlusSquare />
      </li>
      <li>
        <FaPinterestSquare />
      </li>
    </List>
  );
};

export default FooterSocialList;
