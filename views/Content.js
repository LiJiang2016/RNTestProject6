/**
 * The main content page
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {NavigationPage,Label} from 'teaset';
import {View} from 'react-native';

export default class Content extends NavigationPage{
    static defaultProps={
        ...NavigationPage.defaultProps,
        title:'My App Name',
    }

    renderPage(){
        return(
            <View style={{flex:1}}>
                <Label text='My First commit Test ^_^ .' size='xl'/>
            </View>
        );
    }
}