import Menu from './Menu';
import Logo from './Logo';
import Container from './Container';
import styled from 'styled-components';

const Wrapper = styled.header`
  padding-top: 3.75rem;
`;

const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Header = () => {
  return (
    <Wrapper>
      <HeaderContainer>
        <Logo />
        <Menu />
      </HeaderContainer>
    </Wrapper>
  );
};

export default Header;
