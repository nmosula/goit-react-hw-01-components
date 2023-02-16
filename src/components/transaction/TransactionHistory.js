import propTypes from "prop-types";

const TransactionHistory = ({ items }) => {
    return (
        <table className="transaction-history">
        <thead>
            <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
            </tr>
        </thead>

            <tbody>
                {items.map(item => (
                    <tr key={item.id}>
                        <td>{item.type}</td>
                        <td>{item.amount}</td>
                        <td>{item.currency}</td>
                    </tr>
                    
                ))}
            </tbody>
        </table>
    )
    
}


TransactionHistory.propTypes = {
    items: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.string.isRequired,
            type: propTypes.string,
            amount: propTypes.string,
            currency: propTypes.string
        })
    )
}

export default TransactionHistory;