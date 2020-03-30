import React from 'react';
import { connect } from 'react-redux'
import numeral from 'numeral'
import selectExpenes from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total'

const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
    return (
        <div>
            <h1>Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal}</h1>
        </div>
    );
};

const mapStaToProps = (state) => {
    const visibleExpenses = selectExpenes(state.expenses, state.filters);

    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
    }
};

export default connect(mapStaToProps)(ExpensesSummary)
