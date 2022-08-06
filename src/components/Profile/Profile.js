import PropTypes from 'prop-types';
import { divideSign } from 'utils/divideSign';
import { Box } from 'Box';
import {
  Description,
  Name,
  Tag,
  Location,
  Stats,
} from './Profile.styled';


export const Profile = ({
  user: {
    username,
    tag,
    avatar,
    location,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <Box pt={4} borderRadius='medium' boxShadow='shadow'>
      <Description>
        <img src={avatar} alt={`Avatar ${username}`} width="120" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <li>
          <span>Followers</span>
          <span>{divideSign(followers)}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{divideSign(views)}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{divideSign(likes)}</span>
        </li>
      </Stats>
    </Box>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
    tag: PropTypes.string,
    avatar: PropTypes.string,
    location: PropTypes.string,

    stats: PropTypes.shape({
      followers: PropTypes.number,
      views: PropTypes.number,
      likes: PropTypes.number,
    }).isRequired
  }).isRequired
};