import React from 'react';
import {shallow} from 'enzyme';
import Pipe from '../Pipe.react';

describe('Pipe', () => {

    it('renders', () => {
        const component = shallow(<Pipe label="Test label"/>);
        expect(component).to.be.ok;
    });
});
