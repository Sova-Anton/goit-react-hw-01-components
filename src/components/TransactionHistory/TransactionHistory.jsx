import PropTypes from 'prop-types';
import { Container, ColoneName, StylRow, Invoice, TableBody } from './TransactionHistory.styled';

export function TransactionHistory({ items }) {
  return (
    <Container>
      <thead>
        <tr>
          <ColoneName>Type</ColoneName>
          <ColoneName>Amount</ColoneName>
          <ColoneName>Currency</ColoneName>
        </tr>
      </thead>

      <TableBody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <StylRow key={id}>
              <Invoice>{type}</Invoice>
              <td>{amount}</td>
              <td>{currency}</td>
            </StylRow>
          );
        })}
      </TableBody>
    </Container>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
