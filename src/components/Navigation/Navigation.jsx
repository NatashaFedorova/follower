import { List, Item, NavLinkStyle } from './Navigation.styled';

const Navigation = () => {
  return (
    <nav>
      <List>
        <Item>
          <NavLinkStyle to='/'>Home</NavLinkStyle>
        </Item>
        <Item>
          <NavLinkStyle to='/tweets'>Tweets</NavLinkStyle>
        </Item>
      </List>
    </nav>
  );
};

export default Navigation;
