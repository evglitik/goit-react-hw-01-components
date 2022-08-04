import { FriendCard } from "./FriendList.styled";

export const Friend = ({ avatar, name, isOnline, id }) => {
  return (
    <FriendCard key={id} isOnline={isOnline}>
      <span></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </FriendCard>
  );
};
