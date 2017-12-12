import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            carsToDisplay: []
        }
    }

    componentDidMount() {
        axios.get('https://joes-autos.herokuapp.com/api/vehicles')
        .then(res => {
            console.log(res)
            this.setState({
                carsToDisplay: res.data
            })
        })
    }

    render() {
        let cars = this.state.carsToDisplay.map( (e, i) => {
            return (
                <div key={i}>
                    <p>ID: {e.id}</p>
                    <p>Make: {e.make}</p>
                    <Link to={`/second/${e.id}`}><button>Details</button></Link>
                    <hr />
                </div> 
            )
        })
        return (
            <div>
                <h1>Home Route</h1>
                { cars }
            </div> 
        )
    }
}