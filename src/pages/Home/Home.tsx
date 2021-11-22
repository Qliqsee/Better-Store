import styled from 'styled-components';
import Carousel from '../../components/Carousel/Carousel';
import Layout from '../../components/Layout/Layout';
import { colors } from '../../global-styles';
import { PhoneAndroid, LaptopMacOutlined, Power } from '@material-ui/icons';
import { resposive, mobile } from '../../responsive';
import { Link } from 'react-router-dom';

interface Props {
  icons?: {
    bg: string;
  };
}

const Container = styled.div``;
const Categories = styled.div`
  margin-top: 50px;
`;
const Header = styled.span`
  color: ${colors.deputy};
  text-align: center;
  font-size: 40px;
  display: block;
  font-weight: 400;
  margin: 30px 0;

  ${mobile({
    fontSize: '25px',
  })}
`;
const SmallHeader = styled.span`
  display: block;
  font-size: 25px;
  text-transform: capitalize;
  margin: 30px 0 20px 0;
  padding-left: 50px;

  ${mobile({
    fontSize: '18px',
    paddingLeft: '30px',
  })}
  ${resposive(
    {
      paddingLeft: '20px',
    },
    400
  )}
  ${resposive(
    {
      paddingLeft: '0px',
    },
    300
  )}
`;
const MainCategories = styled.div`
  width: 100%;
  text-align: center;
  margin: 30px auto;

  ${resposive(
    {
      textAlign: 'left',
    },
    650
  )}
`;
const Div = styled.div`
  display: inline-block;
  width: 28%;
  margin: 10px 10px;

  ${resposive(
    {
      margin: '10px 5px',
      width: '40%',
    },
    650
  )}
  ${resposive(
    {
      width: '46.7%',
    },
    400
  )}
  ${resposive(
    {
      width: '45.4%',
    },
    390
  )}
`;
const Icon = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  background-color: ${(props) => props.icons?.bg};
  margin-bottom: 30px;

  ${resposive(
    {
      height: '90px',
      width: '90px',
    },
    450
  )}
  ${resposive(
    {
      height: '70px',
      width: '70px',
    },
    300
  )}
`;
const Span = styled.span`
  font-weight: 600;
`;
const Category = styled.div`
  border: 1px solid #e7eaed;
  height: 200px;
  width: 100;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  ${resposive(
    {
      height: '170px',
    },
    300
  )}

  &:hover {
    background-color: ${colors.primary};
    cursor: pointer;
  }
  &:hover ${Span} {
    color: white;
  }
  &:hover ${Icon} {
    background-color: white;

    .MuiSvgIcon-root {
      color: black !important;
    }
  }
`;

const Trending = styled.div`
  padding-left: 50px;
  ${mobile({
    paddingLeft: '40px',
  })}
  ${resposive(
    {
      paddingLeft: '25px',
    },
    400
  )}
`;
const MobileCategory = styled.div`
  width: 100%;
  margin-bottom: 30px;
  display: flex;
  flex-wrap: wrap;
  padding-left: 40px;

  ${mobile({
    paddingLeft: '30px',
  })}
  ${resposive(
    {
      paddingLeft: '20px',
    },
    400
  )}
  ${resposive(
    {
      paddingLeft: '0px',
    },
    300
  )}
`;
const CategoryItems = styled.div`
  margin: 0 20px;
  flex: 18%;

  ${mobile({
    margin: '0 20px',
    flex: '18%',
  })}
  ${resposive(
    {
      margin: '0 20px',
      flex: '24%',
    },
    600
  )}
  ${resposive(
    {
      margin: '0 20px',
      flex: '35.1%',
    },
    400
  )}
  ${resposive(
    {
      margin: '0 20px',
      flex: '35.1%',
    },
    300
  )}
`;
const CategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;
const ItemImage = styled.img`
  height: 180px;
  width: 180px;

  ${mobile({
    width: '90px',
    height: '90px',
  })}
`;
const ItemName = styled.span`
  font-size: 20px;
  margin: 20px 0 20px 30px;

  ${mobile({
    fontSize: '14px',
    margin: '10px 0 5px 0px',
  })}
`;
const ItemPrice = styled.span`
  margin-left: 30px;
  font-weight: 600;

  ${mobile({
    marginLeft: '0px',
    fontSize: '14px',
  })}
`;
const LaptopCategory = styled.div``;

const Home: React.FunctionComponent = () => {
  return (
    <Layout>
      <Container>
        <Categories>
          <MainCategories>
            <Div>
              <Link to='/products'>
                <Category>
                  <Icon icons={{ bg: 'purple' }}>
                    <PhoneAndroid style={{ fontSize: 35, color: 'white' }} />
                  </Icon>
                  <Span>Mobile</Span>
                </Category>
              </Link>
            </Div>
            <Div>
              <Link to='/products'>
                <Category>
                  <Icon icons={{ bg: 'red' }}>
                    <LaptopMacOutlined
                      style={{ fontSize: 35, color: 'white' }}
                    />
                  </Icon>
                  <Span>Laptop</Span>
                </Category>
              </Link>
            </Div>
            <Div>
              <Link to='/products'>
                <Category>
                  <Icon icons={{ bg: 'blue' }}>
                    <Power style={{ fontSize: 35, color: 'white' }} />
                  </Icon>
                  <Span>Electronics</Span>
                </Category>
              </Link>
            </Div>
          </MainCategories>
        </Categories>
        <Header>Trending Products</Header>
        <Trending>
          <Carousel />
        </Trending>
        <SmallHeader>Top Mobile Phones</SmallHeader>
        <MobileCategory>
          <CategoryItems>
            <CategoryItem>
              <ItemImage src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXmtK0oHUVrnWSKhOVVGozqpEHoUkGOu75uQ&usqp=CAU' />
              <ItemName>Infinix Hot 20</ItemName>
              <ItemPrice>₦100,000</ItemPrice>
            </CategoryItem>
          </CategoryItems>
          <CategoryItems>
            <CategoryItem>
              <ItemImage src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXmtK0oHUVrnWSKhOVVGozqpEHoUkGOu75uQ&usqp=CAU' />
              <ItemName>Infinix Hot 20</ItemName>
              <ItemPrice>₦100,000</ItemPrice>
            </CategoryItem>
          </CategoryItems>
          <CategoryItems>
            <CategoryItem>
              <ItemImage src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXmtK0oHUVrnWSKhOVVGozqpEHoUkGOu75uQ&usqp=CAU' />
              <ItemName>Infinix Hot 20</ItemName>
              <ItemPrice>₦100,000</ItemPrice>
            </CategoryItem>
          </CategoryItems>
          <CategoryItems>
            <CategoryItem>
              <ItemImage src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXmtK0oHUVrnWSKhOVVGozqpEHoUkGOu75uQ&usqp=CAU' />
              <ItemName>Infinix Hot 20</ItemName>
              <ItemPrice>₦100,000,000</ItemPrice>
            </CategoryItem>
          </CategoryItems>
        </MobileCategory>
        <SmallHeader>Top Computers</SmallHeader>
        <MobileCategory>
          <CategoryItems>
            <CategoryItem>
              <ItemImage src='https://m.media-amazon.com/images/I/81NbkJz9M-L._AC_SL1500_.jpg' />
              <ItemName>Infinix Hot 20</ItemName>
              <ItemPrice>₦100,000</ItemPrice>
            </CategoryItem>
          </CategoryItems>
          <CategoryItems>
            <CategoryItem>
              <ItemImage src='https://m.media-amazon.com/images/I/81NbkJz9M-L._AC_SL1500_.jpg' />
              <ItemName>Infinix Hot 20</ItemName>
              <ItemPrice>₦100,000</ItemPrice>
            </CategoryItem>
          </CategoryItems>
          <CategoryItems>
            <CategoryItem>
              <ItemImage src='https://m.media-amazon.com/images/I/81NbkJz9M-L._AC_SL1500_.jpg' />
              <ItemName>Infinix Hot 20</ItemName>
              <ItemPrice>₦100,000</ItemPrice>
            </CategoryItem>
          </CategoryItems>
          <CategoryItems>
            <CategoryItem>
              <ItemImage src='https://m.media-amazon.com/images/I/81NbkJz9M-L._AC_SL1500_.jpg' />
              <ItemName>Infinix Hot 20</ItemName>
              <ItemPrice>₦100,000</ItemPrice>
            </CategoryItem>
          </CategoryItems>
        </MobileCategory>
      </Container>
    </Layout>
  );
};

export default Home;
