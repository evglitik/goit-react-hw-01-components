import PropTypes from 'prop-types';
import { Table, TableRows } from './TransactionHistory.styled';
import { firstToUperScapes } from 'utils/divideSign';

export const TransactionsHistory = ({ transactions }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map((transition, inx) => {
          const { id, type, amount, currency } = transition;
          return (
            <TableRows key={id} index={inx}>
              <td>{firstToUperScapes(type)}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </TableRows>
          );
        })}
      </tbody>
    </Table>
  );
};

TransactionsHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
      id: PropTypes.string,
    }).isRequired,
  ).isRequired,
};
