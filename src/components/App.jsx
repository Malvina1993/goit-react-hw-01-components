import { Profile } from "./Profile";
import user from '../user.json';
import { Statistics } from "./Statistics";
import data from '../data.json';
import { FriendList } from "./FriendList";
import friends from '../friends.json';
import { TransactionHistory } from "./TransactionHistory";
import transaction from "../transactions.json";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'block',
        fontSize: 40,
        color: '#010101'

      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics
        title="UPLOAD STATS"
        stats={data} 
      />
      <FriendList
        friendList = {friends}
      />
      <TransactionHistory
        items={transaction}
      />
    </div>
  );
};
