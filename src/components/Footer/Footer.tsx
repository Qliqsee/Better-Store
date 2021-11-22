import React from 'react';
import styled from 'styled-components';
import {
  EmailOutlined,
  Twitter,
  Facebook,
  Instagram,
} from '@material-ui/icons';
import { colors } from '../../global-styles';
import { mobile, resposive } from '../../responsive';

interface Props {
  icons?: {
    bg: string;
  };
}
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background: #383636;
  padding: 30px 100px;
  flex-direction: column;
  color: white;

  ${mobile({
    padding: '10px',
  })}
`;
const MainWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  ${mobile({
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  })}
`;
const Wrapper = styled.div``;
const Newsletter = styled.div``;
const FooterSpan = styled.div`
  font-size: 17px;
  margin-bottom: 10px;
  line-height: 1.2;
`;
const FooterForm = styled.form`
  ${mobile({
    display: 'flex',
    justifyContent: 'center',
  })}
  margin-top: 20px;
`;
const FormDiv = styled.div`
  background-color: white;
  display: flex;
  height: 40px;
  padding-left: 3px;
  width: 70%;

  ${resposive(
    {
      width: '100%',
    },
    1100
  )}

  ${mobile({
    paddingLeft: '2px',
    height: '30px',
    width: '60%',
  })}
`;
const FooterFormInput = styled.input`
  width: 85%;
  height: 100%;
  border: none;
  font-size: 16px;
  &::placeholder {
    color: black;
  }

  &:focus {
    outline: none;
  }

  ${resposive(
    {
      width: '80%',
    },
    1100
  )}
  ${mobile({
    width: '90%',
    fontSize: '14px',
  })}
  ${resposive(
    {
      width: '80%',
    },
    450
  )}
`;
const FooterFormIcon = styled.button`
  height: 100%;
  border: none;
  width: 15%;
  background: ${colors.primary};
  cursor: pointer;

  .MuiSvgIcon-root {
    ${resposive(
      {
        fontSize: '25px!important',
      },
      1100
    )}
  }
  ${resposive(
    {
      width: '20%',
    },
    1100
  )}
  ${mobile({
    width: '10%',
  })}
  ${resposive(
    {
      width: '20%',
    },
    450
  )}

  &:hover {
    background-color: ${colors.deputy};

    .MuiSvgIcon-root {
      color: black !important;
    }
  }
`;
const QuickLinks = styled.div`
  display: inline-block;
  margin-right: 20px;

  ${resposive(
    {
      width: '100%',
    },
    1100
  )}

  ${mobile({
    width: '100%',
  })}
`;
const QlHeader = styled.div`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 20px;

  ${mobile({
    margin: '20px 0 10px 0 ',
    fontSize: '20px',
  })}
`;
const QlLinkSpan = styled.div`
  line-height: 1.7;
  font-size: 18px;

  ${mobile({
    fontSize: '16px',
  })}
`;
const Contact = styled.div``;
const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;
const Copyright = styled.div`
  text-align: center;
  margin-top: 30px;

  ${mobile({
    fontSize: '15px',
  })}
`;
const Icon = styled.div<Props>`
  background-color: ${(props) => props.icons?.bg};
  height: 40px;
  width: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;

  ${mobile({
    height: '30px',
    width: '30px',
  })}

  .MuiSvgIcon-root {
    ${mobile({
      fontSize: '20px!important',
    })}
  }

  &:hover {
    background-color: ${colors.primary};
  }
`;

const Footer = () => {
  return (
    <div>
      <Container>
        <MainWrapper>
          <QuickLinks>
            <FooterSpan>Get best deals from us</FooterSpan>
            <FooterSpan>
              Promotions, new products and sales. Directly to your inbox.
            </FooterSpan>
            <FooterForm>
              <FormDiv>
                <FooterFormInput type='text' placeholder='Email' />
                <FooterFormIcon>
                  <EmailOutlined style={{ color: 'white', fontSize: 30 }} />
                </FooterFormIcon>
              </FormDiv>
            </FooterForm>
          </QuickLinks>
          <QuickLinks>
            <QlHeader>Quick Links</QlHeader>
            <QlLinkSpan>Home</QlLinkSpan>
            <QlLinkSpan>Phone</QlLinkSpan>
            <QlLinkSpan>Laptop</QlLinkSpan>
            <QlLinkSpan>Electronics</QlLinkSpan>
            <QlLinkSpan>Sell To Us</QlLinkSpan>
          </QuickLinks>
          <QuickLinks>
            <QlHeader>Contact Us</QlHeader>
            <QlLinkSpan>Email@email.com</QlLinkSpan>
            <QlLinkSpan>08180134567</QlLinkSpan>
            <QlLinkSpan>No 2, Abore close Bida Ilorin.</QlLinkSpan>
          </QuickLinks>
        </MainWrapper>
        <Wrapper>
          <SocialIcons>
            <Icon icons={{ bg: 'blue' }}>
              <Facebook style={{ margin: '0 15px', fontSize: 25 }} />
            </Icon>
            <Icon icons={{ bg: '#85b5c5 ' }}>
              <Twitter style={{ margin: '0 15px', fontSize: 25 }} />
            </Icon>
            <Icon icons={{ bg: '#e96a81 ' }}>
              <Instagram style={{ fontSize: 25 }} />
            </Icon>
          </SocialIcons>
          <Copyright>© 2021 BetterShop | Design by Qliqsee</Copyright>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Footer;
