import styled from 'styled-components';
import BillingDetails from '../../components/BillingDetails/BillingDetails';
import Cart from '../../components/Cart/Cart';

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  width: 50%;
  display: flex;
  padding: 50px 100px 10px 100px;
  overflow-y: scroll;
  height: 100vh;

  @media only screen and (max-width: 1100px) {
    padding: 50px 50px 20px 50px;
  }
  @media only screen and (max-width: 800px) {
    width: 100%;
    padding: 0;
  }
`;
const Right = styled.div`
  width: 50%;
  background-color: whitesmoke;
  overflow-y: scroll;
  height: 100vh;

  @media only screen and (max-width: 800px) {
    display: none;
  }
`;

const Checkout = () => {
  return (
    <Container>
      <Left>
        <BillingDetails />
      </Left>
      <Right>
        <Cart />
      </Right>
    </Container>
  );
};

export default Checkout;
