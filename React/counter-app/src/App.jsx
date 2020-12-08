import React, { Component } from 'react';
import Counters from './components/Counters';
import Navbar from './components/Navbar';

class App extends Component {
        state = {
                counters: [
                        { id: 1, value: 0 },
                        { id: 2, value: 0 },
                        { id: 3, value: 0 },
                        { id: 4, value: 0 },
                        { id: 5, value: 0 },
                        { id: 6, value: 0 },
                        { id: 7, value: 0 },
                        { id: 8, value: 0 },
                ],
        }

        handleDecrement = counter => {
                const counters = [...this.state.counters]
                const index = counters.indexOf(counter)
                counters[index] = { ...counter }
                counters[index].value -= 1
                this.setState({ counters })
        }

        handleIncrement = counter => {
                const counters = [...this.state.counters]
                const index = counters.indexOf(counter)
                counters[index] = { ...counter }
                counters[index].value += 1
                this.setState({ counters })
        }

        handleReset = () => {
                const counters = this.state.counters.map(c => {
                        c.value = 0;
                        return c;
                })
                this.setState({
                        counters
                })
        }
        
        handleDelete = (counterId) => {
                const counters = this.state.counters.filter(counter => counter.id !== counterId)
                this.setState({
                        counters
                })
        }

        render() {
                const { counters } = this.state
                return (
                        <div className="App"> 
                                <Navbar totalCounters={ counters.filter(counter => counter.value > 0).length } />
                                <main className="container">
                                        <Counters 
                                                counters={this.state.counters}
                                                onReset={this.handleReset} 
                                                onIncrement={this.handleIncrement} 
                                                onDecrement={this.handleDecrement}
                                                onDelete={this.handleDelete} 
                                        />
                                </main>
                        </div>
                );
        }
}

export default App;