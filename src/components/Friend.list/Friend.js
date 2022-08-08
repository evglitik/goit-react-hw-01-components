import { FriendCard } from "./FriendList.styled";

export const Friend = ({ avatar, name, isOnline}) => {
  return (
    <FriendCard isOnline={isOnline}>
      <span></span>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </FriendCard>
  );
};
