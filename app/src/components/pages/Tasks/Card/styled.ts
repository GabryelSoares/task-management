import styled, { css } from 'styled-components';

interface Props {
  isDragging: boolean
}

export const Container = styled.div<Props>`
  position: relative;
  background: #FFF;
  border-radius: 5px;
  box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
  cursor: grab;
  max-width: 320px;
  margin-bottom: 8px;
  
  .MyModal{      
    width: 24px; 
    height: 24px;
    position: absolute;
    top: -24px;
    right: 0;
    color:#3f51b5;
    &:hover{
      background: #ccc;
      border-radius: 50%;
    }
  }
  p {
    font-weight: 400;
    line-height: 24px;
    padding: 8px;
  }

  ${props => props.isDragging && css`
    border: 2px dashed rgba(0, 0, 0, 0.2);
    padding-top: 31px;
    border-radius: 0;
    background: transparent;
    box-shadow: none;
    cursor: grabbing;

    p, img, header {
      opacity: 0;
    }
  `}
  
`;

export const Styledheader = styled.div`
  background: rgba(230, 236, 245, 0.4);
  padding: 0 8px;
  height: 20px;
  width: 320px;
  inline-size: 320px; 
  font-weight: 500;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
