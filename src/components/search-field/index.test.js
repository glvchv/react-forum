import React from 'react';
import renderer from 'react-test-renderer';
import SearchField from '.';


describe('Search-field component', () => {
    it('should render component', () => {
        const tree = renderer.create(<SearchField
             filterBySelect = {() => {}}
             filterPostsByWord = {() => {}}
             filterByButton = {() => {}}/>)
             .toJSON();
        expect(tree).toMatchSnapshot();
    });
});