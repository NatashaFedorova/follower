import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import {
  List,
  Item,
  BoxForDecorativeImages,
  BoxForAvatar,
  Avatar,
  Text,
  Info,
  Button,
  Frame,
} from './ListOfTweets.styled';

const formatValue = (value) => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const ListOfTweets = ({ userList, onClick }) => {
  return (
    <List>
      {userList.map((el) => {
        return (
          <Item key={nanoid()}>
            <BoxForDecorativeImages>
              <BoxForAvatar>
                <Avatar
                  src={`./images/avatar/${el.avatar}`}
                  alt={el.userName}
                  width='62'
                  height='62'
                />
              </BoxForAvatar>
              <Frame src={`./images/component.png`} alt='avatar' />
            </BoxForDecorativeImages>
            <Info>
              <Text>{el.tweets} tweets</Text>
              <Text>{formatValue(el.followers)} followers</Text>
            </Info>
            <Button
              type='button'
              isFollowing={el.isFollowing}
              onClick={() => onClick(el)}
            >
              {el.isFollowing ? 'following' : 'follow'}
            </Button>
          </Item>
        );
      })}
    </List>
  );
};
export default ListOfTweets;

ListOfTweets.propTypes = {
  userList: PropTypes.arrayOf(PropTypes.object),
  onClick: PropTypes.func,
};
