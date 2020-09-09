import React from 'react';
import renderer from 'react-test-renderer';
import Button from '.';
import { BrowserRouter } from 'react-router-dom';

describe('Button component test', () => {
    it('should render the default button', () => {
        const tree = renderer.create(
            <BrowserRouter>
                <Button link="/" type="default" text="test" />
            </BrowserRouter>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render the delete button', () => {
        const tree = renderer.create(
            <BrowserRouter>
                <Button link="/" type="delete" text="test" />
            </BrowserRouter>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render the edit button', () => {
        const tree = renderer.create(
            <BrowserRouter>
                <Button link="/" type="edit" text="test" />
            </BrowserRouter>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

})