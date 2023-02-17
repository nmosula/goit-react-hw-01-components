import propTypes from "prop-types";

import {
    ListItem,
    Status,
    Avatar,
    FriendName,
} from './FriendList.styled';

const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
    return (
        <ListItem>
            <Status status={isOnline}></Status>
            <Avatar src={ avatar } alt={ name } width="48" />
            <FriendName>{ name }</FriendName>
        </ListItem>
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