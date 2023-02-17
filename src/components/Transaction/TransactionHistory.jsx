import propTypes from "prop-types";
import {
  Table,
  TableHead,
  TableHeadRow,
  TableRow,
  TableData,
} from './TransactionHistory.styled';

const TransactionHistory = ({ items }) => {
    return (
        <Table>
        <TableHead>
            <tr>
                <TableHeadRow>Type</TableHeadRow>
                <TableHeadRow>Amount</TableHeadRow>
                <TableHeadRow>Currency</TableHeadRow>
            </tr>
        </TableHead>

            <tbody>
                {items.map(item => (
                    <TableRow key={item.id}>
                        <TableData>{item.type}</TableData>
                        <TableData>{item.amount}</TableData>
                        <TableData>{item.currency}</TableData>
                    </TableRow>
                    
                ))}
            </tbody>
        </Table>
    )
    
}

// import {
//   Table,
//   TableHead,
//   HeadTableData,
//   TableRow,
//   TableData,
// } from './TransactionHistory.styled';

// export const TransactionHistory = ({ transactions }) => {
//   return (
//     <Table>
//       <TableHead>
//         <tr>
//           <HeadTableData>Type</HeadTableData>
//           <HeadTableData>Amount</HeadTableData>
//           <HeadTableData>Currency</HeadTableData>
//         </tr>
//       </TableHead>
//       <tbody>
//         {transactions.map(({ id, type, amount, currency }) => {
//           return (
//             <TableRow key={id}>
//               <TableData>{type}</TableData>
//               <TableData>{amount}</TableData>
//               <TableData>{currency}</TableData>
//             </TableRow>
//           );
//         })}
//       </tbody>
//     </Table>
//   );
// };
// https://github.com/Milosska/goit-react-hw-01-components




TransactionHistory.propTypes = {
    items: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.string.isRequired,
            type: propTypes.string.isRequired,
            amount: propTypes.string.isRequired,
            currency: propTypes.string.isRequired
        })
    ).isRequired
}

export default TransactionHistory;