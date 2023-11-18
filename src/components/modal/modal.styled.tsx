import styled from "@emotion/styled";

export const Backdrop = styled.div({
  display: "flex",
  background: "rgba(126, 140, 152, 0.35)",
  alignItems: "center",
  justifyContent: "center",
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
});

export const ModalContainer = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const ModalStyled = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  background: "#fff",
  border: "1px solid #ccc",
  borderRadius: "5px",
  width: "300px",
  height: "150px",
});
