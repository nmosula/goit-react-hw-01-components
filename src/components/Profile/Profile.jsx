import propTypes from "prop-types";
import "./profile.css";

const Profile = ({ username, tag, location, avatar = "https://cdn-icons-png.flaticon.com/512/1077/1077012.png", stats: { followers, views, likes } }) => {
    
    return (
        <div className="profile">
            <div className="description">
                <img
                    src={avatar}
                    alt={username}
                    className="avatar"
                />
                <p className="name">{username}</p>
                <p className="tag">@{tag}</p>
                <p className="location">{location}</p>
            </div>

            <ul className="stats">
                <li>
                    <span className="label">Followers</span>
                    <span className="quantity">{followers}</span>
                </li>
                <li>
                    <span className="label">Views</span>
                    <span className="quantity">{views}</span>
                </li>
                <li>
                    <span className="label">Likes</span>
                    <span className="quantity">{likes}</span>
                </li>
            </ul>
        </div>
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

export default Profile;