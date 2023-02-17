import propTypes from "prop-types";
import FriendListItem from "./FriendListItem";

import {
    List,
} from './FriendList.styled';

const FriendList = ({ friends } ) => {

    return (
        <List>
            {friends.map(friend => (
                <FriendListItem key={friend.id} friend={friend} />                
            ))}                
        </List>
    )
}

FriendList.propTypes = {
    friends: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.number.isRequired  
        })
    ).isRequired
}

export default FriendList;