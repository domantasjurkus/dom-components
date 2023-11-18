import { Backdrop, ModalContainer, ModalStyled } from "./modal.styled";

type Props = {
  isOpen: boolean;
  children: React.ReactNode;
};

export const Modal = ({ isOpen, children }: Props) => {
  return (
    <>
      {isOpen && (
        <Backdrop>
          <ModalContainer>
            <ModalStyled>{children}</ModalStyled>
          </ModalContainer>
        </Backdrop>
      )}
    </>
  );
};
