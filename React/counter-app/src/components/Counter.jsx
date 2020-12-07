import React, { Component } from 'react';

class Counter extends Component {
        state = {
                count: 0,
                // tags: ['tag1', 'tag2', 'tag3']
        }

        formatCount = () => {
                const { count } = this.state
                if (count === 0) return 'Zero'
                return count
        }

        getBadgeClasses = () => {
                const { count } = this.state
                let classes = "badge m-2 badge-"
                classes += (count === 0) ? 'warning ': 'primary '
                return classes
        }

        handleIncrementCount = () => {
                this.setState(prevState => ({
                        count: prevState.count + 1
                }))
        }

        // renderTags = () => {
        //         const { tags } = this.state
        //         if (tags.length === 0) return <p>There are no tags!</p>
        //         return (
        //                 <ul>
        //                         { tags.map((tag, index) => <li key={ index }>{ tag }</li>) }
        //                 </ul>
        //         )
        // }

        render() {
                return (
                        <div>
                                <span className={this.getBadgeClasses()}>{ this.formatCount() }</span>
                                <button 
                                        onClick={this.handleIncrementCount} 
                                        className="btn btn-secondary btn-sm"
                                >
                                        Increment
                                </button>
                                {/* { this.renderTags() } */}
                        </div>
                )
        }
}

export default Counter;