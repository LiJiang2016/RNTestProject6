'use strict'

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {TeaNavigator, Theme} from 'teaset';
import Login from './views/Login';

Theme.set({fitIPhoneX:true});

export default class App extends Component<{}>{
    render(){
        return <TeaNavigator rootView={<Login />} />;
    }
}
