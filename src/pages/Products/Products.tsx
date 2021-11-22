import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import styled from 'styled-components';

import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { NavigateNext, Apps, ViewList } from '@material-ui/icons';
import { colors } from '../../global-styles';
import { Link } from 'react-router-dom';

interface Props {
  listView?: boolean;
}

const Container = styled.div`
  width: 100%;
`;
const Breadcrumb = styled.div``;
const BreadcrumbLinks = styled.span`
  @media only screen and (max-width: 512px) {
    font-size: 14px;
  }
`;
const HeaderSection = styled.div`
  margin: 50px;
`;
const BigHeader = styled.div`
  font-size: 30px;
  font-weight: 600;
  text-align: center;

  @media only screen and (max-width: 512px) {
    font-size: 20px;
  }
`;
const MainSection = styled.div`
  padding: 20px;
`;
const Filters = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  @media only screen and (max-width: 450px) {
    flex-direction: column;
    justify-content: center;
  }
`;
const Sort = styled.div`
  margin-right: 20px;
`;
const Select = styled.select`
  padding: 10px 20px;
  margin-bottom: 20px;
`;
const Option = styled.option``;
const View = styled.div`
  display: flex;
  flex-direction: row;
`;
const Icon2 = styled.div<Props>`
  margin: 0 10px;
  cursor: pointer;

  .MuiSvgIcon-root {
    color: ${(props) => (props.listView ? 'darkcyan!important' : 'black')};
  }

  &:hover {
    .MuiSvgIcon-root {
      color: ${colors.primary}!important;
    }
  }
`;
const Icon = styled.div<Props>`
  margin: 0 10px;
  cursor: pointer;

  .MuiSvgIcon-root {
    color: ${(props) => (props.listView ? 'black' : 'darkcyan')};
  }

  &:hover {
    .MuiSvgIcon-root {
      color: ${colors.primary}!important;
    }
  }
`;
// const ProductDiv = styled.div<Props>`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
// `;
const ProductContainer = styled.div<Props>`
  display: ${(props) => (props.listView ? 'flex' : 'block')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
  padding: 0 50px;

  @media only screen and (max-width: 1100px) {
    margin: 30px 0;
    padding: 0 10px;
  }
  @media only screen and (max-width: 600px) {
    display: flex;
  }
`;
const ProductWrapper = styled.div<Props>`
  display: ${(props) => (props.listView ? 'block' : 'inline-block')};
  width: ${(props) => (props.listView ? '80%' : '30%')};
  margin: ${(props) => (props.listView ? '0' : '10px')};

  @media only screen and (max-width: 1100px) {
    width: ${(props) => (props.listView ? '100%' : '45%')};
  }
  @media only screen and (max-width: 600px) {
    width: ${(props) => (props.listView ? '100%' : '70%')};
  }
  @media only screen and (max-width: 440px) {
    width: 100%;
  }
`;
const Product = styled.div<Props>`
  display: flex;
  flex-direction: ${(props) => (props.listView ? 'row' : 'column')};
  align-items: center;
  height: ${(props) => (props.listView ? '' : '310px')};
  width: 100%;
  padding: 15px 30px;
  background: whitesmoke;
  box-shadow: 3px 3px 3px grey;
  margin: 20px 0;

  @media only screen and (max-width: 1300px) {
    height: ${(props) => (props.listView ? '' : '350px')};
  }
  @media only screen and (max-width: 1300px) {
    height: ${(props) => (props.listView ? '' : '310px')};
  }
  @media only screen and (max-width: 1099px) {
    height: ${(props) => (props.listView ? '' : '280px')};
  }
  @media only screen and (max-width: 450px) {
    flex-direction: ${(props) => (props.listView ? 'column' : 'column')};
  }
  @media only screen and (max-width: 300px) {
    height: ${(props) => (props.listView ? '' : '300px')};
  }
`;
const Left = styled.div<Props>`
  height: ${(props) => (props.listView ? '100px' : '100px')};
  width: ${(props) => (props.listView ? '150px' : '150px')};
  border: 1px solid black;
  margin: ${(props) => (props.listView ? '' : '0 0 20px 0')};

  @media only screen and (max-width: 1200px) {
    height: ${(props) => (props.listView ? '100px' : '70')};
    width: ${(props) => (props.listView ? '150px' : '110px')};
  }
  @media only screen and (max-width: 512px) {
    height: ${(props) => (props.listView ? '100px' : '100px')};
    width: ${(props) => (props.listView ? '200px' : '150px')};
  }

  @media only screen and (max-width: 450px) {
    margin: ${(props) => (props.listView ? '0 0 30px 0' : '0 0 30px 0')};
    height: ${(props) => (props.listView ? '100px' : '100px')};
    width: ${(props) => (props.listView ? '150px' : '150px')};
  }
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
`;
const Right = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 30px;

  @media only screen and (max-width: 512px) {
    padding: 0 10px;
  }
`;
const ProductName = styled.div<Props>`
  font-size: ${(props) => (props.listView ? '25px' : '20px')};
  font-weight: ${(props) => (props.listView ? '700' : '400')};
  margin: 0 0 10px 0;

  @media only screen and (max-width: 1200px) {
    font-size: ${(props) => (props.listView ? '25px' : '17px')};
  }

  @media only screen and (max-width: 512px) {
    font-size: ${(props) => (props.listView ? '19px' : '20px')};
  }
`;
const ProductPrice = styled.div<Props>`
  font-size: ${(props) => (props.listView ? '18px' : '16px')};
  margin: 0 0 10px 0;
  color: ${colors.primary};

  @media only screen and (max-width: 1200px) {
    font-size: ${(props) => (props.listView ? '18px' : '15px')};
  }

  @media only screen and (max-width: 512px) {
    font-size: ${(props) => (props.listView ? '16px' : '16px')};
  }
`;
const ProductDescription = styled.div<Props>`
  /* display: ${(props) => (props.listView ? 'block' : 'none')}; */
  font-size: 16px;
  line-height: 1.4;

  @media only screen and (max-width: 1200px) {
    font-size: ${(props) => (props.listView ? '18px' : '14px')};
  }
  @media only screen and (max-width: 512px) {
    font-size: 14px;
  }
`;
// const Breadcrumb = styled.div``;
// const Breadcrumb = styled.div``;
// const Breadcrumb = styled.div``;
// const Breadcrumb = styled.div``;

const Products = () => {
  const [listView, setListview] = useState(true);

  return (
    <Layout>
      <Container>
        <Breadcrumb>
          <Breadcrumbs
            separator={<NavigateNext fontSize='small' />}
            aria-label='breadcrumb'
          >
            <BreadcrumbLinks>Home</BreadcrumbLinks>
            <BreadcrumbLinks>Phones</BreadcrumbLinks>
          </Breadcrumbs>
        </Breadcrumb>
        <HeaderSection>
          <BigHeader>Mobile Phones</BigHeader>
        </HeaderSection>
        <MainSection>
          <Filters>
            <Sort>
              <Select>
                <Option disabled selected>
                  Sort by
                </Option>
                <Option>Price: Ascending</Option>
                <Option>Price: Descending</Option>
                <Option>Alphabetical: Ascending</Option>
                <Option>Alphabetical: Descending</Option>
              </Select>
            </Sort>
            <View>
              <Icon listView={listView} onClick={(prev) => setListview(false)}>
                <Apps />{' '}
              </Icon>
              <Icon2 listView={listView} onClick={(prev) => setListview(true)}>
                <ViewList />{' '}
              </Icon2>
            </View>
          </Filters>
          {/* <ProductDiv listView={listView}> */}
          <ProductContainer listView={listView}>
            <ProductWrapper listView={listView}>
              <Link to='/product'>
                <Product listView={listView}>
                  <Left listView={listView}>
                    <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUnS5UoxKi6GurT5W11iQMlvqzRPjUy3zsFw&usqp=CAU' />
                  </Left>
                  <Right>
                    <ProductName listView={listView}>
                      Infinix Hot 10
                    </ProductName>
                    <ProductPrice listView={listView}>₦1,000,000</ProductPrice>
                    <ProductDescription listView={listView}>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Delectus, aut?
                    </ProductDescription>
                  </Right>
                </Product>
              </Link>
            </ProductWrapper>
            <ProductWrapper listView={listView}>
              <Link to='/products'>
                <Product listView={listView}>
                  <Left listView={listView}>
                    <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUnS5UoxKi6GurT5W11iQMlvqzRPjUy3zsFw&usqp=CAU' />
                  </Left>
                  <Right>
                    <ProductName listView={listView}>
                      Infinix Hot 10
                    </ProductName>
                    <ProductPrice listView={listView}>₦1,000,000</ProductPrice>
                    <ProductDescription listView={listView}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quae, mollitia.
                    </ProductDescription>
                  </Right>
                </Product>
              </Link>
            </ProductWrapper>
            <ProductWrapper listView={listView}>
              <Link to='/products'>
                <Product listView={listView}>
                  <Left listView={listView}>
                    <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUnS5UoxKi6GurT5W11iQMlvqzRPjUy3zsFw&usqp=CAU' />
                  </Left>
                  <Right>
                    <ProductName listView={listView}>
                      Infinix Hot 10
                    </ProductName>
                    <ProductPrice listView={listView}>₦1,000,000</ProductPrice>
                    <ProductDescription listView={listView}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Porro, sit.
                    </ProductDescription>
                  </Right>
                </Product>
              </Link>
            </ProductWrapper>
          </ProductContainer>
          {/* </ProductDiv> */}
        </MainSection>
      </Container>
    </Layout>
  );
};

export default Products;
