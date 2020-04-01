import React from 'react';
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses'

const ExpenseList = (props) => (
    <div className={"content-container"}>
        <div className={"list-header"}>
            <div className={"hide-for-desktop"}>Expense</div>
            <div className={"hide-for-mobile"}>Expense</div>
            <div className={"hide-for-mobile"}>Amount</div>
        </div>

        <div className={"list-body"}>
            {
                props.expenses.length === 0 ? (
                    <div className={"list-item list-item--message"}>
                        <span>No Expenses</span>
                    </div>
                ) : (
                    props.expenses.map((expense, index) => {
                        return <ExpenseListItem key={index} {...expense}/>
                    })
                )

            }
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
};

export default connect(mapStateToProps)(ExpenseList);
