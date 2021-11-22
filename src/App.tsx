import Home from './pages/Home/Home';
import { SlideProvider } from './components/SliderProvider/SliderProvider';
import Products from './pages/Products/Products';
import Checkout from './pages/Checkout/Checkout';
import Product from './pages/Product/Product';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App: React.FunctionComponent = () => {
  return (
    <div className='App'>
      <SlideProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/product' element={<Product />} />
          </Routes>
        </Router>
      </SlideProvider>
    </div>
  );
};

export default App;
