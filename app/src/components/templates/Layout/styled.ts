import styled from 'styled-components';
import { breakAt, BreakpointSizes } from '../../../styles/Breakpoints';

export const StyledContent = styled.div`
  padding: 8px;
  height: calc(100vh - 48px);
  width: calc(100vw);
  overflow: scroll;

  ${breakAt(BreakpointSizes.lg)} {
    padding: 16px;
  }
`;
