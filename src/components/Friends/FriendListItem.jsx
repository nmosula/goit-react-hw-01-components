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
    friend: propTypes.shape({
            avatar: propTypes.string.isRequired,
            name: propTypes.string.isRequired,
            isOnline: propTypes.bool.isRequired
        }).isRequired
}

export default FriendListItem;