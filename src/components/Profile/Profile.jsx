import propTypes from "prop-types";
import {
  UserProfile,
  UserDescription,
  UserAvatar,
  UserName,
  UserTag,
  UserLocation,
  StatList,
  StatListItem,
  StatLabel,
  StatValue,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar = "https://cdn-icons-png.flaticon.com/512/1077/1077012.png", stats: { followers, views, likes } }) => {
    
    return (
        <UserProfile>
            <UserDescription>
                <UserAvatar src={avatar} alt={username}/>
                <UserName>{username}</UserName>
                <UserTag>@{tag}</UserTag>
                <UserLocation>{location}</UserLocation>
            </UserDescription>

            <StatList>
                <StatListItem>
                    <StatLabel>Followers</StatLabel>
                    <StatValue>{followers}</StatValue>
                </StatListItem>
                <StatListItem>
                    <StatLabel>Views</StatLabel>
                    <StatValue>{views}</StatValue>
                </StatListItem>
                <StatListItem>
                    <StatLabel>Likes</StatLabel>
                    <StatValue>{likes}</StatValue>
                </StatListItem>
            </StatList>
        </UserProfile>
    )
}

Profile.propTypes = {
    username: propTypes.string.isRequired,
    tag: propTypes.string.isRequired,
    location: propTypes.string.isRequired,
    avatar: propTypes.string,
    stats: propTypes.shape({
            followers: propTypes.number.isRequired,
            views: propTypes.number.isRequired,
            likes: propTypes.number.isRequired,
        }).isRequired
}