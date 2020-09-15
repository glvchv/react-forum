import React from 'react';
import renderer from 'react-test-renderer';
import Rule from '.';

describe('Rule component', () => {
    it('should render component', () => {
        const tree = renderer.create(<Rule/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});