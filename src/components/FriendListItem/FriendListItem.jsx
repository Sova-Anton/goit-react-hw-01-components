import PropTypes from 'prop-types';
import { Item, Name, Status } from './FrienListItem.styled';

export function FriendListItem({ name, isOnline, avatar }) {
  return (
    <Item >
      <Status isOnline={isOnline}></Status>
      <img src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Item>
  );
}

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
};
