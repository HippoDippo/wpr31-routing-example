import React, {Component} from 'react';
import axios from 'axios';

export default class Second extends Component{
    constructor(props) {
        super(props);
        this.state = {
            car: {}
        }
    }
    componentDidMount() {
        let id = parseInt(this.props.match.params.id)
        axios.get('https://joes-autos.herokuapp.com/api/vehicles/' + id)
        .then((response) => {
            this.setState({
                car: response.data[0]
            })
        })
    }
    render() {
        let {car} = this.state
        return (
            <div>
                <h1>Car Details Route</h1>
                <p>ID: {car.id}</p>
                <p>Make: {car.make}</p>
                <p>Model: {car.model}</p>
                <p>Year: {car.year}</p>
                <p>Color: {car.color}</p>
            </div> 
        )
    }
}