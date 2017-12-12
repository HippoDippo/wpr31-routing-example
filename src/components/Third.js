import React from 'react';
import {Route, Link} from 'react-router-dom';
import Shirts from './Shirts';
import Pants from './Pants';

export default function Third() {
    return (
        <div>
            <h1>Products</h1>
            <Link to='/third/shirts'><p>Shirts</p></Link>
            <Link to='/third/pants'><p>Pants</p></Link>
            <Route path='/third/shirts' component={Shirts} />
            <Route path='/third/pants' component={Pants} />
        </div> 
    )
}