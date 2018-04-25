import React, {Component} from 'react';

import Goop from './Goop'

export default class App extends Component {

    constructor({people, history, match}) {
        super(people, history);
        this.state = {
            counter: 0,
            people: [
                {firstName: 'Alan', lastName: 'Turing'},
                {firstName: 'Alanzo', lastName: 'Church'},
                {firstName: 'Grace', lastName: 'Hopper'}
            ]
        };
        this.history = history
        this.match = match
    }

    buttonClick = () => {
        console.log("> App.buttonClick()")
        this.history.push("/addPerson")
    }

    render() {
        let {counter} = this.state
        return (
            <div className="App">
                I am the app!
                <h2>Counter: {counter}</h2>
                <h3>Match.path: {this.match.path}</h3>
                <button id="addPersonButton" onClick={this.buttonClick}>Add Person</button>
                <Goop/>
            </div>
        );
    }

}