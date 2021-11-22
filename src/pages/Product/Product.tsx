import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import Carousel from '../../components/Carousel/Carousel';
import styled from 'styled-components';

import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { NavigateNext, Apps, ViewList } from '@material-ui/icons';
import { colors } from '../../global-styles';

import { ShoppingCartOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';

interface Props {
  background?: string;
}

const Container = styled.div``;
const Breadcrumb = styled.div``;
const BreadcrumbLinks = styled.span`
  @media only screen and (max-width: 512px) {
    font-size: 14px;
  }
`;
const ProductContainer = styled.div`
  margin: 50px 0;
  padding: 0 30px;

  @media only screen and (max-width: 850px) {
    padding: 0 5px;
  }
`;
const ProductDiv = styled.div`
  display: flex;

  @media only screen and (max-width: 850px) {
    flex-direction: column;
  }
`;
const Left = styled.div`
  height: 400px;
  width: 40%;
  border: 1px solid grey;
  margin-bottom: 50px;
  @media only screen and (max-width: 850px) {
    width: 60%;
    height: 200px;
    margin: 0 auto 50px auto;
  }
  @media only screen and (max-width: 400px) {
    height: 150px;
  }
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
`;
const RightDiv = styled.div`
  width: 60%;

  @media only screen and (max-width: 850px) {
    display: flex;
    width: 100%;
    justify-content: center;
    width: 100%;
    align-items: center;
  }
`;
const Right = styled.div`
  width: 100%;
  margin: 0 0 0 30px;

  @media only screen and (max-width: 850px) {
    width: 70%;
  }
`;
const UpperRight = styled.div``;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 30px 0;
`;
const Button = styled.button<Props>`
  background-color: ${(props) =>
    props.background === 'filled' ? 'darkcyan' : 'transparent'};
  border: 2px solid ${colors.primary};
  color: ${(props) => (props.background === 'filled' ? 'white' : '')};
  margin-bottom: 20px;
  width: 400px;
  height: 50px;
  border-radius: 10px;
  font-size: 17px;
  cursor: pointer;

  @media only screen and (max-width: 850px) {
    width: 100%;
  }

  .MuiSvgIcon-root {
    margin-bottom: -7px;
  }
  &:hover {
    background-color: ${(props) =>
      props.background === 'filled' ? 'transparent' : 'darkcyan'};
    color: ${(props) => (props.background === 'filled' ? 'black' : 'white')};
  }
  &:hover .MuiSvgIcon-root {
    color: ${(props) => (props.background === 'filled' ? 'black' : 'white')};
  }
`;
const LowerRight = styled.div``;
const RightSpan = styled.div`
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 20px;
  text-transform: uppercase;
  color: grey;

  @media only screen and (max-width: 512px) {
    font-size: 18px;
  }
`;
const Ul = styled.ul`
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  list-style-type: square;
  justify-content: center;
  align-items: center;
`;
const Li = styled.li`
  margin: 10px 0;
  font-weight: 600;
  line-height: 1.5;
`;
const Trending = styled.div``;
const TrendingHead = styled.div`
  font-size: 22px;
  margin: 30px 0;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  color: ${colors.primary};

  @media only screen and (max-width: 512px) {
    font-size: 17px;
  }
`;
const Span = styled.div`
  font-size: 20px;
  margin: 10px 0;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  color: ${colors.primary};

  @media only screen and (max-width: 512px) {
    font-size: 17px;
  }
`;

const Product = () => {
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
            <BreadcrumbLinks>Infinix Hot 10</BreadcrumbLinks>
          </Breadcrumbs>
        </Breadcrumb>
        <ProductContainer>
          <ProductDiv>
            <Left>
              <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUnS5UoxKi6GurT5W11iQMlvqzRPjUy3zsFw&usqp=CAU' />
            </Left>
            <RightDiv>
              <Right>
                <UpperRight>
                  <RightSpan>Infinix Hot 10</RightSpan>
                  <RightSpan>₦33,000</RightSpan>
                  <ButtonContainer>
                    <Button background='filled'>
                      <ShoppingCartOutlined /> Add to cart
                    </Button>
                    <Link to='/checkout' style={{ cursor: 'pointer' }}>
                      <Button background='empty'>Buy it now</Button>
                    </Link>
                  </ButtonContainer>
                </UpperRight>
                <LowerRight>
                  <Span>Specifications</Span>
                  <Ul>
                    <Li>Very good condition and Includes receipt</Li>
                    <Li>Very good condition and Includes receipt</Li>
                    <Li>Very good condition and Includes receipt</Li>
                    <Li>Very good condition and Includes receipt</Li>
                  </Ul>
                </LowerRight>
              </Right>
            </RightDiv>
          </ProductDiv>
        </ProductContainer>
        <Trending>
          <TrendingHead>Trending Products</TrendingHead>
          <Carousel />
        </Trending>
      </Container>
    </Layout>
  );
};

export default Product;
