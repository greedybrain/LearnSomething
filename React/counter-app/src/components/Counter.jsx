import React, { Component } from 'react';

class Counter extends Component {
        formatCount = () => {
                const { value } = this.props.counter
                if (value === 0) return 'Zero'
                return value
        }

        getBadgeClasses = () => {
                const { value } = this.props.counter
                let classes = "badge m-2 badge-"
                classes += (value === 0) ? 'warning ': 'primary '
                return classes
        }

        render() {
                const { onDelete, onIncrement, onDecrement, counter } = this.props
                return (
                        <div class="row">
                                <div className="col-1">
                                        <span className={this.getBadgeClasses()}>{ this.formatCount() }</span>
                                </div>
                                <div className="col">
                                        <button 
                                                onClick={() => onIncrement(counter)} 
                                                className="btn btn-secondary btn-md"
                                        >
                                                +
                                        </button>
                                        <button 
                                                onClick={() => onDecrement(counter)} 
                                                className="btn btn-secondary btn-md m-2"
                                                disabled={ counter.value === 0 ? true : null}
                                        >
                                                -
                                        </button>
                                        <button onClick={() => onDelete(counter.id)} className="btn btn-danger btn-sm">
                                                X
                                        </button>
                                </div>
                        </div>
                )
        }
}

export default Counter;