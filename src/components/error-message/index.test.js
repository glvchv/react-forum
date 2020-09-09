import React from 'react';
import ErrorMessage from '.';
import renderer from 'react-test-renderer';

describe('Error-message component', () => {
    it('should render the component with err message', () => {
        const tree = renderer.create(
            <ErrorMessage error='test'/>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    })
})