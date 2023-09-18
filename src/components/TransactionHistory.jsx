import css from '../TransactionHistory.module.css';

export const TransactionHistory = ({items})=> {
    return <div>
        <table className={css.transactionHistory}>
            <thead>
                <tr>
                <th>TYPE</th>
                <th>AMOUNT</th>
                <th>CURRENCY</th>
                </tr>
            </thead>

            <tbody>
                {items.map(transact => {
                    return <TableRow
                        key={transact.id}
                        type={transact.type}
                        amount={transact.amount}
                        currency={transact.currency}
                    />
                })

                }
            </tbody>
        </table>
    </div>
}

const TableRow = ({type, amount, currency}) => {
    return <tr>
        <td>{firstLetter(type)}</td>
        <td>{ amount}</td>
        <td>{currency}</td>
    </tr>
}  

const firstLetter = (type) => {
    return type.replace(type[0], type[0].toUpperCase());
    
}