import user from "pseudo.backend/user.json"
import data from "pseudo.backend/data.json"
import friends from 'pseudo.backend/friends.json';
import transactions from 'pseudo.backend/transactions.json';
import { Container } from "./App.styled";
import { Profile } from "components/Profile/Profile";
import { Statistics } from "components/Statistics/Statistics";
import { FriendList } from "components/Friend.list/FriendList";
import { TransactionsHistory } from "components/TransactionHistory/TransactionHistory";


export const App = () => {
  return (
    <Container>
      <Profile user={user} />
      <Statistics title={'Upload stats'} data={data} />
      <FriendList friends={friends} />
      <TransactionsHistory transactions={transactions} />
    </Container>
  );
};
