import styled from 'styled-components';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Slider from '../Slider/Slider';

import { mobile, pc } from '../../responsive';
import { useToggleSlide, useSlider } from '../SliderProvider/SliderProvider';

interface Props {
  openMenu?: boolean;
}

const Container = styled.div`
  min-height: 100%;
  position: relative;
`;

const Main = styled.div<Props>`
  padding: 2% 11%;
  @media only screen and (max-width: 800px) {
    display: ${(props) => (props.openMenu ? 'none' : 'block')};
  }

  ${mobile({
    padding: '2%',
  })}
`;
const MobileSlider = styled.div<Props>`
  transition: height 0.5s;
  ${pc({
    display: 'none',
  })}
  @media only screen and (max-width: 800px) {
    position: absolute;
    height: ${(props) => (props.openMenu ? 'calc(100% - 250px)' : '0')};
    bottom: 0;
    width: 100%;
    right: 0;
  }
`;

const StyledFooter = styled.div<Props>`
  @media only screen and (max-width: 800px) {
    display: ${(props) => (props.openMenu ? 'none' : 'block')};
  }
`;

const Layout: React.FunctionComponent<Props> = ({ children }) => {
  const openMenu = useSlider();
  // const toggleSlider = useToggleSlide()
  return (
    <Container>
      <Header />
      <Main openMenu={openMenu}>{children}</Main>
      <StyledFooter openMenu={openMenu}>
        <Footer />
      </StyledFooter>
      <MobileSlider openMenu={openMenu}>
        <Slider />
      </MobileSlider>
    </Container>
  );
};

export default Layout;
