import { useState } from "react";

export const useModal = (initialState: boolean, animateDuration: number) => {
  const [isOpen, setIsOpen] = useState({
    state: initialState,
    animationState: initialState,
  });

  const showModal = () => {
    setIsOpen({ ...isOpen, animationState: true });
    setTimeout(() => {
      setIsOpen({ ...isOpen, state: true });
    }, animateDuration);
  };

  const closeModal = () => {
    setIsOpen({ ...isOpen, animationState: false });
    setTimeout(() => {
      setIsOpen({ ...isOpen, state: false });
    }, animateDuration);
  };

  return { isOpen, showModal, closeModal };
};
