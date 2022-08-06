import { FriendCard } from "./FriendList.styled";

export const Friend = ({ avatar, name, isOnline, id }) => {
  return (
    <FriendCard key={id} isOnline={isOnline}>
      <span></span>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </FriendCard>
  );
};
