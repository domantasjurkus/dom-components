import styled from '@emotion/styled';

import cow from 'cowsay';

import { largeScreenMediaQuery } from '../common/media-query';

const StyledSidebarContainer = styled.div({
  height: '100%',
  position: 'relative',
  transform: 'translateX(-500px)',
  transition: 'transform 0.3s ease-in',
  [largeScreenMediaQuery]: {
    transform: 'translateX(0px)'
  }
});

const StyledSideMenuContent = styled.div({
  position: 'absolute',
  zIndex: 10,
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  width: '260px',
  backgroundColor: 'red',
  padding: '10px 0 10px 10px',
  [largeScreenMediaQuery]: {
    position: 'relative',
    padding: '50px 0 50px 10px'
  }
});

export const Sidebar = () => {
  return (
    <StyledSidebarContainer>
      <StyledSideMenuContent>sidebar</StyledSideMenuContent>
    </StyledSidebarContainer>
  );
};
