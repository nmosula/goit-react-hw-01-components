import propTypes from "prop-types";

const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
    return (
        <div>
            <span className="status"></span>
            <img className="avatar" src={ avatar} alt={name} width="48" />
            <p className="name">{ name}</p>
            
        </div>
    )
}

FriendListItem.propTypes = {
    avatar: propTypes.string,
    name: propTypes.string,
    isOnline: propTypes.bool
}

export default FriendListItem;