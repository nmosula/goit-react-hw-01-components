import propTypes from "prop-types";
import FriendListItem from "./FriendListItem";


const FriendList = ({ friends } ) => {

    return (
        <ul className="friend-list">
            {friends.map(friend => (
                <li className="item" key={friend.id}>
                    <FriendListItem friend={friend} />
                </li>
                
            ))}                
            
        </ul>
    )
}

FriendList.propTypes = {
    friends: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.number.isRequired  
        })
    )
}

export default FriendList;