import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            description: props.expense ? props.expense.description: '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            date: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        };
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }))
    };

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }))
    };

    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }))
        }
    };

    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt, date: createdAt}))
        }
    };

    onFormSubmit = (e) => {
        e.preventDefault();

        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({
                error: 'Please provide description and amount.'
            }))
        } else {
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount) * 100,
                createdAt: this.state.createdAt ? this.state.createdAt.valueOf() : this.state.date.valueOf(),
                note: this.state.note
            });

            this.setState(() => ({
                error: '',
                description: '',
                amount: ''
            }));
        }
    };

    onFocusChange = ({focused}) => {
        this.setState(() => ({
            calendarFocused: focused
        }))
    };

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onFormSubmit}>
                    <input
                        type="text"
                        placeholder={"Description*"}
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type="text"
                        placeholder={"Amount (Two Decimals)*"}
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                        date={this.state.date}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                        displayFormat='DD/MM/YYYY'
                        firstDayOfWeek={1}
                        showClearDate={true}
                    />
                    <textarea
                        placeholder={"Add a note for your expense (optional)"}
                        onChange={this.onNoteChange}
                    >
                    </textarea>
                    <button>{this.props.expense ? 'Edit Expense' : 'Add Expense'}</button>
                </form>
            </div>
        );
    }
}

export default ExpenseForm
