import ListOfTweets from '../ListOfTweets';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { StyledLink, Box, Btn } from './TweetsPageComponent.styled';
import Filter from '../Filter/Filter';

const LIMIT = 3;

const fetchUsers = async (page = 1) => {
  try {
    const response = await axios.get(
      `https://637929d37419b414df8b4256.mockapi.io/example/users?page=${page}limit=${LIMIT}`
    );
    return response.data;
  } catch (error) {
    Notify.failure(`${error.message}`);
  }
};

const TweetsPageComponent = () => {
  const [filterState, setFilterState] = useState('showAll');
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isFollowing, setIsFollowing] = useState(
    JSON.parse(localStorage.getItem('isFollowing')) || []
  );

  useEffect(() => {
    localStorage.setItem('isFollowing', JSON.stringify(isFollowing));
  }, [isFollowing]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const result = await fetchUsers();
        const addValueIsFollowing = result.map((el) => {
          return { ...el, isFollowing: false };
        });
        setUsers(addValueIsFollowing);
      } catch (error) {
        Notify.failure(`${error.message}`);
      }
    };
    getUsers();
  }, []);

  const changeFilterState = (value) => {
    setFilterState(value);
  };

  const handleClick = (user) => {
    if (user.isFollowing) {
      user.followers -= 1;
      user.isFollowing = false;
      const updateData = isFollowing.filter((el) => user.id !== el.id);
      setIsFollowing(updateData);
    } else {
      user.followers += 1;
      user.isFollowing = true;
      setIsFollowing([...isFollowing, user]);
    }
  };

  const filterUsers = (userList) => {
    if (filterState === 'followings') {
      return userList.filter((el) => el.isFollowing === true);
    } else if (filterState === 'follow') {
      return userList.filter((el) => el.isFollowing === false);
    } else {
      return userList;
    }
  };

  const visibilitedListUsers = () => {
    const newUserList = users.map((el) => {
      const findedUser = isFollowing.find(({ id }) => id === el.id);
      return findedUser ? findedUser : el;
    });

    const filteredUsers = filterUsers(newUserList);
    return filteredUsers;
  };

  return (
    <>
      <Box>
        <StyledLink to='/'>Back</StyledLink>
        <Filter filterState={filterState} onChange={changeFilterState} />
      </Box>
      <ListOfTweets userList={visibilitedListUsers()} onClick={handleClick} />
      {
        <Btn type='button' onClick={() => setPage(page + 1)}>
          Load more
        </Btn>
      }
    </>
  );
};

export default TweetsPageComponent;
