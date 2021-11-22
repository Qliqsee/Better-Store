import React, { useContext, useState } from 'react';

let isTrue = true;

const Slider = React.createContext(isTrue);
const ToggleSlider = React.createContext(isMenuOpen);

export const useSlider = () => {
  return useContext(Slider);
};
export const useToggleSlide = () => {
  return useContext(ToggleSlider);
};
function isMenuOpen() {
  isTrue = !isTrue;
}

export const SlideProvider: React.FC = ({ children }) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <Slider.Provider value={openMenu}>
      <ToggleSlider.Provider value={toggleMenu}>
        {children}
      </ToggleSlider.Provider>
    </Slider.Provider>
  );
};
