import styled from 'styled-components';
import { colors } from '../../global-styles';
import { Link } from 'react-router-dom';

import {
  SearchOutlined,
  ShoppingCartOutlined,
  Close,
  Menu,
} from '@material-ui/icons';
import Badge from '@material-ui/core/Badge';

import { mobile, pc } from '../../responsive';
import { useSlider, useToggleSlide } from '../SliderProvider/SliderProvider';

const Container = styled.div`
  height: 240px;
  display: block;
  background-color: ${colors.primary};
  padding-bottom: 10px;

  ${mobile({
    display: 'none',
  })}
`;
const BigWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75%;
`;
const SmallWrapper = styled.div`
  height: 25%;
  display: flex;
  justify-content: center;
  padding-top: 20px;
`;
const Nav = styled.div`
  height: 100%;
  width: 64%;
  display: flex;
  align-items: center;
`;
const Ul = styled.ul`
  display: flex;
  height: 100%;
`;
const Li = styled.li`
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  color: ${colors.secondary};
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 20px;

  &:hover {
    background-color: ${colors.secondary};
    color: ${colors.primary};
  }
`;
const Head = styled.div`
  width: 64%;
  height: 70%;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  width: 36%;
`;
const Image = styled.img`
  width: 100%;
  display: inline-block;
  height: 100%;
`;
const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const FormContainer = styled.div`
  display: flex;
  width: 100%;
`;
const Form = styled.form`
  background-color: white;
  width: 70%;
  height: 40px;
  position: relative;
`;
const Input = styled.input`
  display: inline-block;
  position: absolute;
  height: 100%;
  border: none;
  width: 85%;
  top: 0;
  left: 0;
  padding: 3px;
  color: ${colors.darkPrimary};
  font-weight: 500;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${colors.darkPrimary};
  }
`;
const Submit = styled.button`
  position: absolute;
  display: inline-block;
  width: 15%;
  height: 100%;
  background-color: transparent;
  cursor: pointer;
  border: none;
  top: 0;
  right: 0;
`;

const MobileContainer = styled.div`
  ${pc({
    display: 'none',
  })}
  background-color: ${colors.primary};
  display: block;
  height: 250px;
  width: 100%;
`;
const BigContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 75%;
`;
const Logo = styled.img`
  height: 100%;
  width: 100%;
`;
const Hr = styled.hr`
  background-color: white;
`;
const SmallContainer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;
const ResMenu = styled.div``;
const Cart = styled.div``;
const SearchForm = styled.form`
  width: 60%;
`;
const Search = styled.div`
  height: 35px;
  margin-top: 20px;
  width: 100%;
  background-color: white;
  position: relative;
`;
const SearchInput = styled.input`
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  border: none;
  width: 85%;

  padding: 3px;
  color: ${colors.darkPrimary};
  font-weight: 500;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${colors.darkPrimary};
  }
`;
const SearchSubmit = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15%;
  height: 100%;
  background-color: transparent;
  cursor: pointer;
  border: none;
`;
// const MobileContainer = styled.div``

const Header: React.FunctionComponent = () => {
  const toggleMenu = useToggleSlide();
  const openMenu = useSlider();
  return (
    <>
      <MobileContainer>
        <BigContainer>
          <Link style={{ height: '60%', width: '62%' }} to='/'>
            <Logo src='logo.png' />
          </Link>

          <SearchForm>
            <Search>
              <SearchInput />
              <SearchSubmit type='submit'>
                <SearchOutlined style={{ color: colors.primary }} />{' '}
              </SearchSubmit>
            </Search>
          </SearchForm>
        </BigContainer>
        <Hr />
        <SmallContainer>
          <ResMenu onClick={toggleMenu}>
            {openMenu ? (
              <Close style={{ color: 'white', fontSize: 30 }} />
            ) : (
              <Menu style={{ color: 'white', fontSize: 30 }} />
            )}
          </ResMenu>
          <Cart>
            <Badge
              badgeContent={4}
              style={{
                marginLeft: 10,
                color: colors.secondary,
              }}
            >
              <ShoppingCartOutlined
                style={{ fontSize: 30, color: colors.secondary }}
              />
            </Badge>
          </Cart>
        </SmallContainer>
      </MobileContainer>
      <Container>
        <BigWrapper>
          <Head>
            <Left>
              <Image src='logo.png' />
            </Left>
            <Right>
              <FormContainer>
                <Form>
                  <Input
                    type='text'
                    required
                    placeholder='Search anything here...'
                  />
                  <Submit type='submit'>
                    <SearchOutlined style={{ color: colors.darkPrimary }} />
                  </Submit>
                </Form>
                <Badge
                  badgeContent={4}
                  color='error'
                  style={{
                    marginLeft: 10,
                  }}
                >
                  <ShoppingCartOutlined
                    style={{ fontSize: 30, color: colors.secondary }}
                  />
                </Badge>
              </FormContainer>
            </Right>
          </Head>
        </BigWrapper>
        <SmallWrapper>
          <Nav>
            <Ul>
              <Li>
                <Link to='/'>Home</Link>
              </Li>
              <Li>
                <Link to='/product'>Laptops</Link>
              </Li>
              <Li>
                <Link to='/product'>Phones</Link>
              </Li>
            </Ul>
          </Nav>
        </SmallWrapper>
      </Container>
    </>
  );
};

export default Header;
