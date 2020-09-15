import React from 'react';
import renderer from 'react-test-renderer';
import Spinner from '.';


describe('Spinner component', () => {
    it('should render component', () => {
        const tree = renderer.create(
            <Spinner />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});