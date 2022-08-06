import user from "pseudo.backend/user.json"
import data from "pseudo.backend/data.json"
import friends from 'pseudo.backend/friends.json';
import transactions from 'pseudo.backend/transactions.json';
import { GlobalStyle } from "components/GlobalStyle";
import { Profile } from "components/Profile/Profile";
import { Statistics } from "components/Statistics/Statistics";
import { FriendList } from "components/Friend.list/FriendList";
import { TransactionsHistory } from "components/TransactionHistory/TransactionHistory";
import { Box } from "Box";

export const App = () => {
  return (
    <Box
      p={5}
      display="flex"
      alignItems="flex-start"
      flexWrap="wrap"
      justifyContent="space-around"
      as="main"
    >
      <Profile user={user} />
      <Statistics title={'Upload stats'} data={data} />
      <FriendList friends={friends} />
      <TransactionsHistory transactions={transactions} />
      <GlobalStyle />
    </Box>
  );
};
