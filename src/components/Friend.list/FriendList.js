import PropTypes from 'prop-types';
import { Friend } from './Friend';
import { FriendContainer } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendContainer>
      {friends.map(friend => {
        const { avatar, name, isOnline, id } = friend;
        return (
          <Friend avatar={avatar} name={name} isOnline={isOnline} key={id} />
        );
      })}
    </FriendContainer>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    }).isRequired
  ).isRequired
};
