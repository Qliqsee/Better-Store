import React from 'react';
import styled from 'styled-components';
import { mobile, resposive } from '../../responsive';
import { colors } from '../../global-styles';
import { useToggleSlide, useSlider } from '../SliderProvider/SliderProvider';
import { Link } from 'react-router-dom';

interface Props {
  openMenu?: boolean;
}

const Container = styled.div<Props>`
  @media only screen and (max-width: 800px) {
    height: ${(props) => (props.openMenu ? '100%' : '0')};
    background-color: ${colors.primary};
    width: 100%;
    display: ${(props) => (props.openMenu ? 'block' : 'none')};
  }
`;
const Nav = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const NavtItem = styled.div`
  margin: 15px 0;
  padding-left: 20px;
  font-size: 20px;
  font-weight: 600;
  color: white;
`;

const Slider = () => {
  const toggleMenu = useToggleSlide();
  const openMenu = useSlider();
  return (
    <Container openMenu={openMenu}>
      <Nav>
        <NavtItem>
          <Link onClick={toggleMenu} to='/'>
            Home
          </Link>
        </NavtItem>
        <NavtItem>
          <Link onClick={toggleMenu} to='/product'>
            Phone
          </Link>
        </NavtItem>
        <NavtItem>
          <Link onClick={toggleMenu} to='/product'>
            Laptops
          </Link>
        </NavtItem>
      </Nav>
    </Container>
  );
};

export default Slider;
