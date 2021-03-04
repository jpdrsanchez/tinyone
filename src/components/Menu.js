import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useMedia from '../hooks/useMedia';

const NavMenu = styled.nav`
  @media (max-width: 767px) {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    transform: ${(props) =>
      props.open ? 'translateX(0)' : 'translateX(-100%)'};
    transition: all 0.5s;
    z-index: 998;
    background-color: var(--black-1);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ul {
    @media (min-width: 768px) {
      display: flex;
      align-items: center;
    }
  }

  li {
    &:not(:last-child) {
      @media (max-width: 767px) {
        margin-bottom: 2.5rem;
      }

      @media (min-width: 768px) {
        margin-right: 4.5rem;
      }
    }
  }

  a {
    font-size: 1.375rem;
    font-weight: 700;
    display: block;

    @media (max-width: 767px) {
      color: var(--white);
      text-align: center;
      font-size: 2rem;
    }
  }
`;

const MobileButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  position: relative;
  z-index: 999;

  @media (min-width: 768px) {
    display: none;
  }

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 0.1875rem;
    background-color: ${(props) =>
      props.open ? 'var(--white)' : 'var(--black-1)'};
    transition: all 0.5s;
    box-shadow: ${(props) =>
      props.open
        ? '0'
        : '0 0.375rem var(--black-1), 0 -0.375rem var(--black-1)'};
    transform: ${(props) => (props.open ? 'rotate(45deg)' : 'none')};
  }

  &::before {
    position: absolute;
    content: '';
    display: block;
    width: 100%;
    height: 0.1875rem;
    background-color: ${(props) =>
      props.open ? 'var(--white)' : 'var(--black-1)'};
    transition: all 0.5s;
    transform: ${(props) => (props.open ? 'rotate(-45deg)' : 'none')};
  }
`;

const Menu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { desktop } = useMedia();

  useEffect(() => {
    if (desktop) setOpenMenu(false);
  }, [desktop]);

  return (
    <>
      <MobileButton
        aria-label="Abrir Menu"
        type="Button"
        onClick={() => setOpenMenu(!openMenu)}
        open={openMenu}
      />
      <NavMenu open={openMenu}>
        <ul>
          <li>
            <a href="/">Features</a>
          </li>
          <li>
            <a href="/">Support</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
        </ul>
      </NavMenu>
    </>
  );
};

export default Menu;
