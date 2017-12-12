import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from './components/Home';
import Second from './components/Second';
import Third from './components/Third';


export default (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/second/:id' component={Second} />
      <Route path='/third' component={Third} />
    </Switch>
)