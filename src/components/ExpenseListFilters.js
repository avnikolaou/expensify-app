import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';

class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    };

    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }))
    };

    render() {
        return (
            <div className={"content-container"}>
                <div className={"input-group"}>
                    <div className={"input-group__item"}>
                        <input className={"text-input"}
                           placeholder={'Search Expenses'}
                           type="text"
                           value={this.props.filters.text}
                           onChange={(e) => {this.props.dispatch(setTextFilter(e.target.value));
                           }}/>
                    </div>

                    <div className={"input-group__item"}>
                        <select className={"select"}
                            value={this.props.filters.sortBy}
                            onChange={(e) => {
                                if (e.target.value === 'date') {
                                    this.props.dispatch(sortByDate());
                                } else {
                                    this.props.dispatch(sortByAmount());
                                }
                            }}
                        >
                            <option value="date">Date</option>
                            <option value="amount">Amount</option>
                        </select>
                    </div>

                    <div className={"input-group__item"}>
                        <DateRangePicker
                            startDate={this.props.filters.startDate}
                            startDateId="my_unique_start_date_id"
                            endDate={this.props.filters.endDate}
                            endDateId="my_unique_end_date_id"
                            onDatesChange={this.onDatesChange}
                            focusedInput={this.state.calendarFocused}
                            onFocusChange={this.onFocusChange}
                            showClearDates={true}
                            numberOfMonths={1}
                            isOutsideRange={() => false}
                            firstDayOfWeek={1}
                            displayFormat='DD/MM/YYYY'
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
};

export default connect(mapStateToProps)(ExpenseListFilters);
