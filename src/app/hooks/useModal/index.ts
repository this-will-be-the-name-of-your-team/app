import { useAtom } from "jotai";
import { modalStateAtom } from "@/state/modal";

export const useModal = (animateDuration: number) => {
  const [isOpen, setIsOpen] = useAtom(modalStateAtom);

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
