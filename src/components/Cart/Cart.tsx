import React, { useState } from 'react';
import { colors } from '../../global-styles';
import styled from 'styled-components';

import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { NavigateNext } from '@material-ui/icons';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import { DeleteOutline, Remove, Add } from '@material-ui/icons';

const Container = styled.div`
  padding: 50px 50px 50px 50px;
  background-color: whitesmoke;
  width: 90%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 1100px) {
    padding: 50px 10px 10px 50px;
    width: 100%;
  }
`;
const MainContent = styled.div`
  width: 100%;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
`;
const ImageContainer = styled.div`
  display: flex;
`;
const Image = styled.img`
  height: 70px;
  width: 80px;
  margin-right: 15px;
  border-radius: 5px;
  border: 1px solid black;
`;
const Title = styled.div`
  transform: translateY(25px);
  font-size: 13px;
  text-transform: uppercase;
`;
const Utils = styled.div`
  display: flex;
  margin: 20px 0;
`;
const Icon = styled.div`
  .MuiSvgIcon-root {
    font-size: 27px;
    color: darkcyan;
    transform: translateY(-5px);
    cursor: pointer;
    margin-right: 10px;
  }
`;
const Counter = styled.div`
  margin: 0 20px;
  display: flex;
`;
const CounterBtn = styled.div`
  .MuiSvgIcon-root {
    background-color: ${colors.primary} !important;
    font-size: 16px;
    color: white;
    cursor: pointer;
  }
`;

const Output = styled.div`
  margin: 0 20px;
  background-color: white;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transform: translateY(-10px);
`;
const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BreakDown = styled.div`
  padding-top: 20px;
  border-top: 1px solid darkcyan;
  border-bottom: 1px solid darkcyan;
`;
const Value = styled.div`
  font-size: 15px;
`;
const Subtotal = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
const Text = styled.div``;
const Total = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
const BoldText = styled.div`
  font-weight: 600;
`;
const BigTotal = styled.div`
  font-size: 20px;
`;
const Div = styled.div``;

const Cart = () => {
  return (
    <Container>
      <MainContent>
        <Product>
          <Left>
            <ImageContainer>
              <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUnS5UoxKi6GurT5W11iQMlvqzRPjUy3zsFw&usqp=CAU' />
              <Title>Infinix Hot 10</Title>
            </ImageContainer>
            <Utils>
              <Icon>
                <DeleteOutline />
              </Icon>
              <Counter>
                <CounterBtn>
                  <Remove />
                </CounterBtn>
                <Output>
                  <Div>23</Div>
                </Output>
                <CounterBtn>
                  <Add />
                </CounterBtn>
              </Counter>
            </Utils>
          </Left>
          <Right>
            <Value>₦60,000,000</Value>
          </Right>
        </Product>
        <Product>
          <Left>
            <ImageContainer>
              <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUnS5UoxKi6GurT5W11iQMlvqzRPjUy3zsFw&usqp=CAU' />
              <Title>Infinix Hot 10</Title>
            </ImageContainer>
            <Utils>
              <Icon>
                <DeleteOutline />
              </Icon>
              <Counter>
                <CounterBtn>
                  <Remove />
                </CounterBtn>
                <Output>
                  <Div>23</Div>
                </Output>
                <CounterBtn>
                  <Add />
                </CounterBtn>
              </Counter>
            </Utils>
          </Left>
          <Right>
            <Value>₦60,000,000</Value>
          </Right>
        </Product>
        <Product>
          <Left>
            <ImageContainer>
              <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUnS5UoxKi6GurT5W11iQMlvqzRPjUy3zsFw&usqp=CAU' />
              <Title>Infinix Hot 10</Title>
            </ImageContainer>
            <Utils>
              <Icon>
                <DeleteOutline />
              </Icon>
              <Counter>
                <CounterBtn>
                  <Remove />
                </CounterBtn>
                <Output>
                  <Div>23</Div>
                </Output>
                <CounterBtn>
                  <Add />
                </CounterBtn>
              </Counter>
            </Utils>
          </Left>
          <Right>
            <Value>₦60,000,000</Value>
          </Right>
        </Product>
        <Product>
          <Left>
            <ImageContainer>
              <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUnS5UoxKi6GurT5W11iQMlvqzRPjUy3zsFw&usqp=CAU' />
              <Title>Infinix Hot 10</Title>
            </ImageContainer>
            <Utils>
              <Icon>
                <DeleteOutline />
              </Icon>
              <Counter>
                <CounterBtn>
                  <Remove />
                </CounterBtn>
                <Output>
                  <Div>23</Div>
                </Output>
                <CounterBtn>
                  <Add />
                </CounterBtn>
              </Counter>
            </Utils>
          </Left>
          <Right>
            <Value>₦60,000,000</Value>
          </Right>
        </Product>
        <Product>
          <Left>
            <ImageContainer>
              <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUnS5UoxKi6GurT5W11iQMlvqzRPjUy3zsFw&usqp=CAU' />
              <Title>Infinix Hot 10</Title>
            </ImageContainer>
            <Utils>
              <Icon>
                <DeleteOutline />
              </Icon>
              <Counter>
                <CounterBtn>
                  <Remove />
                </CounterBtn>
                <Output>
                  <Div>23</Div>
                </Output>
                <CounterBtn>
                  <Add />
                </CounterBtn>
              </Counter>
            </Utils>
          </Left>
          <Right>
            <Value>₦60,000,000</Value>
          </Right>
        </Product>
        <Product>
          <Left>
            <ImageContainer>
              <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUnS5UoxKi6GurT5W11iQMlvqzRPjUy3zsFw&usqp=CAU' />
              <Title>Infinix Hot 10</Title>
            </ImageContainer>
            <Utils>
              <Icon>
                <DeleteOutline />
              </Icon>
              <Counter>
                <CounterBtn>
                  <Remove />
                </CounterBtn>
                <Output>
                  <Div>23</Div>
                </Output>
                <CounterBtn>
                  <Add />
                </CounterBtn>
              </Counter>
            </Utils>
          </Left>
          <Right>
            <Value>₦60,000,000</Value>
          </Right>
        </Product>
        <Product>
          <Left>
            <ImageContainer>
              <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUnS5UoxKi6GurT5W11iQMlvqzRPjUy3zsFw&usqp=CAU' />
              <Title>Infinix Hot 10</Title>
            </ImageContainer>
            <Utils>
              <Icon>
                <DeleteOutline />
              </Icon>
              <Counter>
                <CounterBtn>
                  <Remove />
                </CounterBtn>
                <Output>
                  <Div>23</Div>
                </Output>
                <CounterBtn>
                  <Add />
                </CounterBtn>
              </Counter>
            </Utils>
          </Left>
          <Right>
            <Value>₦60,000,000</Value>
          </Right>
        </Product>
        <Product>
          <Left>
            <ImageContainer>
              <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUnS5UoxKi6GurT5W11iQMlvqzRPjUy3zsFw&usqp=CAU' />
              <Title>Infinix Hot 10</Title>
            </ImageContainer>
            <Utils>
              <Icon>
                <DeleteOutline />
              </Icon>
              <Counter>
                <CounterBtn>
                  <Remove />
                </CounterBtn>
                <Output>
                  <Div>23</Div>
                </Output>
                <CounterBtn>
                  <Add />
                </CounterBtn>
              </Counter>
            </Utils>
          </Left>
          <Right>
            <Value>₦60,000,000</Value>
          </Right>
        </Product>
        <Product>
          <Left>
            <ImageContainer>
              <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUnS5UoxKi6GurT5W11iQMlvqzRPjUy3zsFw&usqp=CAU' />
              <Title>Infinix Hot 10</Title>
            </ImageContainer>
            <Utils>
              <Icon>
                <DeleteOutline />
              </Icon>
              <Counter>
                <CounterBtn>
                  <Remove />
                </CounterBtn>
                <Output>
                  <Div>23</Div>
                </Output>
                <CounterBtn>
                  <Add />
                </CounterBtn>
              </Counter>
            </Utils>
          </Left>
          <Right>
            <Value>₦60,000,000</Value>
          </Right>
        </Product>
        <BreakDown>
          <Subtotal>
            <Text>Subtotal</Text>
            <Value>₦60,000,000</Value>
          </Subtotal>
          <Subtotal>
            <Text>Delivery</Text>
            <Value>₦60,000,000</Value>
          </Subtotal>
        </BreakDown>
        <Total>
          <BoldText>Total</BoldText>
          <BigTotal>₦60,000,000</BigTotal>
        </Total>
      </MainContent>
      <hr />
    </Container>
  );
};

export default Cart;
