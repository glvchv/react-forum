import React from 'react';
import renderer from 'react-test-renderer';
import Pagination from '.';

describe('Pagination component', () => {
    it('should render component', () => {
        const tree = renderer.create(
            <Pagination postsPerPage={5} totalPosts={20} paginate={() => {}}/>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    })
})