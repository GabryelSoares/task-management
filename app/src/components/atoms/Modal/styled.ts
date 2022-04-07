import styled from 'styled-components';
import { breakAt, BreakpointSizes } from '../../../styles/Breakpoints';

export const StyledHeader = styled.div`
  color: #fff;
  background-color: #3f51b5;
  padding: 4px;
  font-size: 24px;

  ${breakAt(BreakpointSizes.lg)} {
    padding: 8px;
  }
`;

export const StyledContent = styled.div`
  background-color: #fff;
  padding: 4px;

  ${breakAt(BreakpointSizes.lg)} {
    padding: 8px;
  }
`;

export const StyledCloseButton = styled.div`
  cursor: pointer;
  color: #fff;
  float: right;
  background: unset;
  border: unset;
  background: none;
  border: none;
  padding: 0 8px;
`;

export const StyledOpenButton = styled.div`

`;
