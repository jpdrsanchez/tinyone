import styled from 'styled-components';

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  position: relative;
  width: 100%;
  padding-left: calc(var(--gutter) * 2);
  padding-right: calc(var(--gutter) * 2);

  @media (min-width: 576px) {
    padding-left: var(--gutter);
    padding-right: var(--gutter);
    max-width: var(--container-sm);
  }

  @media (min-width: 768px) {
    max-width: var(--container-md);
  }

  @media (min-width: 992px) {
    max-width: var(--container-lg);
  }
`;

const Container = ({ className, children }) => {
  return <Wrapper className={className}>{children}</Wrapper>;
};

export default Container;
