import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deadline: 'January 1, 2018',
            newDeadline: ''
        }
    }
    changeDeadline() {
       this.setState({deadline: this.state.newDeadline});
    }
    render() {
        return (
            <div className="App">
              <div className="App-title">Countdown to {this.state.deadline}
              </div>
              <Clock 
               deadline={this.state.deadline}
              />
              <Form inline={true}>
              <FormControl
                className="Deadline-input"
                placeholder='Set DateLine'
                onChange={event => this.setState({newDeadline: event.target.value})}
                />
                <Button className="btn btn-primary" onClick={() => this.changeDeadline()}>
                Submit</Button>
              </Form>
              <p className="ex" >Ex January 1, 2019</p>
            </div>
        )
    }
}

export default App;