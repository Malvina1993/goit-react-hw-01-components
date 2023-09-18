import css from '../FriendList.module.css';

export const FriendList = ({ friendList }) => {
    return <div className={css.friendList}>
        {friendList.map(friend => {
            return (
                <Friend
                    key={friend.id}
                    avatar={friend.avatar}
                    name={friend.name}
                    variant={friend.isOnline}
                />  
                )
            })

        }
    </div>
}

const Friend = ({ avatar, name, variant }) => {
    return <li className={css.item}>
        <span className={css.status} style={{backgroundColor:isOnlineColor(variant)}}></span>
        <img className={css.avatar} src={avatar} alt={name} width="48" />
        <p className={css.name}>{ name}</p>
    </li>
}

const isOnlineColor = variant => {
   return  variant ? 'green' : 'red';
}

