import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 15px;
`;
export const Item = styled.li``;

export const NavLinkStyle = styled(NavLink)`
  color: #ebd8ff;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  &.active {
    color: #5736a3;
  }
`;
