import styled from 'styled-components';
import { FaTabletAlt } from 'react-icons/fa';
import { SubTitle } from '../../styles/typography';

const Item = styled.li`
  display: grid;
  grid-template-columns: minmax(max-content, 1fr) 3fr;
  font-size: 2.8125rem;
  text-align: left;
  max-width: 18.75rem;
  width: 100%;
  margin: 0 auto;

  h3 {
    ${SubTitle}
    margin-bottom: .75rem;
  }

  p {
    font-size: 1rem;
    color: var(--grey);
    line-height: 1.25rem;
  }
`;

const FeaturesItem = ({ Icon, title, text }) => {
  return (
    <Item>
      {Icon ? <Icon /> : <FaTabletAlt /> /*Fallback*/}
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </Item>
  );
};

export default FeaturesItem;
