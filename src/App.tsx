import { useState } from "react";
import styled from "@emotion/styled";

import "./styles.css";
import { Modal } from "./components/modal/modal";
// import { Sidebar } from "./components/Sidebar";

const StyledContentContaner = styled.div({
  display: "flex",
  flexDirection: "row",
});

const StyledMain = styled.div({});

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="App">
      <StyledContentContaner>
        {/* <Sidebar /> */}
        <StyledMain>
          <h1>Main content</h1>
        </StyledMain>
      </StyledContentContaner>
      <button onClick={() => setIsModalOpen(true)}>Open</button>
      <Modal isOpen={isModalOpen}>
        <p>Modal content</p>
        <button onClick={() => setIsModalOpen(false)}>Close</button>
      </Modal>
    </div>
  );
}
