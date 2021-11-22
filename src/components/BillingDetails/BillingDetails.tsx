import React, { useState } from 'react';
import { colors } from '../../global-styles';
import Cart from '../../components/Cart/Cart';
import styled from 'styled-components';

import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import {
  NavigateNext,
  KeyboardArrowDown,
  KeyboardArrowUp,
  ShoppingCartOutlined,
} from '@material-ui/icons';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';

const Container = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  /* justify-content: space-between; */
  flex-direction: column;
  align-items: center;
  color: #787373;
`;
const Breadcrumb = styled.div`
  margin-top: 20px;
  padding: 0 10px;
  font-size: 14px !important;
`;
const BreadcrumbLinks = styled.span`
  color: darkcyan;
  @media only screen and (max-width: 512px) {
    font-size: 14px;
  }
`;
const Header = styled.div`
  height: 90px;
  width: 250px;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
`;
const Step1 = styled.div``;
const Forms = styled.form`
  margin: 30px 0;
  /* padding-bottom: 30px; */
  width: 100%;
  @media only screen and (max-width: 800px) {
    padding: 0 50px;
  }
  @media only screen and (max-width: 400px) {
    padding: 0 20px 0 0px;
  }
`;
const Section = styled.div`
  width: 100%;
  margin: 20px 0;
`;
const ContentHeader = styled.div`
  font-size: 22px;
  text-align: center;

  @media only screen and (max-width: 400px) {
    font-size: 16px;
  }
`;
const SingleInput = styled.div`
  width: 100%;
  margin: 10px;

  label {
    font-size: 14px;
  }

  .MuiOutlinedInput-input {
    padding: 13px 14px !important;
  }
`;
const Wrapper = styled.div`
  display: flex;
  width: 100%;

  @media only screen and (max-width: 512px) {
    flex-direction: column;
  }
`;
const CheckWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 10px;
`;
const Span = styled.div``;
const Checker = styled.div`
  margin-top: -15px;
`;
const SmallWrapper = styled.div`
  display: flex;
  width: 100%;
`;
const Button = styled.button`
  padding: 12px 20px;
  background-color: darkcyan;
  border-radius: 5px;
  color: white;
  border: none;
  cursor: pointer;

  margin-right: 20px;
`;
const Texte = styled.div`
  cursor: pointer;
  color: darkcyan;
  margin-top: 10px;
`;
const Footer = styled.div`
  font-size: 12px;
  border-top: 1px solid darkcyan;
  padding-top: 10px;
  width: 100%;
  text-align: center;
`;

const Step2 = styled.div`
  margin: 30px 0 0 0;
`;
const ConfirmationBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;
const Hr = styled.hr``;
const ContactDetails = styled.div`
  border: 1px solid #d7c4c4;
  padding: 0 20px;
`;
const Box2 = styled.div`
  border: 1px solid #d7c4c4;
  margin: 30px 0;
`;
const LightSpan = styled.span``;
const Link = styled.span``;
const BoldSpan = styled.span``;
const PaymentSection = styled.div`
  margin: 40px 0 0 0;
`;
const Step3 = styled.div`
  padding: 0 20px;
  margin-top: 50px;
`;
const Section2 = styled.div`
  border-top: 1px solid #d7c4c4;
  text-align: center;
  padding: 50px 0;
  background-color: whitesmoke;
`;
const Section1 = styled.div`
  margin: 20px 20px;
`;
const Completion = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin: 100px 0 0 50px;
  flex-direction: column;
`;
const Info = styled.div`
  margin-bottom: 20px;
`;
const Links = styled.div`
  color: ${colors.deputy};
`;

const Order = styled.div`
  display: none;

  @media only screen and (max-width: 800px) {
    display: flex;
    width: 100%;
    border: 1px solid #d7c4c4;
    background-color: whitesmoke;
    margin-top: 30px;
    border-left: none;
    border-right: none;
  }
`;
const Summary = styled.div`
  display: flex;
  padding: 20px 10px;
  justify-content: space-between;
  width: 100%;
`;
const SummaryText = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-around;
  color: ${colors.deputy};

  @media only screen and (max-width: 750px) {
    width: 23%;
  }
  @media only screen and (max-width: 650px) {
    width: 25%;
  }
  @media only screen and (max-width: 600px) {
    width: 27%;
  }
  @media only screen and (max-width: 555px) {
    width: 30%;
  }
  @media only screen and (max-width: 502px) {
    width: 34%;
  }
  @media only screen and (max-width: 455px) {
    width: 40%;
  }
`;
const SummaryAmount = styled.div`
  display: flex;
  justify-content: flex-end;
  color: black;
`;

const BillingDetails = () => {
  const [checked, setChecked] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [section, setSection] = useState(1);

  const handleShowCart = () => {
    setShowCart(!showCart);
  };

  const handleStep = () => {
    if (section === 1) {
      setSection(2);
    } else if (section === 2) {
      setSection(3);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return (
    <Container>
      <Header>
        <Image src='logo3.png' />
      </Header>
      <Order onClick={handleShowCart}>
        <Summary>
          <SummaryText>
            <ShoppingCartOutlined />{' '}
            <span style={{ marginLeft: 10, transform: 'translateY(6px)' }}>
              {showCart ? 'Hide cart' : 'Reveal Cart'}
            </span>
            {showCart ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </SummaryText>
          <SummaryAmount>
            ₦{new Intl.NumberFormat().format(1000000)}
          </SummaryAmount>
        </Summary>
      </Order>
      {showCart ? <Cart /> : null}

      <Breadcrumb>
        <Breadcrumbs
          separator={<NavigateNext fontSize='small' />}
          aria-label='breadcrumb'
        >
          <BreadcrumbLinks>Customer Info</BreadcrumbLinks>
          {section === 2 || section === 3 ? (
            <BreadcrumbLinks>Confirm details</BreadcrumbLinks>
          ) : null}
          {section === 3 ? (
            <BreadcrumbLinks>Congratulations</BreadcrumbLinks>
          ) : null}
        </Breadcrumbs>
      </Breadcrumb>
      {section === 1 || section === 2 ? (
        <Forms>
          {section === 1 ? (
            <Step1>
              <Section>
                <ContentHeader>Contact Information</ContentHeader>
                <Wrapper>
                  <SingleInput>
                    <TextField
                      id='outlined-basic'
                      label='Email'
                      variant='outlined'
                      fullWidth
                      margin='normal'
                    />
                  </SingleInput>
                </Wrapper>
                <CheckWrapper>
                  <Checker>
                    <Checkbox
                      inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                  </Checker>
                  <Span>Email me with news and offers</Span>
                </CheckWrapper>
              </Section>
              <Section>
                <ContentHeader>Customer details</ContentHeader>
                <Wrapper>
                  <SingleInput>
                    <TextField
                      id='outlined-basic'
                      label='First Name'
                      variant='outlined'
                      fullWidth
                      margin='normal'
                    />
                  </SingleInput>
                  <SingleInput>
                    <TextField
                      id='outlined-basic'
                      label='Surname'
                      variant='outlined'
                      fullWidth
                      margin='normal'
                    />
                  </SingleInput>
                </Wrapper>
                <Wrapper>
                  <SingleInput>
                    <TextField
                      id='outlined-basic'
                      label='Address'
                      variant='outlined'
                      fullWidth
                      margin='normal'
                    />
                  </SingleInput>
                </Wrapper>
                <Wrapper>
                  <SingleInput>
                    <TextField
                      id='outlined-basic'
                      label='City'
                      variant='outlined'
                      fullWidth
                      margin='normal'
                    />
                  </SingleInput>
                </Wrapper>
                <Wrapper>
                  <SingleInput>
                    <TextField
                      id='outlined-basic'
                      label='Country'
                      variant='outlined'
                      fullWidth
                      margin='normal'
                    />
                  </SingleInput>
                  <SingleInput>
                    <TextField
                      id='outlined-basic'
                      label='State'
                      variant='outlined'
                      fullWidth
                      margin='normal'
                    />
                  </SingleInput>
                  <SingleInput>
                    <TextField
                      id='outlined-basic'
                      label='Zip Code'
                      variant='outlined'
                      fullWidth
                      margin='normal'
                    />
                  </SingleInput>
                </Wrapper>
                <Wrapper>
                  <SingleInput>
                    <TextField
                      id='outlined-basic'
                      label='Phone'
                      variant='outlined'
                      fullWidth
                      margin='normal'
                    />
                  </SingleInput>
                </Wrapper>
                <CheckWrapper>
                  <Checker>
                    <Checkbox
                      inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                  </Checker>
                  <Span> Save this information for next time</Span>
                </CheckWrapper>
              </Section>
            </Step1>
          ) : null}
          {section === 2 ? (
            <Step2>
              <ContactDetails>
                <ConfirmationBox>
                  <LightSpan>Contact</LightSpan>
                  <LightSpan>mickky@gmial.com</LightSpan>
                  <Link>Change</Link>
                </ConfirmationBox>
                <Hr />
                <ConfirmationBox>
                  <LightSpan>Deliver to</LightSpan>
                  <LightSpan>Oshogbo, 23332 Oshogbo OS, Nigeria</LightSpan>
                  <Link>Change</Link>
                </ConfirmationBox>
                <Hr />
                <ConfirmationBox>
                  <LightSpan>Delivery Method</LightSpan>
                  <LightSpan>Standard</LightSpan>
                  <BoldSpan>#2000</BoldSpan>
                </ConfirmationBox>
              </ContactDetails>
              <PaymentSection>
                <ContentHeader>Payment</ContentHeader>
                <Box2>
                  <Section1>Cash on delivery (COD)</Section1>
                  <Section2>
                    Yow will pay for your order when it is delivered
                  </Section2>
                </Box2>
              </PaymentSection>
            </Step2>
          ) : null}

          <SmallWrapper>
            {section === 1 || section === 2 ? (
              <Button type='button' onClick={handleStep}>
                Continue
              </Button>
            ) : null}
            {section === 1 ? null : (
              <Texte onClick={() => setSection(1)}>back</Texte>
            )}
          </SmallWrapper>
        </Forms>
      ) : null}

      {section === 3 ? (
        <Step3>
          <Info>Transaction ID: F1234, thank you for transacting with us.</Info>
          <Links>Continue shopping </Links>
        </Step3>
      ) : null}
      <hr />
    </Container>
  );
};

export default BillingDetails;
