import styled from '@emotion/styled';
import './styles.css';

import { Sidebar } from './components/Sidebar';

const StyledContentContaner = styled.div({
  display: 'flex',
  flexDirection: 'row'
});

const StyledMain = styled.div({});

export default function App() {
  return (
    <div className="App">
      <StyledContentContaner>
        <Sidebar />
        <StyledMain>
          <h1>Main content</h1>
        </StyledMain>
      </StyledContentContaner>
    </div>
  );
}
