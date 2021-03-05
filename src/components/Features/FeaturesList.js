import styled from 'styled-components';
import FeaturesItem from './FeaturesItem';
import {
  FaTabletAlt,
  FaRegLemon,
  FaRegFolder,
  FaCode,
  FaRegEnvelope,
  FaRegBookmark,
} from 'react-icons/fa';

const List = styled.ul`
  display: grid;
  gap: 5rem calc(var(--gutter) * 2);
  margin-top: 5.5rem;

  @media (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const FeaturesList = () => {
  return (
    <List>
      <FeaturesItem
        Icon={FaTabletAlt}
        title="Fully Responsive"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum."
      />
      <FeaturesItem
        Icon={FaRegLemon}
        title="Fully Layered PSD"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum."
      />
      <FeaturesItem
        Icon={FaRegFolder}
        title="Font Awesome Icons"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum."
      />
      <FeaturesItem
        Icon={FaCode}
        title="HTML3 & CSS3"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum."
      />
      <FeaturesItem
        Icon={FaRegEnvelope}
        title="Email Template"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum."
      />
      <FeaturesItem
        Icon={FaRegBookmark}
        title="Free to download"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum."
      />
    </List>
  );
};

export default FeaturesList;
