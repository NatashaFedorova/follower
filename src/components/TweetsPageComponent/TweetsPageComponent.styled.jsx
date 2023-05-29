import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  color: #471ca9;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus,
  &:active {
    color: #9d86c7;
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 40px;
`;

export const Btn = styled.button``;


