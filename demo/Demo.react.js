import React, {Component} from 'react';
import {Pipe} from '../src';

class Demo extends Component {
    constructor() {
        super();
        this.state = {
            value: '',
            source: 'freda',
            label: 'fredb'
        }
    }
    setTheState(newProps) {
        var ns = { };
        if( newProps.value ) {ns.value = newProps.value; }
        if( newProps.source ) {ns.source = newProps.source;}
        if( newProps.label ) {ns.source = newProps.label;}
        this.setState(ns);
    }
    render() {
        return (
            <div>
                <h1>dpd-components Demo</h1>

                <hr/>
                <h2>Pipe</h2>
                <Pipe
                    label={this.state.label}
                    value={this.state.value}
                    setProps={this.setTheState.bind(this)}
                />
                <hr/>
            </div>
        );
    }
}

export default Demo;
