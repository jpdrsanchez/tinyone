import styled from 'styled-components';
import Logo from '../Logo';

const TabletWrapper = styled.div`
  @media (min-width: 768px) {
    padding-left: 6.25rem;
  }

  & > div {
    width: 280px;
    height: 416px;
    background: var(--white);
    border-radius: 1.875rem;
    padding: 2.75rem 0.875rem;

    @media (max-width: 767px) {
      margin: 1.875rem auto 0;
    }

    @media (min-width: 576px) {
      width: 315px;
      height: 468px;
    }

    & > div {
      background: var(--black-1);
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

const IntroTablet = () => {
  return (
    <TabletWrapper>
      <div>
        <div>
          <Logo yellow={true} />
        </div>
      </div>
    </TabletWrapper>
  );
};

export default IntroTablet;
