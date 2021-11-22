import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import styled from 'styled-components';
import data from '../../data.json';
import { mobile, resposive } from '../../responsive';

const handleDragStart = (e: any) => e.preventDefault();

// const Container = styled.div`
//   display: flex;
//   width: 100%;
//   padding: 0 200px;
//   justify-content: center;
// `;

const ImageConatiner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  object-fit: contain;
  padding: 10px;
  position: relative;
`;

const Image = styled.img`
  border-radius: 10px;
  margin-bottom: 5px;
  box-shadow: 0 0 5px black;
  height: 150px;
  width: 150px;

  ${mobile({
    height: '120px',
    width: '120px',
  })}

  ${resposive(
    {
      height: '80px',
      width: '80px',
    },
    370
  )}
`;

const Span = styled.span`
  display: block;
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 600;

  ${mobile({
    fontSize: '14px',
  })}
`;
const Text = styled.span`
  margin-top: 20px;

  ${mobile({
    fontSize: '14px',
  })}
`;

const items = data.map((item) => (
  <ImageConatiner>
    <Span>₦{new Intl.NumberFormat().format(1000000)}</Span>
    <Image src={item.imageUrl} alt='Infinix Hot 10' />
    <Text>Infinix Hot 10</Text>
  </ImageConatiner>
));

const responsive = {
  0: {
    items: 2,
  },
  512: {
    items: 3,
  },
  1024: {
    items: 5,
  },
};
const Carousel = () => {
  return (
    <div>
      <AliceCarousel
        autoPlay
        disableButtonsControls
        responsive={responsive}
        mouseTracking
        items={items}
        infinite
        disableDotsControls
      />
    </div>
  );
};

export default Carousel;
